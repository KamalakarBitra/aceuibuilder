    var editor = grapesjs.init({
      allowScripts: 1,
      showOffsets: 1,
      autorender: 0,
      noticeOnUnload: 0,
      container: "#gjs",
      height: "700px",
      fromElement: true,
      clearOnRender: 0,
      storageManager: {
        autoload: 0
      },
     
  });
  
  editor.on('load', function(){
      debugger;
    editor.setComponents('<div data-gjs-type="pcBox" data-title="ABC" frameborder="0" data-title=""><div class="c1678"><h4></h4></div></div>');
  });
 
   editor.render();
   var comps = editor.DomComponents;
   var defaultType = comps.getType('text');
   var defaultModel = defaultType.model;
   var defaultView = defaultType.view;

    comps.addType('pcBox', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          droppable: false,
          draggable : true,          
          
         
          title: '',
         
          traits: [{
            type: 'text',
            label: 'Title',
            name: 'title',
            placeholder: 'eg. Lorem Ipsum',
            changeProp: 1
          }]
        }),
        
        updateInitialValues: function updateInitialValues() {
			    this.set('title', this.attributes.attributes["data-title"])
        },
        init: function init() {},
        initialize: function initialize(o) {
          defaultModel.prototype.initialize.apply(this, arguments);
          this.updateInitialValues();
          this.listenTo(this, 'change:title', this.updateTitle);
      
        },
        updateAll: function updateAll() {
          this.updateTitle();
        },
        
        updateTitle: function updateTitle() {
          var linkModel = this.get("components").at(0);
          if (linkModel && linkModel.get("components").length > 0) {
            var h4Model = linkModel.get("components").at(0);
            var title = this.get('title');
            h4Model.set("content", title);
          }
        }
      }, ),

      // Define the View
      view: defaultView.extend({

        initialize: function initialize(o) {
          defaultView.prototype.initialize.apply(this, arguments);
          this.listenTo(this.model, 'change:title', this.updateTitle);
    
        },
     
        updateTitle: function updateTitle() {
          $(this.el).find('h4').html(this.model.get("title"));
        },
     
        render: function render() {
          this.updateAttributes();
          this.el.innerHTML = "<div style=\"height:100px;background-color:red\"><h4>"+ (this.model.get("title") ? this.model.get("title") : "TEST CONTENT") +"</h4></div>";
          this.model.updateAll();
          return this;
        }
      })



    });



var editor = grapesjs.init({
    showOffsets: 1,
    showDevices: 0,
    noticeOnUnload: 0,
    container: '#gjs',
    height: '100%',
    fromElement: true,
    storageManager: {
        autoload: 0
    },

    plugins: ['grapesjs-tabs'],
    pluginsOpts: {

    }


});
 
editor.DomComponents.addType('tab-content', {
  
    model: {
      defaults: {
        traits: [
         
          'name',
          'placeholder',
          {
            type: 'select', 
            label: 'Type', 
            name: 'type', 
            options: [
              { id: 'text', name: 'Text'},
              { id: 'email', name: 'Email'},
              { id: 'password', name: 'Password'},
              { id: 'number', name: 'Number'},
            ]
          }, {
            type: 'checkbox',
            name: 'required',
        }],
       
      },
    },
});


editor.DomComponents.addType('tab', {
  
  model: {
    defaults: {
      traits: [
        {
          type: 'select', 
          label: 'Type', 
          name: 'type', 
          options: [
            { id: 'text', name: 'Text'},
            { id: 'email', name: 'Email'},
            { id: 'password', name: 'Password'},
            { id: 'number', name: 'Number'},
          ]
        }, {
          type: 'text',
          name: 'source',
      }],
     
    },
  },
});

editor.DomComponents.addType('text', {
  
  model: {
    defaults: {
      traits: [
        {
          type: 'select', 
          label: 'select', 
          name: 'type', 
          options: [
            { id: 'text', name: 'Text'},
            { id: 'email', name: 'Email'},
            { id: 'password', name: 'Password'},
            { id: 'number', name: 'Number'},
          ]
        }, {
          type: 'text',
          name: 'source',
      }],
     
    },
  },
});
editor.setComponents({
    type: 'tabs',
     classes:['cls'],
     // content: 'New component'
   });

let stylePrefix = 'gjs-';
const basicStyle = true;
const flexGrid = false;
const clsRow = `${stylePrefix}row`;
const clsCell = `${stylePrefix}cell`;
const styleRow = `
        .${clsRow} {
          display: table;
          padding: 10px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
            width: 100%;
            display: block;
          }
        }`;
const styleClm = `
        .${clsCell} {
          width: 8%;
          display: table-cell;
          height: 75px;
        }`;
const styleClm30 = `
      .${stylePrefix}cell30 {
        width: 30%;
      }`;
const styleClm70 = `
      .${stylePrefix}cell70 {
        width: 70%;
      }`;

const step = 0.2;
const minDim = 1;
const currentUnit = 1;
const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim
};
const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step
};



const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'Row',
};

const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'Cell',
};




const attrsToString = attrs => {
    const result = [];

    for (let key in attrs) {
        let value = attrs[key];
        const toParse = value instanceof Array || value instanceof Object;
        value = toParse ? JSON.stringify(value) : value;
        result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
}

const attrsRow = attrsToString(rowAttr);
const attrsCell = attrsToString(colAttr);



console.log(blocks);


for (i = 0; i < properties.length; i++) {
    prop = properties[i];


    editor.DomComponents.addType(prop.id, {
        isComponent: el => el.tagName == 'label',

        model: {
            defaults: {

                droppable: 0,
                editable: 1,
                textable: 1,
                traits: prop.prop,

                attributes: {
                    type: 'text',
                    required: true,

                },
                resizable: {
                    tl: 0, // Top left
                    tc: 0, // Top center
                    tr: 0, // Top right
                    cl: 0, // Center left
                    bl: 0, // Bottom left
              }
            },
        },

    });

}
for (i = 0; i < blocks.length; i++) {
    block = blocks[i];
    editor.BlockManager.add(block.id, {

        label:`<div>
        <img src="js/Updated Icons/`+block.image+`" style="width: 30px; height: 50px;"/ >
        <div class="my-label-block">`+block.label+`</div>
      </div>`,
        category: block.category,
        attributes: {
            // class: block.icon,
            // image:block.image,

        },
            //     resizable: {
            //         tl: 0, // Top left
            //         tc: 0, // Top center
            //         tr: 0, // Top right
            //         cl: 0, // Center left
            //         bl: 0, // Bottom left
            //   },
        content: block.content,
      
    });
}


function openModal() {
 
    const pfx = editor.getConfig().stylePrefix;
    const modal = editor.Modal;
  
    const container = document.createElement('div');
  
    const inputHtml = `
    
    
    `;
  
    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Submit';
    btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
    btnEdit.onclick = function() {
    //   const urlInputElement = document.getElementById('urlInput');
    //   const idInputElement = document.getElementById('idInput');
  
    //   const urlVal = urlInputElement.value;
    //   const idVal = idInputElement.value;
  
      // here is where you put your ajax logic
    //   myAjaxCallFunction(urlVal, idVal);
  
      modal.close();
    };
  
    modal.setTitle('');
    container.innerHTML = inputHtml;
    container.appendChild(btnEdit);
    modal.setContent(`
   
    <iframe src="http://localhost/aceuibuilder" style="height:500px;width:100%;"></iframe>
    
    `
    );
    modal.open();
  };

// this._builder.on('component:add', (model, argument) => {
//     model.trigger('active')
// })

editor.TraitManager.addType('display_name', {
    eventCapture: ['input'], // you can use multiple events in the array
    onEvent({ elInput, component, event }) {
        component.content = elInput.value
        console.log(elInput, component.content, event, elInput.value)
  
        console.log(component.content)

        // component.addAttributes( 'value',component.content);
  
    const value = component.value || component.content;
   
    component.addAttributes({ value });
    }

  });

//   editor.on("component:selected", function(args) { args[1].add("resizable", true); });

// .....code for adding trait...editor.....

// var defaultType = editor.DomComponents.getType("default");
// var _initialize = defaultType.model.prototype.initialize;
// defaultType.model.prototype.initialize = function() {
//     _initialize.apply(this, arguments);

//     this.get("traits").add({
//         type: "input",
//         label: "Crazy Attribute",
//         name: "data-crazy"
//     });
// };



function hello() {
    alert("hello");
}

function addfield() {
    // alert('hello')
    // model.get('traits').add([{name: 'product', label: 'Title'},])
    // Component selected in canvas
    const component = editor.getSelected();
    const traits = component.get('traits');
    traits.forEach(trait => console.log(trait.props()))
    // const component = editor.getSelected();
    component.addTrait({
        name: 'type',
    }, {
        at: 10
    });
}
var pn = editor.Panels;

// .....toolbar...

const TOOLBAR_CELL = [{
        attributes: {
            class: "fa fa-arrows"
        },
        command: "tlb-move"
    },
    {
        attributes: {
            class: "fa fa-flag"
        },
        command: "table-insert-row-above"
    },

    {
        attributes: {
            class: 'fa fa-clone'
        },
        command: 'tlb-clone',
    },
    {
        attributes: {
            class: 'fa fa-trash-o'
        },
        command: 'tlb-delete',
    }
];
const getCellToolbar = () => TOOLBAR_CELL;


// Show borders by default
pn.getButton('options', 'sw-visibility').set('active', 1);

function dosomething(val){
    console.log(val);
}
    


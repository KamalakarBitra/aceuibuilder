dynamicUrl = 'http://54.224.111.149:5002'

var queueid = getUrlParameter("queueid");
var queue_unique_name = getUrlParameter('queue_unique_name');
var tenant_id = getUrlParameter('tenant_id');

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
var all_options;
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

function sampleClick(comps) {
    console.log(comps);
    output = [];
    convertor(JSON.parse(comps), output)
    
    // editor.on('block:drag:stop', function (droppedComponent) {
    //     console.log('hello')
    // })   
    
    
    
    // a = JSON.parse(comps)
    // allTabs = {};
    // final_tab = []
    // tab_fields = []

    // sendObj = {
    //     flag: 'save_layout',
    // }
    // sendObj.classification = 'Layout'
    // sendObj.queueid = sessionStorage.getItem('id')
    // sendObj.template = JSON.stringify(editor.getComponents())
    // sendObj.tenant_id = tenant_id

    // console.log(sendObj);

    // var settings11 = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": dynamicUrl + "/builder_components",
    //     "method": "POST",
    //     "processData": false,
    //     "contentType": "application/json",
    //     "data": JSON.stringify(sendObj)
    // };

    // $.ajax(settings11).done(function (resp) {
    //     console.log(resp);

    // })
    
    

}

allProperties = properties

function convertor(_input, output) {
    if ($.type(_input) == "object") {
        temp_obj = Object.assign({}, _input)
        // delete temp_obj['components'];
        if (!temp_obj.attributes) {
            temp_obj.attributes = {};
        }
        
        var get_id = temp_obj.attributes['id'];
        var ele = document.getElementById("add-custom-id").contentWindow.document.getElementById(get_id);
        if (ele) {
            parent_id = ele.parentElement.id
            temp_obj.width = ele.offsetWidth;
            temp_obj.height = ele.offsetHeight;
        }
        else {
            parent_id = null
            temp_obj.width = 0;
            temp_obj.height = 0;
        }
        temp_obj.attributes.parent_id = parent_id
        
        temp_obj.props = []
        if (temp_obj.type) {
            prop_idx = allProperties.findIndex(x => x.id = temp_obj.type);
            if (prop_idx > -1) {
                prop_ele = allProperties[prop_idx].prop
                for (let i = 0; i < prop_ele.length; i++) {
                    vl = temp_obj.attributes[prop_ele[i].name] ? temp_obj.attributes[prop_ele[i].name] : ""
                    prop_ele[i].back.attribute_value = vl;
                    temp_obj.props.push(prop_ele[i].back);
                }
            }
        }
        // _input = temp_obj;
        output.push(temp_obj)
    }
    if ($.type(_input) == "array") {
        for (var i = 0; i < _input.length; i++) {
            output = convertor(_input[i], output)
        }
    }
    else if ($.type(_input) == "object" && "components" in _input) {
        output = convertor(_input["components"], output)
    }
    console.log(JSON.stringify(output), _input);
    return output
}



function getCall(res) {
    // console.log(val.template);
    
    data = res.data.components;
    all_options = res.data.dropdown;
    arr = []
    properties = []
    for (i = 0; i < data.length; i++) {
        for (category in data[i]) {
            for (component in data[i][category]) {
                if (component != 'tabs') {
                    obj = {
                        id: (i + 1),
                        label: component,
                        category: category,
                        content: {
                            tagName: 'input',
                            components: '<input type="text">',
                            type: component,
                            attributes: {
                                placeholder: 'Field'
                            }
                        },
                        icon: 'fa fa-window-minimize'
                    }
                    arr.push(obj);
                    propObj = {}
                    propObj.id = component
                    propObj.prop = []
                    for (j = 0; j < data[i][category][component].length; j++) {
                        pobj = {}
                        ty = getType(data[i][category][component][j].attribute_master_type)
                        if (data[i][category][component][j].attribute_master_name == "display_name") {
                            ty = 'display_name';
                        }
                        pobj.type = ty;
                        pobj.options = getOptions(data[i][category][component][j])
                        pobj.name = data[i][category][component][j].attribute_master_name
                        pobj.label = data[i][category][component][j].attribute_master_display_name
                        pobj.back = data[i][category][component][j]
                        propObj.prop.push(pobj)
                    }
                    properties.push(propObj)
                }
            }
        }
        
    }
    console.log(arr, properties);
    allProperties = properties;
    generateBlocks(arr, properties, res.template);
}

function getType(ty) {
    type = ''
    switch (ty) {
        case "input_text":
            type = "text";
            break;
        case "dynamic_select":
        case "static_select":
            type = "select";
            break;
    }
    return type
}

function getOptions(dt) {
    options = [];
    if (all_options[dt.attribute_master_id]) {
        for (let i = 0; i < all_options[dt.attribute_master_id].length; i++) {
            const element = all_options[dt.attribute_master_id][i];
            options.push({ name: element.attribute_name, value: element.attribute_value})
        }
    }
    return options;
}

function generateBlocks(blocks, properties, template) {
    for (i = 0; i < blocks.length; i++) {
        block = blocks[i];
        editor.BlockManager.add(block.id, {
            label: block.label,
            category: block.category,
            attributes: {
                class: block.icon
            },
            content: block.content,
        });
    }
    generateProperties(properties, template);
}

function generateProperties(properties) {
    console.log(properties)
    for (i = 0; i < properties.length; i++) {
        prop = properties[i];
        editor.DomComponents.addType(prop.id, {
            isComponent: el => el.tagName == 'label',
            model: {
                defaults: {
                    traits: prop.prop,
                    attributes: {
                        type: 'text',
                        required: true
                    },
                },
            },
        });
    }
}

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
                    options: [{
                            id: 'text',
                            name: 'Text'
                        },
                        {
                            id: 'email',
                            name: 'Email'
                        },
                        {
                            id: 'password',
                            name: 'Password'
                        },
                        {
                            id: 'number',
                            name: 'Number'
                        },
                    ]
                }, {
                    type: 'checkbox',
                    name: 'required',
                }
            ],

        },
    },
});


editor.DomComponents.addType('tab', {

    model: {
        defaults: {
            traits: [{
                type: 'select',
                label: 'Type',
                name: 'type',
                options: [{
                        id: 'text',
                        name: 'Text'
                    },
                    {
                        id: 'email',
                        name: 'Email'
                    },
                    {
                        id: 'password',
                        name: 'Password'
                    },
                    {
                        id: 'number',
                        name: 'Number'
                    },
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
            traits: [{
                type: 'select',
                label: 'select',
                name: 'type',
                options: [{
                        id: 'text',
                        name: 'Text'
                    },
                    {
                        id: 'email',
                        name: 'Email'
                    },
                    {
                        id: 'password',
                        name: 'Password'
                    },
                    {
                        id: 'number',
                        name: 'Number'
                    },
                ]
            }, {
                type: 'text',
                name: 'source',
            }],

        },
    },
});
// editor.setComponents({
//     type: 'tabs',
//     classes: ['cls'],
//     content: 'New component'
// });

// editor.setComponents('<div class="row"> <div class="col-sm-12" style="border:10px solid black"> </div><div class="col-sm-12" style="border:10px solid black"><div class="row" style="margin-top: 1.rem;"> <div class="columns"> <h2>Vertical Tabs</h2> <p>And here is the example of Vertical Tabs. Just add the <code>.vertical</code> class to a tabstrip to stack tabs vertically. You can also place the tabstrip and the tab contents in a grid to make them sit side-by-side.</p></div></div><div class="row collapse"> <div class="medium-3 columns"> <ul class="vertical tabs" data-tabs id="example-tabs"> <li class="tabs-title is-active"><a href="#panel1v" aria-selected="true">Tab 1</a></li><li class="tabs-title"><a href="#panel2v">Tab 2</a></li><li class="tabs-title"><a href="#panel3v">Tab 3</a></li><li class="tabs-title"><a href="#panel4v">Tab 4</a></li><li class="tabs-title"><a href="#panel5v">Tab 5</a></li><li class="tabs-title"><a href="#panel6v">Tab 6</a></li></ul> </div><div class="medium-9 columns"> <div class="tabs-content" data-tabs-content="example-tabs"> <div class="tabs-panel is-active" id="panel1v"> <p>One</p><p>Check me out! Im a super cool Tab panel with text content!</p></div><div class="tabs-panel" id="panel2v"> <p>Two</p><img class="thumbnail" src="// ion.zurb.com/sites/docs/assets/img/generic/rectangle-7.jpg"> </div><div class="tabs-panel" id="panel3v"> <p>Three</p><p>Check me out! Im a super cool Tab panel with text content!</p></div><div class="tabs-panel" id="panel4v"> <p>Four</p><img class="thumbnail" src="//foundation.zurb.com/sites/docs/assets/img/generic/rectangle-2.jpg"> </div><div class="tabs-panel" id="panel5v"> <p>Five</p><p>Check me out! Im a super cool Tab panel with text content!</p></div><div class="tabs-panel" id="panel6v"> <p>Six</p><img class="thumbnail" src="//foundation.zurb.com/sites/docs/assets/img/generic/rectangle-8.jpg"></div></div></div></div></div></div>');


// <img src="js/Updated Icons/Image.svg" style="">
// <img src="js/Updated Icons/mesh.svg">
// <img src="js/Updated Icons/User Management.svg">
/* <li><a href=""><img src="js/Updated Icons/logo.svg" style="height:20px"></a></li> */

// editor.setComponents(`
//     <div ty="header" id="inac" style="height:60px;background:#9c27b0bf;color:white;text-align:right">
//         <img src="js/Updated Icons/ace_logo.png" style="height: 60px;float: left;margin-left: 20px;">
//         <img src="js/Updated Icons/man-user.svg" style="margin-top:15px;width: 20px;float: right;margin-right: 29px;">
//         <input type="search" placeholder="search...." style="margin-top:10px;float:center" >
//     </div>
//     <div data-gjs-type="default" ty="mainBody" id="inacaes" style="height:100%;">
    
//     </div>
// `)



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
        resizable: {
            tl: 0, // Top left
            tc: 0, // Top center
            tr: 0, // Top right
            cl: 0, // Center left
            bl: 0, // Bottom left
        },
        content: block.content,
      
    });
}


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

editor.TraitManager.addType('display_name', {
    eventCapture: ['input'], // you can use multiple events in the array
    onEvent({ elInput, component, event }) {
        component.content = elInput.value
        const value = component.value || component.content;
        component.addAttributes({ value });
    }
});

function addfield() {
    const component = editor.getSelected();
    const traits = component.get('traits');
    traits.forEach(trait => console.log(trait.props()))
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
    


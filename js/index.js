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
    a = JSON.parse(comps)
    allTabs = {};
    final_tab = []
    tab_fields = []

    sendObj = {
        flag: 'save_layout',
    }
    sendObj.classification = 'Layout'
    sendObj.queueid = sessionStorage.getItem('id')
    sendObj.template = JSON.stringify(editor.getComponents())
    sendObj.tenant_id = tenant_id

    console.log(sendObj);

    var settings11 = {
        "async": true,
        "crossDomain": true,
        "url": dynamicUrl + "/builder_components",
        "method": "POST",
        "processData": false,
        "contentType": "application/json",
        "data": JSON.stringify(sendObj)
    };

    $.ajax(settings11).done(function (resp) {
        console.log(resp);

    })

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
                        pobj.type = getType(data[i][category][component][j].attribute_master_type);
                        pobj.options = getOptions(data[i][category][component][j])
                        pobj.name = data[i][category][component][j].attribute_master_name
                        pobj.label = data[i][category][component][j].attribute_master_name
                        propObj.prop.push(pobj)
                    }
                    properties.push(propObj)
                }
            }
        }
        
    }
    console.log(arr, properties);

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
                        { id: 'text', name: 'Text' },
                        { id: 'email', name: 'Email' },
                        { id: 'password', name: 'Password' },
                        { id: 'number', name: 'Number' },
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
                        { id: 'text', name: 'Text' },
                        { id: 'email', name: 'Email' },
                        { id: 'password', name: 'Password' },
                        { id: 'number', name: 'Number' },
                    ]
                },
                {
                    type: 'text',
                    name: 'source',
                    label: 'Source'
                },
            ],

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
                        { id: 'text', name: 'Text' },
                        { id: 'email', name: 'Email' },
                        { id: 'password', name: 'Password' },
                        { id: 'number', name: 'Number' },
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
    classes: ['cls'],
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
    
    if (template) {
        editor.setComponents(JSON.parse(template))
    }
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

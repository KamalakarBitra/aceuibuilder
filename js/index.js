dynamicUrl = 'http://54.197.10.114:5002'

var tempHtml
var queue_name = getUrlParameter("queue_name");
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
        'grapesjs-tabs': {
            tabsBlock: {
                category: 'Basic Components',
                droppable: '[data-gjs-type="column"]'
            }
        }
    }
});

console.log("-----------------------------------------------");
var new_dropped_id;
editor.on('component:selected', function(e) {
    sessionStorage.setItem('selected_component', JSON.stringify(e));
    window.parent.$('#openPpanel').click();
});
console.log("-----------------------------------------------");

editor.on('component:styleUpdate', (some, argument) => {
    console.log(JSON.stringify(some), argument);
 })

 editor.setStyle({
    selectors: ['dependency'],
    style: { color: 'red' }
  });
  

function sampleClick(comps) {
    output = [];
    sizeObj = {}
    convertor(JSON.parse(comps), output, sizeObj)
    
    setTimeout(() => {
        localStorage.setItem('mesh_object', JSON.stringify(output));
        localStorage.setItem('sizeObj', JSON.stringify(sizeObj));
        window.parent.$("#saveScreen").click();
    }, 2000);
}

function convertor(_input, output, sizeObj) {
    if ($.type(_input) == "object") {
        temp_obj = Object.assign({}, _input)
        // delete temp_obj['components'];
        if (!temp_obj.attributes) { 
            temp_obj.attributes = {};
        }
        
        var get_id = temp_obj.attributes['id'];
        var ele = document.getElementById("add-custom-id").contentWindow.document.getElementById(get_id);
        width = 0;
        height = 0;
        if (ele) {
            parent_id = ele.parentElement.id
            width = ele.offsetWidth;
            height = ele.offsetHeight;
        }
        else {
            parent_id = null
        }
        temp_obj.attributes.parent_id = parent_id
        console.log(temp_obj)
        temp_obj.props = []
        sizeObj[get_id] = {}
        sizeObj[get_id].width = width
        sizeObj[get_id].height = height
        output.push(temp_obj)
    }
    if ($.type(_input) == "array") {
        for (var i = 0; i < _input.length; i++) {
            output = convertor(_input[i], output, sizeObj)
        }
    }
    else if ($.type(_input) == "object" && "components" in _input) {
        output = convertor(_input["components"], output, sizeObj)
    }

    
    return output
}

function getCall() {
    tempHtml = localStorage.getItem('screenTemplate')
    
    generateBlocks(tempHtml);
}

function generateBlocks(tempHtml) {
    for (i = 0; i < blocks.length; i++) {
        block = blocks[i];
        editor.BlockManager.add(block.id, {
            label: `<div>
                <img src="Images/Updated Icons/` + block.image + `" style="width: 30px; height: 50px;"/ >
                <div class="my-label-block">` + block.label + `</div>
            </div>`,
            category: block.category,
            attributes: {

            },
            resizable: {
                tl: 0, // Top left
                tc: 0, // Top center
                tr: 0, // Top right
                cl: 0, // Center left
                cr: 0, // Center Right
                bl: 0, // Bottom left
                br: 0, // Bottom Right
                bc: 0, // Bottom Center
            },
            content: block.content,
        });
    }
    
    if (!tempHtml) {
        editor.setComponents('<div class="row" ty="mesh"><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_8"></div></div>')
    } else {
        editor.setComponents(tempHtml)
    }
    
    const categories = editor.BlockManager.getCategories();
    categories.each(category => {
        category.set('open', false).on('change:open', opened => {
            opened.get('open') && categories.each(category => {
                category !== opened && category.set('open', false)
            })
        })
    })
}


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

editor.Commands.add('cmdClear', () => editor.DomComponents.clear() );

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
// function addRuleModal(rule){
//     // console.log('rule', $("#iframe"));
//     var s = $("#iframe");
//     var x  = $('#gjs iframe').children('.gjs-dashed')
//     console.log($('#gjs iframe'));

//     var doc=$('#gjs iframe');
//     access()
    
//     // console.log(s,x)
//     // window.HTMLIFrameElement.getAttributes('.')
//     // window.parent.$('#openSCBiz').click();
// }

function addRuleModal(rule){
    var iframeEle = $("#add-custom-id").contents().find('.gjs-comp-selected');
    console.log(iframeEle.attr('id'));
    sessionStorage.setItem('screen_bz_click', iframeEle.attr('id'))

    window.parent.$('#openSCBiz').click();
 }

function getFields(field_obj, id){
    var tr = ''
    if(field_obj.type == 'text'){
        tr+= '<div class="row sub-box">'
        tr+= '<div class="col-sm-12">'
        tr+= '<h5 class="label">'+field_obj.label+':</h5>'
        tr+= '</div>'
        tr+= '<div class="col-sm-12">'
        tr+= '<input type="text" placeholder="" class="input_class input_class_'+id+'_'+field_obj.name+'">'
        tr+= '</div>'
        tr+= '</div>'
    }

    return tr;
}

getCall()
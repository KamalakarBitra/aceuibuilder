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


const components = this._editor.DomComponents;
const text = components.getType('text');
components.addType('cell', {
    model: text.model.extend({
        defaults: Object.assign({}, text.model.prototype.defaults, {
            type: 'cell',
            tagName: 'td',
            draggable: ['tr'],

        }),
    },

        {
            isComponent(el) {
                let result;
                const tag = el.tagName;
                if (tag == 'TD' || tag == 'TH') {
                    result = {
                        type: 'cell',
                        tagName: tag.toLowerCase()
                    };
                }
                return result;
            }
        }),
    view: text.view,
});



this._editor.on('component:selected', m => {
    const compType = m.get('type');
    switch (compType) {
        case 'cell':
            m.set('toolbar', getCellToolbar());
    }
});



this._editor.Commands.add('table-insert-row-above', editor => {
    const selected = editor.getSelected();

    if (selected.is('cell')) {
        const rowComponent = selected.parent();
        const rowIndex = rowComponent.collection.indexOf(rowComponent);
        const cells = rowComponent.components().length;
        const rowContainer = rowComponent.parent();

        rowContainer.components().add({
            type: 'row',
            components: [...Array(cells).keys()].map(i => ({
                type: 'cell',
                content: 'New Cell',
            }))
        }, {
            at: rowIndex
        });
    }
});


// .....file upload ...


function myFunction() {
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}


















// ....datetimepicker......
$(function () {
    $('#datetimepicker1').datetimepicker();
});




// Show borders by default
pn.getButton('options', 'sw-visibility').set('active', 1);

// .....cropper.....

var canvas = $("#canvas"),
    context = canvas.get(0).getContext("2d"),
    $result = $('#result');

$('#fileInput').on('change', function () {
    if (this.files && this.files[0]) {
        if (this.files[0].type.match(/^image\//)) {
            var reader = new FileReader();
            reader.onload = function (evt) {
                var img = new Image();
                img.onload = function () {
                    context.canvas.height = img.height;
                    context.canvas.width = img.width;
                    context.drawImage(img, 0, 0);
                    var cropper = canvas.cropper({
                        aspectRatio: 16 / 9
                    });
                    $('#btnCrop').click(function () {
                        // Get a string base 64 data url
                        var croppedImageDataURL = canvas.cropper('getCroppedCanvas').toDataURL("image/png");
                        $result.append($('<img>').attr('src', croppedImageDataURL));
                    });
                    $('#btnRestore').click(function () {
                        canvas.cropper('reset');
                        $result.empty();
                    });
                };
                img.src = evt.target.result;
            };
            reader.readAsDataURL(this.files[0]);
        } else {
            alert("Invalid file type! Please select an image file.");
        }
    } else {
        alert('No file(s) selected.');
    }
});



// editor.setStyle(JSON.parse([blocks]))

// editor.setComponent([components])
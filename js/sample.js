blocks = [
	{
		id: 'lblText',
		label: 'input',
		category: 'fields',
		content: {
			tagName: 'input',
			components: '',
			type:"fields",
			
			attributes: {
				readonly: 'readonly',
				ty: 'input',
				property:'absolute'
				
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%'

			}
		},
		image: "Text Box.svg",
	},
	{
		id: '18',
		label: 'Number',
		category: 'fields',
		content: {
			tagName: 'input',
			components: '',
			type:"fields",
			
			attributes: {
				readonly: 'readonly',
				ty: 'number',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%'
			}
		},
		image: "number.svg",
	},
	{
		id: '0',
		label: 'Radio',
		category: 'fields',
		content: {
			tagName: 'radio',
			components: '',
			type:"fields",
			
			attributes: {
				readonly: 'readonly',
				ty: 'radio',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1"
		},
		image: "radio.svg",
	},
	{
		id: 2, 
		label: 'select',
		category: 'fields',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'select',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			style: {
				width: '100%'
			}

		},
		image: "select.svg",
	},
	{
		id: '1',
		label: 'textarea',
		category: 'fields',
		content: {
			tagName: 'textarea',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'textarea',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%'
			}
		},
		image: "Text Area.svg",
		
	},
	{
		id: 4,
		label: 'checkbox',
		category: 'fields',
		content: {
			tagName: 'checkbox',
			components: '',
			attributes: {
				ty: 'checkbox',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
		},
		image: "check-box.svg",
	},
	{
		id: 6,
		label: 'upload',
		category: 'fields',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				ty: 'upload',
				property:'absolute',
				type: 'text'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			style: {
				width: '100%'
			}
		},
		image: "Upload File.svg",
	},
	{
		id: 7,
		label: 'table',
		category: 'fields',
		content: {
			droppable:'true',
			tagName: 'div',
			components: 'Table',
			attributes: {
				ty: 'table',
				property:'absolute',				
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			droppable: 'false'

		},
		image: "Table.svg",
	},
	{
		id: 9,
		label: '1 column',
		category: 'basic',
		content: {
			tagName: "div",
			components: '<div class="col-lg-12" ty="1column"></div>',
			attributes: {
				ty: '1column',
				property: 'absolute',
				fullwidth: 'true'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%',
				height: '100px',
				margin:'0px !important'
			},
		},
		icon: 'fa fa-square-o',
		image: "rectangle 10.svg",

	},
	{
		id: 10,
		label: '2 column',
		category: 'basic',
		content: {
			tagName: "div",
			components: '<div class="col-sm-6" ty="2column"></div><div class="col-sm-6" ty="2column"></div>',
			attributes: {
				ty: '2column',
				property:'absolute',
				class: 'row',
				fullwidth: 'true'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%',
				height: '100px',
				margin:'0px !important'
			},
		},
		icon: 'fa fa-columns',
		image: "group 6.svg",

	},
	{
		id: 11,
		label: '3 column',
		category: 'basic',
		content: {
			tagName: "div",
			components: '<div class="col-sm-4" ty="3column"></div><div class="col-sm-4" ty="3column"></div><div class="col-sm-4" ty="3column"></div>',
			attributes: {
				ty: '3column',
				property:'absolute',
				class: 'row',
				fullwidth: 'true'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '100%',
				height: '100px',
				margin:'0px !important'
			},
		},

		icon: 'fa fa-map-o',
		image: "group 7.svg",
	},
	{
		id: 12,
		label: '4 column',
		category: 'basic',
		content: {
			tagName: "div",	
			components: '<div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div>',
			attributes: {
				ty: '4column',
				class: 'row',
				property: 'absolute',
				fullwidth: 'true'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
			style: {
				width: '90%',
				height: '100px',
				margin:'0px !important'
			},
		},
		icon: 'fa fa-align-justify',
		image: "group 8.svg",
	},
	{
		id: 15,
		label: 'button',
		category: 'fields',
		content: {
			tagName: "div",
			components: "button",
			attributes: {
				ty: 'button',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type:"prop1",
		},
		// icon: 'fa fa-minus-square-o',
		image: "group 3.svg",
	},
	{
		id: 16,
		label: 'image',
		category: 'components',
		content: {
			tagName: "img",
			components: "",
			attributes: {
				ty: 'image',
				src: 'images/placeholder.jpg',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			style: {
				width: '100%',
				height:'100%'
			}
		},
		type:"prop1",
		
		image: "Image.svg",
	},
	{
		id: 14,
		label: 'Email',
		category: 'components',
		content: {
			tagName: "div",
			components: "email",
			attributes: {
				readonly: 'readonly',
				ty: 'email_microApp',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			style: {
				width: '100%'
			}

		},
		image: "mail.svg",
		type:'plus'
	},
	{
		id: 17,
		label: 'app mesh',
		category: 'Layouts',
		content: {
			components: '<div style="width:12.5%;height:110px" ty="meshcell" m_count="1_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_8"></div>',
			type:"fields",
			attributes:{
				ty:'mesh'
			},
		},
		image: "Ap mesh.svg",
	},
	{
		id: 19,
		label: 'form',
		category: 'fields',
		content: {
			attributes:{
				ty:'form',
				property:'absolute'
			},
			tagName: "form",
			components: '',
			type:"prop1",
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
		},
		
		image: "form.svg",
	},
	{
		id: 20,
		label: 'Timer',
		category: 'fields',
		content: {
			tagName: "div",
			components: "Timer",
			attributes: {
				readonly: 'readonly',
				ty: 'div',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			style: {
				width: '100%'
			}

		},
		image: "timer.svg",
	},
	{
		id: 21,
		label: 'Queue List',
		category: 'fields',
		content: {
			tagName: "div",
			components: "Queue List",
			attributes: {
				readonly: 'readonly',
				ty: 'queue_list',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'prop1',
			style: {
				width: '100%'
			}

		},
		image: "queue.svg",
		type:'plus'
	},
]







properties = [
	{
		id: 'prop1',
		prop: [
			{
				type: 'text',
				name: 'display_name',
				label: 'Display Name',
				changeProp: 0,
			},
			{
				type: 'text',
				name: 'unique_name',
				label: 'Unique Name',
				command:'somecommand'
			},
			{
				type: 'select',
				label: 'Type',
				name: 'type',
				options: [
					'Text', 'Email', 'Password', 'Number', 'hello'
				],
			}
		]
	},
]









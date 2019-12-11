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
		id: 2,
		label: 'select',
		category: 'fields',
		content: {
			tagName: 'select',
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
				width: '100px'
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
				type: 'file'
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
		image: "Upload File.svg",
	},
	{
		id: 7,
		label: 'table',
		category: 'fields',
		content: {
			tagName: 'div',
			components: '',
			attributes: {
				ty: 'table',
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
		image: "Table.svg",
	},
	{
		id: 9,
		label: '1 column',
		category: 'basic',
		content: {
			tagName: "div",
			components: '<div class="col-lg-12" ty="1column"><p>Sample Test</p></div>',
			attributes: {
				ty: '1column',
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
			components: '<div class="col-sm-6" ty="2column"><p>Sample Test</p></div><div class="col-sm-6" ty="2column"><p>Sample Test</p></div>',
			attributes: {
				ty: '2column',
				property:'absolute',
				class: 'row',
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
			components: '<div class="col-sm-4" ty="3column"><p>Sample Test</p></div><div class="col-sm-4" ty="3column"><p>Sample Test</p></div><div class="col-sm-4" ty="3column"><p>Sample Test</p></div>',
			attributes: {
				ty: '3column',
				property:'absolute',
				class: 'row',
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
			components: '<div class="col-sm-3" ty="4column"><p>Sample Test</p></div><div class="col-sm-3" ty="4column"><p>Sample Test</p></div><div class="col-sm-3" ty="4column"><p>Sample Test</p></div><div class="col-sm-3" ty="4column"><p>Sample Test</p></div>',
			attributes: {
				ty: '4column',
				class: 'row',
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
			tagName: "button",
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
				src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=500&q=80',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
		},
		type:"prop1",
		image: "Image.svg",
	},
	{
		id: 17,
		label: 'app mesh',
		category: 'Layouts',
		content: {
			components: '<div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div><div style="width:12.5%;height:110px" ty="meshcell"></div>',
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
		label: 'User management',
		category: 'components',
		content: {
			tagName:'Image',
			attributes:{
				src:'js/Updated Icons/User Management.svg',
				ty:'profile',
				property:'absolute'
			},
			components: '',
			type:"prop1",
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			}
		},
		image: "Image.svg",
	},
]

properties = [
	{
		id: 'prop1',
		prop: [
			{
				// text:'text',
				type: 'display_name',
				name: 'display_name',
				label: 'Display Name',
				changeProp: 0,
				// command: editor =>dosomething(this),
				// attributes: {style: 'display: none'}
			},

			{
				
				type: 'text',
				name: 'unique_name',
				label: 'Unique Name',
				command:'somecommand'
			},

			{
				type: 'checkbox',
				name: 'outline',
				label: 'Outline'
			},

			{
				type: 'checkbox',
				name: 'mandatory',
				label: 'Mandatory'
			},
			{
				type: 'checkbox',
				name: 'editable',
				label: 'Editable'
			},
			{
				type: 'select',
				label: 'Type',
				name: 'type',
				options: [
					'Text', 'Email', 'Password', 'Number', 'hello'
				],
			},
			{
				type: 'checkbox',
				name: 'is_dropdown',
				label: 'Dropdown'
			},
			
			{
				type: 'select',
				label: 'Data Type',
				name: 'data_type',
				options: [
					'Text', 'Email', 'Password', 'Number', 'hello'
				]
			},
			{
				type: 'number',
				name: 'min_length',
				label: 'Min Length'
			},
			{
				type: 'number',
				name: 'max_length',
				label: 'Max Length'
			},
			{
				type: 'text',
				name: 'pattern',
				label: 'Pattern'
			},
			{
				type: 'number',
				name: 'max_date',
				label: 'Max Date'
			},
			{
				type: 'number',
				name: 'confidence_threshold',
				label: 'Confidence Threshold'
			},
			{
				type: 'checkbox',
				name: 'Consider field for export',
				label: 'Consider field for export',

			},
			{
				type: 'button',
				text: 'Add Rule',
				value: 'rule',
				command : editor => addRuleModal("rule")
			}


		]
	},
]















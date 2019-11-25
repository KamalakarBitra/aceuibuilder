blocks = [
	{
		id: 'lblText',
		label: 'input',
		category: 'fields',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'input'
			},
			type: "fields",
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
			components: '<input type="text" readonly/>',
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
			components: '<textarea rows="4" cols="50"></textarea>',
			type: "fields",
			
			attributes: {
				placeholder: 'insert your text here',
			},
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
			components: '<input type="checkbox">',
			type: 'prop1',
		},
		image: "check-box.svg",
	},
	{
		id: 6,
		label: 'upload',
		category: 'fields',
		content: {
			tagName: 'upload',
			components: '<input type="file">',
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
			components: '<div style="width: 100%; height: 100%">Table</div>',
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
			components: "",
			type: "fields",
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
			components: '<div class="row twocols" ty="2 column" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-6"></div><div class="col-sm-6"></div></div>',
			type: "fields",
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
			components: '<div class="row" ty="3 column" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-4"></div><div class="col-sm-4"></div><div class="col-sm-4"></div></div>',
			type: "fields",
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
			components: '<div class="row" ty="4 column" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div></div>',
			type: "fields",
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
			components: '<button ty="button" type="submit" class="btn btn-primary" style="width:100px">Button</button>',
			type: "fields",
		},
		// icon: 'fa fa-minus-square-o',
		image: "group 3.svg",
	},
	{
		id: 16,
		label: 'image',
		category: 'components',
		content: {
			components: '<img ty="image" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=500&q=80">',
			type: "fields",
		},
		image: "Image.svg",
	},
	{
		id: 17,
		label: 'app mesh',
		category: 'Layouts',
		content: {
			attributes: {
				ty: 'mesh',
				class: 'row',
			},
			class: 'row',
			components: '<div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div><div class="col-sm-2" style="height:110px" ty="meshcell"></div>',
			type: "",
		},
		image: "Ap mesh.svg",
	},
	{
		id: 19,
		label: 'form',
		category: 'fields',
		content: {
			components: '<form></form>',
			type: "fields",
		},
		image: "form.svg",
	},
	{
		id: 20,
		label: 'User management',
		category: 'components',
		content: {
			components: '<img src="js/Updated Icons/User Management.svg">',
			type: "fields",
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


		]
	},
]





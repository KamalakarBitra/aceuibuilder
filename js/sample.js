blocks = [
	
	{
		id: 'lblText',
		label: 'input',
		category: 'fields',
	
		// command: 'some-command',
		content: {
			tagName: 'input',
			components: '',
			type: "prop1",
			
			attributes: {
				placeholder: 'insert your text here',
				// value:'hello',
				// title:'hello'
			},
			style: {
				width: '100%'

			}
         
			
		},
		// icon: 'fa fa-window-minimize',
		image: "Text Box.svg",
	},

	{
		id: 2,
		label: 'select',
		category: 'fields',
		content: {
			tagName: 'select',
			components: '<div><select><option>Here is the unstyled select box</option><option>The second option</option><option>The third option</option></select></div',
			type: 'prop1',
			style: {
				width: '100px'

			}

		},
		// icon: 'fa fa-caret-square-o-down',
		image: "select.svg",
	},
	{
		id: '1',
		label: 'textarea',
		category: 'fields',
	
		// command: 'some-command',
		content: {
			tagName: 'textarea',
			components: '<textarea rows="4" cols="50"></textarea>',
			type: "prop1",
			
			attributes: {
				placeholder: 'insert your text here',
				// value:'hello',
				// title:'hello'
			},
			style: {
				width: '100%'

			}
         
			
		},
		// icon: 'fa fa-pencil-square-o',
		image: "Text Area.svg",
		
	},
	// {
	// 	id: 3,
	// 	label: 'date picker',
	// 	category: 'fields',
	// 	content: {
	// 		tagName: 'input',
	// 		components: '<input type="date" >',
	// 		type: 'prop1',
	// 		attributes: {
	// 			placeholder: 'date picker'
	// 		}
	// 	},
	// 	icon: 'fa fa-calendar-plus-o',
	// 	// image: "Text Box.svg",
	// },
	{
		id: 4,
		label: 'checkbox',
		category: 'fields',
		content: {
			tagName: 'checkbox',
			components: '<input type="checkbox" name="vehicle2" value="Car"> I have a car<br><input type="checkbox" name="vehicle3" value="Boat" checked> I have a boat',
			type: 'prop1',
		},
		// icon: 'fa fa-check',
		image: "check-box.svg",
	},
	// {
	// 	id: 5,
	// 	label: 'radio',
	// 	category: 'fields',
	// 	content: {
	// 		tagName: 'radio',
	// 		components: '<input type="radio" name="gender" value="male"> Male<br><input type="radio" name="gender" value="female"> Female<br>',
	// 		type: 'prop1',
	// 	},
	// 	icon: 'fa fa-eercast',
	// 	// image: "Text Box.svg",
	// },
	{
		id: 6,
		label: 'upload',
		category: 'fields',
		content: {
			tagName: 'upload',
			components: '<body onload="myFunction()"><input type="file" id="myFile" multiple size="50" onchange="myFunction()"></body>',
			type: 'prop1',
		},
		// icon: 'fa fa-upload',
		image: "Upload File.svg",
	},
	{
		id: 7,
		label: 'table',
		category: 'fields',
		content: {
			tagName: 'div',
			components: '<table class="table  table-bordered table-resizable"><tr><th>table</th><th>table</th><th>table</th></tr><tr><td> </td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>',
			type: 'prop1',
			// attributes: {
			// 	placeholder: 'insert your text here',
			// }
		},
		// icon: 'fa fa-table',
		image: "Table.svg",
	},
	// {

	// 	id: 8,
	// 	label: 'date-time',
	// 	category: 'fields',
	// 	content: {
	// 		tagName: 'date-time',
	// 		components: '<input type="datetime-local" id="meeting-time"name="meeting-time" value="2018-06-12T19:30"min="2018-06-07T00:00" max="2018-06-14T00:00">',
	// 		type: 'prop1',
	// 	},
	// 	icon: 'fa fa-clock-o',
	// 	// image: "Text Box.svg",

	// },
	{
		id: 9,
		label: '1 column',
		category: 'basic',
		content: {
			tagName: "div",
			components: '',
			type: "prop1",
			style: {
				width: '100%',
				height: '100px',
				margin:'0px !important'
				// resize: both
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
			components: '<div class="row twocols" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-6"></div><div class="col-sm-6"></div></div>',
			type: "prop1",
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
			components: '<div class="row" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-4"></div><div class="col-sm-4"></div><div class="col-sm-4"></div></div>',
			type: "prop1",
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
			components: '<div class="row" style="width:100%;height:100px;margin:0px !important"><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div></div>',
			type: "prop1",
			style: {
				
				
			},
		},
		icon: 'fa fa-align-justify',
		image: "group 8.svg",
	},
	{
		id: 13,
		label: 'table',
		category: 'components',
		content: {
			tagName: "div",
			components: '<table class="table  table-bordered table-resizable"><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>',
			type: "prop1",
		},
		// icon: 'fa fa-table',
		image: "Table-1.svg",
	},
	// {
	// 	id: 14,
	// 	label: 'timer',
	// 	category: 'components',
	// 	content: {
	// 		components: '<section><div id="clockdiv"> <div> <span class="days"></span> <div class="smalltext">Days</div></div><div> <span class="hours"></span> <div class="smalltext">Hours</div></div><div> <span class="minutes"></span> <div class="smalltext">Minutes</div></div><div> <span class="seconds"></span> <div class="smalltext">Seconds</div></div></div></section>',
	// 		type: "prop1",
	// 	},
	// 	icon: 'fa fa-clock-o',
	// 	// image: "Text Box.svg",
	// },

	{
		id: 15,
		label: 'button',
		category: 'fields',
		content: {
			components: '<form style="margin: 0 auto;text-align: center;"><button type="submit" class="btn btn-primary" style="width:100px" >login</button></form>',
			type: "prop1",
		},
		// icon: 'fa fa-minus-square-o',
		image: "group 3.svg",
	},
	{
		id: 16,
		label: 'image',
		category: 'components',
		content: {
			components: '<img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80" style="width:30px height:20px">',
			type: "prop1",
		},
		// icon: 'fa fa-minus-square-o',
		image: "Image.svg",
	},
	{
		id: 17,
		label: 'app mesh',
		category: 'Layouts',
		content: {
			components: '<div class="row"><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div><div style="width:12.5%;height:110px"></div></div>',
			type: "prop1",
		},
		// icon: 'fa fa-table',
		image: "Ap mesh.svg",
	},
	{
		id: 18,
		label: 'layout',
		category: 'Layouts',
		content: {
			components: ' ',
			type: "prop1",
		},
		// icon: 'fa fa-window-maximize',
		image: "Layout.svg",
	},
	{
		id: 19,
		label: 'form',
		category: 'fields',
		content: {
			components: '<form action=""> First name:<br><input type="text"> <br>Last name:<br><input type="text"> <br><br><input type="submit" value="Submit"></form>  ',
			type: "prop1",
		},
		// icon: 'fa fa-address-card-o',
		image: "form.svg",
	},
	{
		id: 20,
		label: 'User management',
		category: 'components',
		content: {
			components: '  <img src="js/Updated Icons/User Management.svg">',

			

			type: "prop1",
		},
		// icon: 'fa fa-minus-square-o',
		image: "Image.svg",
	},


,
	
]



properties = [
	{
		id: 'prop1',
		prop: [
			

			{
			type: 'button',
           
            name: 'openmodal',
			changeProp: 1,
            text:'openmodal',
			command: editor =>openModal(),
			},

			{
				// text:'text',
				type: 'display_name',
				name: 'display_name',
				label: 'Display Name',
				changeProp: 1,
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















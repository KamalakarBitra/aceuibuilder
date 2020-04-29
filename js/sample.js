blocks = [
	{
		id: 'text',
		label: 'Text Field',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'text_field_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "field",
			style: {
				width: '100%'

			}
		},
		image: "Text Box.svg",
	},
	{
		id: 'date',
		label: 'Date Field',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'date_field_component',
				property: 'absolute'

			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "field",
			style: {
				width: '100%'
			}
		},
		image: "calendar.svg",
	},
	{
		id: 'datetime',
		label: 'Date Time Field',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'datetime_field_component',
				property: 'absolute'

			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "field",
			style: {
				width: '100%'
			}
		},
		image: "datetime.svg",
	},
	{
		id: 'number',
		label: 'Number Field',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'number_field_component',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "field",
			style: {
				width: '100%'
			}
		},
		image: "number.svg",
	},
	{
		id: 'radio',
		label: 'Radio Field',
		category: 'Basic Components',
		content: {
			tagName: 'radio',
			components: '',
			type: "field",
			
			attributes: {
				readonly: 'readonly',
				ty: 'radio_type_field',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			}
		},
		image: "radio.svg",
	},
	{
		id: 2, 
		label: 'select',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'dropdown_field_component',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'field',
			style: {
				width: '100%'
			}

		},
		image: "select.svg",
	},
	{
		id: 'textarea',
		label: 'Textarea Field',
		category: 'Basic Components',
		content: {
			tagName: 'textarea',
			components: '',
			attributes: {
				readonly: 'readonly',
				ty: 'textarea_field_component',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "field",
			style: {
				width: '100%'
			}
		},
		image: "Text Area.svg",
		
	},
	{
		id: 'checkbox',
		label: 'Checkbox Field',
		category: 'Basic Components',
		content: {
			tagName: 'checkbox',
			components: '',
			attributes: {
				ty: 'checkbox_type_field',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'field',
		},
		image: "check-box.svg",
	},
	{
		id: 'upload',
		label: 'Upload Field',
		category: 'Basic Components',
		content: {
			tagName: 'input',
			components: '',
			attributes: {
				ty: 'upload_field_component',
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
			type: 'field',
			style: {
				width: '100%'
			}
		},
		image: "Upload File.svg",
	},
	{
		id: 'custom_table',
		label: 'Custom Table',
		category: 'Basic Components',
		content: {
			droppable:'true',
			tagName: 'div',
			components: 'Table',
			attributes: {
				ty: 'custom_table_field_component',
				property:'absolute',				
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'field',
			droppable: 'false'

		},
		image: "Table.svg",
	},
	{
		id: 9,
		label: '1 column',
		category: 'Layouts',
		content: {
			tagName: "div",
			components: '<div class="col-lg-12" ty="1column"></div>',
			attributes: {
				ty: 'columns_component',
				columns: '1',
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
			type: "column",
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
		category: 'Layouts',
		content: {
			tagName: "div",
			components: '<div class="col-sm-6" ty="2column"></div><div class="col-sm-6" ty="2column"></div>',
			attributes: {
				ty: 'columns_component',
				columns: '2',
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
			type: "column",
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
		category: 'Layouts',
		content: {
			tagName: "div",
			components: '<div class="col-sm-4" ty="3column"></div><div class="col-sm-4" ty="3column"></div><div class="col-sm-4" ty="3column"></div>',
			attributes: {
				ty: 'columns_component',
				columns: '3',
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
			type: "column",
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
		category: 'Layouts',
		content: {
			tagName: "div",	
			components: '<div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div><div class="col-sm-3" ty="4column"></div>',
			attributes: {
				ty: 'columns_component',
				columns: '4',
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
			type: "column",
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
		id: 'button',
		label: 'Button',
		category: 'Basic Components',
		content: {
			tagName: "button",
			components: '',
			content: "Button",
			attributes: {
				ty: 'button_type_component',
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: "button",
		},
		// icon: 'fa fa-minus-square-o',
		image: "group 3.svg",
	},
	{
		id: 'button_grid',
		label: 'Button Grid',
		category: 'Layouts',
		content: {
			tagName: "div",
			attributes: {
				ty: 'buttons_grid',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			droppable: '[data-gjs-type="button"]'
		},
		type: "button_area",
		// icon: 'fa fa-minus-square-o',
		image: "group 3.svg"
	},
	{
		id: 16,
		label: 'image',
		category: 'Basic Components',
		content: {
			tagName: "img",
			components: "",
			attributes: {
				ty: 'file_tabs_component',
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
		type: "image",
		image: "Image.svg",
	},
	{
		id: 14,
		label: 'Email',
		category: 'Micro Frontend',
		content: {
			tagName: "div",
			components: "email",
			attributes: {
				readonly: 'readonly',
				ty: 'email_mf_component',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'microfrontend',
			style: {
				width: '100%'
			}

		},
		image: "mail.svg",
		type:'plus'
	},
	{
		id: 'training',
		label: 'Training',
		category: 'Micro Frontend',
		content: {
			tagName: "div",
			components: "training",
			attributes: {
				readonly: 'readonly',
				ty: 'training_mf_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'microfrontend',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'string_card',
		label: 'String Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "String Card",
			attributes: {
				readonly: 'readonly',
				ty: 'string_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'text_card',
		label: 'Text Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "Text Card",
			attributes: {
				readonly: 'readonly',
				ty: 'text_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'chart_card',
		label: 'Chart Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "Chart Card",
			attributes: {
				readonly: 'readonly',
				ty: 'chart_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'click_card',
		label: 'Click Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "Click Card",
			attributes: {
				readonly: 'readonly',
				ty: 'click_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'table_card',
		label: 'Table Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "Table Card",
			attributes: {
				readonly: 'readonly',
				ty: 'table_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 'flip_card',
		label: 'Flip Card',
		category: 'Stats',
		content: {
			tagName: "div",
			components: "Flip Card",
			attributes: {
				readonly: 'readonly',
				ty: 'flip_type_cards_component',
				property: 'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'stat_card',
			style: {
				width: '100%'
			}

		},
		image: "training.svg",
		type: 'plus'
	},
	{
		id: 17,
		label: 'app mesh',
		category: 'Layouts',
		content: {
			components: '<div style="width:12.5%;height:110px" ty="meshcell" m_count="1_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="1_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="2_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="3_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="4_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="5_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="6_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="7_8"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_1"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_2"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_3"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_4"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_5"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_6"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_7"></div><div style="width:12.5%;height:110px" ty="meshcell" m_count="8_8"></div>',
			attributes:{
				ty:'mesh'
			},
		},
		image: "Ap mesh.svg",
	},
	{
		id: 20,
		label: 'Timer',
		category: 'Basic Components',
		content: {
			tagName: "div",
			components: "Timer",
			attributes: {
				readonly: 'readonly',
				ty: 'timer',
				property:'absolute'
			},
			resizable: {
				tl: 0, // Top left
				tc: 0, // Top center
				tr: 0, // Top right
				cl: 0, // Center left
				bl: 0, // Bottom left
			},
			type: 'timer',
			style: {
				width: '100%'
			}

		},
		image: "timer.svg",
	},
	{
		id: 21,
		label: 'Queue List',
		category: 'Basic Components',
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
			type: 'queue_list',
			style: {
				width: '100%'
			}

		},
		image: "queue.svg",
		type:'plus'
	},
]
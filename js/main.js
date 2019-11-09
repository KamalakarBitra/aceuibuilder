originUrl = window.location.origin.split(':');
dynamicUrl = originUrl[0] + ":" + originUrl[1] + ":5002";
dynamicUrl = 'http://192.168.0.169:5002'
var queue = getUrlParameter('queue');

var getUrlParameter = function getUrlParameter(sParam) {
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


function sampleClick(comps) {
    a = JSON.parse(comps)

    allTabs = {};
    final_tab = []
    tab_fields = []
    for (var i = 0; i < a.length; i++) {
        if (a[i].type == 'tabs') {
            comps = a[i].components;
            for (var j = 0; j < comps.length; j++) {
                if (comps[j].type == 'tab-content') {
                    fields = comps[j].components;
                    for (var k = 0; k < fields.length; k++) {
                        attrs = fields[k].attributes;
                        tab_name___ = allTabs[comps[j].attributes.id]
                        obj = {}
                        obj["display_name"] = attrs.display_name ? attrs.display_name : ''
                        obj["unique_name"] = attrs.unique_name ? attrs.unique_name + '_' + tab_name___ : ''
                        obj["outline"] = attrs.outline ? attrs.outline : ''
                        obj["mandatory"] = attrs.mandatory ? attrs.mandatory : ''
                        obj["tab_name"] = tab_name___ ? tab_name___ : ''
                        obj["editable"] = attrs.editable ? attrs.editable : ''
                        obj["type"] = attrs.type ? attrs.type : ''
                        obj["is_dropdown"] = attrs.is_dropdown ? attrs.is_dropdown : ''
                        obj["data_type"] = attrs.data_type ? attrs.data_type : ''
                        obj["min_length"] = attrs.min_length ? attrs.min_length : ''
                        obj["max_length"] = attrs.max_length ? attrs.max_length : ''
                        obj["pattern"] = attrs.pattern ? attrs.pattern : ''
                        obj["max_date"] = attrs.max_date ? attrs.max_date : ''
                        obj["confidence_threshold"] = attrs.confidence_threshol ? attrs.confidence_threshol : ''
                        obj["Consider field for export"] = attrs['Consider field for export'] ? attrs['Consider field for export'] : ''
                        obj['queue_id'] = queue
                        tab_fields.push(obj)
                    }
                } else if (comps[j].type == 'tab-container') {
                    tab_names = comps[j].components;
                    for (var k = 0; k < tab_names.length; k++) {
                        var tab_name = ''
                        if (tab_names[k].content != '') {
                            tab_name = tab_names[k].content
                        } else if (tab_names[k].components) {
                            tab_name = tab_names[k].components[0].content;
                        }
                        id = tab_names[k].attributes.href.replace('#', '')
                        allTabs[id] = tab_name
                        final_tab.push({
                            id: (k + 1),
                            text: tab_name
                        })
                    }
                }
            }
        }
    }
    console.log(JSON.stringify({
        tabs: final_tab,
        fields: tab_fields
    }));

    sendObj = {
        flag: 'save',
        tenant_id: 'AB',
        data: {
            tabs: final_tab,
            fields: tab_fields
        }
    }

    var settings11 = {
        "async": true,
        "crossDomain": true,
        "url": dynamicUrl + "/builder_fields",
        "method": "POST",
        "processData": false,
        "contentType": "application/json",
        "data": JSON.stringify(sendObj)
    };

    $.ajax(settings11).done(function (resp) {
        console.log(resp);

    })

}


// ...tabs...
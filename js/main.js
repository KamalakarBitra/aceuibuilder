dynamicUrl = 'http://54.197.10.114:5002'

var queue_name = window.frameElement.getAttribute("queue_name");
var tenant_id = window.frameElement.getAttribute('tenant_id');
tenant_id = 'AB'
console.log(queue_name, tenant_id);


if (tenant_id) {
    sendObj = {}
    sendObj.tenant_id = tenant_id;
    sendObj.flag = 'fetch_layout';
    sendObj.queue_name = queue_name;
    sendObj.main_screen = queue_name;
    sendObj.classification = 'Layout'
    sendObj.template_type = 'layout'

    var settings11 = {
        "async": true,
        "crossDomain": true,
        "url": dynamicUrl + "/builder_components",
        "method": "POST",
        "processData": false,
        "contentType": "application/json",
        "data": JSON.stringify(sendObj)
    };

    // $.ajax(settings11).done(function (resp) {
    //     console.log(resp);
    //     window.parent.getCall(resp, queue_name)
    // })
}




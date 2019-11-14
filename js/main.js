dynamicUrl = 'http://54.224.111.149:5002'

var queueid = window.frameElement.getAttribute("queueid");
var queue_unique_name = window.frameElement.getAttribute('queue_unique_name');
var tenant_id = window.frameElement.getAttribute('tenant_id');
tenant_id = 'AB'
console.log(queueid, queue_unique_name, tenant_id);


if (tenant_id) {
    sendObj = {}
    sendObj.tenant_id = tenant_id;
    sendObj.flag = 'fetch_layout';
    sendObj.queueid = queueid;
    sendObj.classification = 'Layout'

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
        window.parent.getCall(resp)
    })
}



// // ...tabs...


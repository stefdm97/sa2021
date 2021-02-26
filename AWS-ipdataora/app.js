exports.lambdaHandler = async (event) => {
    // TODO implement
    
    var os = require("os");
    var hostname = os.hostname();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' Orario: '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const response = {
        statusCode: 200,
        
        body: JSON.stringify('IP: '+ hostname +' Data: '+ date),
    };
    return response;
};
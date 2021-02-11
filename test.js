exports.Handler = async (event) => {
    // TODO implement
    
    var os = require("os");
    var hostname = os.hostname();
    let date_ob = new Date();
    const response = {
        statusCode: 200,
        
        body: JSON.stringify('Ciao: ' + hostname +' Data: '+ date_ob),
    };
    return response;
};
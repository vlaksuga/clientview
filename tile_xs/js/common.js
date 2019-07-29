window.getP=function(name) {
    var vars = [],param;
    var uri = window.location.href;
    var checkHash = uri.indexOf("#");
    if(checkHash>0){
        uri = uri.substring(0,checkHash);
    }
    var params = uri.slice(uri.indexOf('?') + 1).split('&');
    for(var i = 0; i < params.length; i++) {
        try{
            param = params[i].split('=');
            if(param[0]==name){    
                return param[1];
            }
        }catch(e){}
    }
}
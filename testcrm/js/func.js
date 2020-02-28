function funcgetmedia(okfunc) {
    $.wajax({
        url: domain + "a/getMEDIA.j",
        type: "GET",
        dataType: "jsonp",
        ok: okfunc
    });

}

function funcgetpackage(okfunc) {
    $.wajax({
        url: domain + "p/getList.j",
        type: "GET",
        dataType: "jsonp",
        ok: okfunc

    });
}

function funcgetcamp(okfunc) {
    $.wajax({
        url: domain + "camp/getListByaccountid.j",
        type: "GET",
        dataType: "jsonp",
        ok: okfunc

    });
}

function funcgetcategoryinfo(okfunc,categoryid) {
    $.wajax({
        url: domain + "c/getCategoryInfo.j?categoryid="+categoryid,
        type: "GET",
        dataType: "jsonp",
        ok: okfunc

    });
}

function datetrim(a){
    try{
        a =a.substr(0,10);
    }catch(e){
        
    }
    return a;
}

function datetrimforlist(a){
    try{
        a =a.substr(0,10);
        if(a=="1980-12-27"){
            return "등록일시작";
        }
        if(a=="9999-12-27"){
            return "무한";
        }
    }catch(e){
        
    }
    return a;
}
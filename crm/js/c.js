var domain = "http://127.0.0.1:1818";

var drawFragment = function(e,h){
	return new Promise((resolve,reject) => {
		$.get(h, function (data) {
			$(e).html(data);
			resolve();
		}.bind(this));
	});	
}


var drawNav = function(e,h){
	drawFragment(e,h).then(function(){
		var menu = $("#mySidenav");
		$(".icon_msg_profile img",menu).attr("src","img/ic_profile_capsule"+USER.capsuleid+".png");
        $(".title_sm",menu).text(USER.nick);
        $(".title_lg",menu).text (USER.nick2);

		$("[data-useronly]",menu).attr("href","login.html");
		$("[data-ny]",menu).removeAttr("href").on("click",function(){alert("not yet");});

	});

}




var oms = function(){

	this.get = function(url,data,fn,errfn){
		$.wcall({
			url: domain+url,
			type: "GET",
			dataType: "json",
			data:data,
			ok: fn,
			errfn: errfn
		});
	}



	this.post = function(url,data,fn,errfn){
		$.wcall({
			url: domain+url,
			type: "POST",
			dataType: "json",
			data:data,
			ok: fn,
			errfn: errfn
		});
	};

}


window.oms = new oms();;





var paging = 0;
$.ajaxSetup({
    cache: false
});

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}
$.wcall = function(option) {
    option.error = function(data) {
         alert("서버오류."+data.status+":"+$(data.responseText).text());
    }
    option.success = function(data) {
		var head = data.HEAD;
		var body = data.BODY;
        
        if (head.STATUS == "error") {
			this.errfn(data.HEAD,data.BODY);
        } else {
            this.ok(data.HEAD,data.BODY);
        }
    }

    if (option.ok == null) {
        option.ok = function(head,body) {
            alert("정상처리 되었으나.프로그램 연결에 문제가 있습니다."+$(data).text());
        }
    }
	option.crossDomain=true;

	if(option.type=="POST"){
		option.contentType="application/json";
	}

	var data = option.data;
	//var data = Object.assign(api.user,data);


	if(option.type=="POST"){
		option.data = JSON.stringify(data);
	}
	//option.xhrFields= { withCredentials: true }

    $.ajax(option);
}

$.extend({
    getP: function(name) {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            try {
                hash = hashes[i].split('=');
                if (hash[0] == name) {
					var spos = hash[1].indexOf("#");
                    if (spos==-1) {
                        return hash[1];
                    } else {
                        return hash[1].substr(0,spos);
                    }
                }
            } catch (e) {
            }
        }
    }
});

if($.getP("paging")>0){
    paging = $.getP("paging");
}



function wmap(d, ele) {
    var tmpe = $("<div></div>");
    try {
        $("[bind]", ele).each(function() {
            var wattr = $(this).attr("bind");
            var swattr = wattr.split(',');
            for (i = 0; i < swattr.length; i++) {
                tmpe.text("");
                try {
                    var attr = swattr[i];
                    var kv = attr.split(":");
                    var k = kv[0];
                    var v = kv[1];
                    
                    var val = eval("d." + v);
                    var func = eval(kv[2]);
                    if (func) {

                        val = func(val,$(this),d);
                        if(val==null) return;
                    }
                    if (k == "text") {
                        tmpe.html(val);
                        $(this).text(tmpe.text());
                    } else if (k == "html") {
                        tmpe.html(val);
                        $(this).html(tmpe.html());
                    } else if (k == "rawval") {
                        $(this).val(val);
                    } else if (k == "val") {
                        tmpe.html(val);
                        $(this).val(tmpe.html());
                    }else if (k == "list") {
						var templete = $($("bindtemplete",$(this)).html());
						for(var i = 0;i<val.length;i++){
							var curEle = templete.clone();
							wmap(val[i],curEle);
		                    $(this).append(curEle);
						}
                    }else {
                        $(this).attr(k, val);
                    }
                } catch (e) {
                }
            }

        });
    } catch (e) {
    }

}

function getErrorMsg(data) {
	if (data.HEAD.STATUS=="error")
	{
		if (data.HEAD.MSG) {
			return data.HEAD.MSG;
		} else {
			return ""
		}		
	}
}



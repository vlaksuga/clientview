
function wmap(d, ele) {
    var tmpe = $("<div></div>");
	$(ele).data(d);
    try {
        $("[bind]", ele).each(function() {
            var wattr = $(this).attr("bind");
            var swattr = wattr.split(',');
            for (var i = 0; i < swattr.length; i++) {
                tmpe.text("");
                try {
                    var attr = swattr[i];
                    var kv = attr.split(":");
                    var k = kv[0];
                    var v = kv[1];
                    
					var val = d;
					try{
						valr = eval("d." + v);
						if(valr) val = valr;
					}catch(e){}
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
                    }else if (k == "img") {
                        $(this).attr("src",val);
                    }else if (k == "href") {
                        $(this).attr("href","javascript:processhref(\""+val+"\")");
						$(this).attr("target","");
                    }else if (k == "list") {
						var templete = $(".template",$(this));
						for(var ii = 0;ii<val.length;ii++){
							var curEle = templete.clone();
							curEle.css("display","");
							curEle.removeClass("template");
							wmap(val[ii],curEle);
							wmapone(val[ii], curEle);
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


function wmapone(d, ele) {
    var tmpe = $("<div></div>");
	
	var wattr = $(ele).attr("bind");
	try{
		$(ele).data(d);
		var swattr = wattr.split(',');
		for (i = 0; i < swattr.length; i++) {
			tmpe.text("");
			try {
				var attr = swattr[i];
				var kv = attr.split(":");
				var k = kv[0];
				var v = kv[1];
				
				var val = d;
				try{
					valr = eval("d." + v);
					if(valr) val = valr;
				}catch(e){}
				var func = eval(kv[2]);
				if (func) {

					val = func(val,$(ele),d);
					if(val==null) return;
				}
				if (k == "text") {
					tmpe.html(val);
					$(ele).text(tmpe.text());
				} else if (k == "html") {
					tmpe.html(val);
					$(ele).html(tmpe.html());
				} else if (k == "rawval") {
					$(ele).val(val);
				} else if (k == "val") {
					tmpe.html(val);
					$(ele).val(tmpe.html());
				}else if (k == "img") {
					$(ele).attr("src",val);
				}else if (k == "href") {
					$(ele).attr("href","javascript:processhref(\""+val+"\")");
					$(ele).attr("target","");
				}else if (k == "list") {
					var templete = $(".template",$(ele));
					for(var i = 0;i<val.length;i++){
						var curEle = templete.clone();
						curEle.css("display","");
						curEle.removeClass("template");
						wmap(val[i],curEle);
						$(ele).append(curEle);
					}
				}else {
					$(ele).attr(k, val);
				}
			} catch (e) {
			}
		}
	} catch (e) {
		}

       

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


function price(num)
{
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',') +"원";
}

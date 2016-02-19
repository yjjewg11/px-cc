/**
 * 注册加载器.根据扩展名.
 * G_register_Loader.regImgLoader(url);
 */
var G_register_Loader={
		extend_Img:[".png", ".jpg", ".bmp",".jpeg",".gif", ".ico", ".tiff", ".webp"].join(","),
		/**
		 * 注册图片加载器
		 * @param url
		 */
		regImgLoader:function(url){
			type = cc.path.extname(url);
			type = type ? type.toLowerCase() : "";
			
			if(this.extend_Img.indexOf(type)==-1){
				this.extend_Img+=","+type;
				cc.loader.register(type, cc._imgLoader);
			}
		}
}

/**
 * 异步加载js
 * @param url
 * @param callback
 * @param charset
 */
function loadJS(url,callback,charset)
{
	var script = document.createElement('script');
	if (script.readyState){ //IE 
		script.onreadystatechange = function(){ 
		if (script.readyState == "loaded" || 
			script.readyState == "complete"){ 
			
			script.onreadystatechange = null; 
			
			if(typeof callback  =='function')callback(); 
			
		} 
		}; 
	} else { //Others: Firefox, Safari, Chrome, and Opera 
		script.onload = function(){ 
			if(typeof callback  =='function')callback(); 
		}; 
	} 
	script.charset=charset || document.charset || document.characterSet;
	script.src = url;
	try {document.getElementsByTagName("head")[0].appendChild(script);} catch (e) {}
}


//队列
function ArrayQueue() {
  this.queue = [];
  //入队列
  this.push = function(o) {
  	this.queue.unshift(o);
  }
  //出队列
  this.pop = function() {
  	return this.queue.pop();

  }
  
} 

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

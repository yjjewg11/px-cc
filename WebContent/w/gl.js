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
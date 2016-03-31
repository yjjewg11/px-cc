/**
 * ios 专用接口
 *  G_CallIosFN.init();
 * 公布接口,给手机调用
 * G_jsCallBack.setIosApp();//设置为ios调用模式,给ios使用.
 * 
 * 调用手机提供接口对象.
 * G_CallPhoneFN 
 */

/**
 * 调用手机方法
 * 调用选择头像图片.剪切图片为198*198,并可以调整方向
 * G_CallPhoneFN.selectHeadPic();
 * 调用上传图片,要求不剪切,只压缩在800k以内,并可以调整方向
 * G_CallPhoneFN.selectImgPic();
 * 判断是否是手机app应用内嵌调用
 * G_CallPhoneFN.isPhoneApp();
 * 隐藏应用的弹出的加载层.
 * G_CallPhoneFN.hideLoadingDialog();
 * 登录后,将sessionid传给手机
 * G_CallPhoneFN.jsessionToPhone(JSESSIONID);
 * 手机回退按键退到最后调用此方法是否是要退出了;
 * G_CallPhoneFN.finishProject();
 * 
 * 

	 * 
	 * G_CallPhoneFN.setDoBackFN();
	 * JavaScriptCall.setDoBackFN("javascript:G_jsCallBack.QueuedoBackFN();");
	 * 设置andorid webview 回退按钮,指定方法.
	 * 判断逻辑.1.加载页面过程,js调用方法通知webview启用js回退方法.并注册js回退方法.JavaScriptCall.setDoBackFN("javascript:G_jsCallBack.QueuedoBackFN();");
	 * 1.1 如果没有注册则按照原逻辑处理.
	 * 2.如果有则优先调用该js回退方法执行.
	 * 3.如果该js回退已经退到最后异步时,会调用webview注册事件,JavaScriptCall.finishProject();收到这个消息后,则走正常逻辑.
	 * 
* 返回jsessionid
 * G_CallPhoneFN.getJsessionid();
window.JavaScriptCall={
		selectImgPic:function(){alert("ddd");},
		jsessionToPhone:function(){}
		
		注意JavaScriptCall 优先与isIos判断.
};*/
var G_CallPhoneFN={
		/**
		 * 解决ios9 点击
		 * G_CallPhoneFN.beforeCallPhone();
		 */
		beforeCallPhone:function(){		
			document.activeElement.blur();
		},
		/**
		 * 判断是否是手机app应用内嵌调用
		 * @returns {Boolean}
		 */
		isPhoneApp:function(){
			if(window.JavaScriptCall||G_CallIosFN.isIos){
				return true;
			}
			return false;
		},
		/**
		 * 判断是否是手机app应用内嵌调用
		 * @returns {Boolean}
		 */
		isAndorid:function(){
			if(window.JavaScriptCall){
				return true;
			}
			return false;
		},
		/**
		 * 判断是否是手机app应用内嵌调用
		 * @returns {Boolean}
		 */
		isIos:function(){
			if(G_CallIosFN.isIos){
				return true;
			}
			return false;
		},
		/**
		 * 
		 * G_CallPhoneFN.canShareUrl();
		 * 判断是否能分享.
		 * @returns {Boolean}
		 */
		canShareUrl:function(){
			//andorid 手机允许分享
			if(G_CallPhoneFN.isAndorid()){
				return true;
			}
			//ios开发接口允许分享
			if(G_CallIosFN.canShareUrl){
				return true;
			}
			return false;
		},
		/**
          *网页内容分享回调接口方法  
          *G_CallPhoneFN.setShareContent(title,content,pathurl,httpurl) 
          *参数说明: titll为标题  content为分享内容，pathurl为分享图片地址，httpurl为链接地址
          *tml有问题暂时用title代替后续优化 
		 */
		setShareContent:function(title,content,pathurl,httpurl){
			
			content=title;//content不能为空,否则导致报错.//防止传入html标签
			console.log("setShareContent:",title,content,pathurl,httpurl);
			if(!pathurl)pathurl=G_share_logo;
			
			
			
			try{
				G_CallPhoneFN.beforeCallPhone();
				if(window.JavaScriptCall){					
					JavaScriptCall.setShareContent(title,content,pathurl,httpurl) ;					
					return true;
				}
				if(G_CallIosFN.canShareUrl){
					 G_CallIosFN.setShareContent(title,content,pathurl,httpurl)
					return true;
				}
				
			}catch(e){
				alert(window.location.href);
				  console.log('Exception:JavaScriptCall.finishProject()=', e.message);
			}
			console.log('window.finishProject==false');
			return false;
		},
		
		/**
         *调用新开webview访问地址.并右上角添加分享功能.
         *G_CallPhoneFN.openNewWindowUrl(title,title,pathurl,httpurl);	
         *参数说明: title为标题,content为分享内容，pathurl为分享图片地址，httpurl为链接地址
         *tml有问题暂时用title代替后续优化 
		 */
		openNewWindowUrl:function(title,content,pathurl,httpurl){
			if(!title||title.length<6){//修复andorid标题小于6长度.
				title="链接内容详细";
			}
			
			content=title;//content不能为空,否则导致报错.//防止传入html标签
			console.log("openNewWindowUrl:",title,content,pathurl,httpurl);
			if(!pathurl)pathurl=G_share_logo;
			try{
				
				G_CallPhoneFN.beforeCallPhone();
				if(window.JavaScriptCall){
					if(!pathurl)pathurl=G_logo;
					JavaScriptCall.openNewWindowUrl(title,content,pathurl,httpurl) ;					
					return true;
				}
				if(G_CallIosFN.canShareUrl){
					 G_CallIosFN.openNewWindowUrl(title,content,pathurl,httpurl)
					return true;
				}
			}catch(e){
				  console.log('Exception:JavaScriptCall.finishProject()=', e.message);
			}
			console.log('window.finishProject==false');
			return false;
		},
		
		/**
		 * 回退方法finishProject()

		 * @returns {Boolean}
		 */
		finishProject:function(){
			try{
				if(window.JavaScriptCall){
					JavaScriptCall.finishProject();					
					return true;
				}
			}catch(e){
				  console.log('Exception:JavaScriptCall.finishProject()=', e.message);
			}
			console.log('window.finishProject==false');
			return false;
		},
		/**
		 * 隐藏应用的弹出的加载层.
		 * @returns {Boolean}
		 */
		hideLoadingDialog:function(){
			try{
				G_CallPhoneFN.beforeCallPhone();
				if(window.JavaScriptCall){
					JavaScriptCall.hideLoadingDialog();
					return true;
				}
			}catch(e){
				  console.log('Exception:JavaScriptCall.hideLoadingDialog()=', e.message);
			}
			console.log('window.hideLoadingDialog==false');
			return false;
		},
		/**
		 * 调用选择上传图片的回调
		 * @returns {Boolean}
		 */
		selectImgPic:function(){
			G_CallPhoneFN.beforeCallPhone();
			try{
				//解决ios,输入框弹出后,点击上传,飞掉bug.
				if(browser.versions.iPhone&&JavaScriptCall.selectImgPic){
					window.setTimeout(function(){JavaScriptCall.selectImgPic();},1000);
					return true;
					
				}
				if(window.JavaScriptCall){
					JavaScriptCall.selectImgPic();
					return true;
				}
				if(G_CallIosFN.isIos){
					
					G_CallIosFN.selectImgPic();
					return true;
				}
			}catch(e){
				  console.log('Exception:JavaScriptCall.selectImgPic()=', e.message);
			}
			console.log('window.selectImgPic==false');
			return false;
		},
	/**
	 * 调用选择头像图片
	 * @returns {Boolean}
	 */
	selectHeadPic:function(){
		G_CallPhoneFN.beforeCallPhone();
		try{
			if(browser.versions.iPhone&&JavaScriptCall.selectHeadPic){
				window.setTimeout(function(){JavaScriptCall.selectHeadPic();},1000);
				return true;
			}
			if(window.JavaScriptCall){
				JavaScriptCall.selectHeadPic();
				return true;
			}
			
			if(G_CallIosFN.isIos){
				G_CallIosFN.selectHeadPic();
				return true;
			}
		}catch(e){
			  console.log('Exception:JavaScriptCall.selectHeadPic()=', e.message);
		}
		console.log('window.JavaScriptCall==false');
		return false;
	},
	/**
	 * 
	 * 
	 * JavaScriptCall.setDoBackFN("javascript:G_jsCallBack.QueuedoBackFN();");
	 * 设置andorid webview 回退按钮,指定方法.
	 * 判断逻辑.1.加载页面过程,js调用方法通知webview启用js回退方法.并注册js回退方法.JavaScriptCall.setDoBackFN("javascript:G_jsCallBack.QueuedoBackFN();");
	 * 1.1 如果没有注册则按照原逻辑处理.
	 * 2.如果有则优先调用该js回退方法执行.
	 * 3.如果该js回退已经退到最后异步时,会调用webview注册事件,JavaScriptCall.finishProject();收到这个消息后,则走正常逻辑.
	 */
	setDoBackFN:function(){
		try{
			
			//if(G_CallIosFN.isIos){
				//G_CallIosFN.setDoBackFN(sessionid);
				//return true;
			//}
			if(window.JavaScriptCall){
				JavaScriptCall.setDoBackFN("javascript:G_jsCallBack.QueuedoBackFN();");
				return true;
			}
		}catch(e){
			  console.log('G_CallPhoneFN：', e.message);
		}
		console.log('G_CallPhoneFN：', "false");
		return false;
	},
	getJsessionid:function(){
		try{
			if(window.JavaScriptCall){
				return JavaScriptCall.getJsessionid();
				
			}
			
			
			
		}catch(e){
			  console.log('Exception:JavaScriptCall.selectHeadPic()=', e.message);
		} 
		console.log('window.JavaScriptCall==false');
		return false;
	},
	/**
	 * 制作动态相册
	 * @returns {Boolean}
	 */
	fullScreen:function(){
		try{
			G_CallPhoneFN.beforeCallPhone();
			if(window.JavaScriptCall){
				JavaScriptCall.fullScreen();
				return true;
			}
		}catch(e){
			  console.log('Exception:JavaScriptCall.fullScreen()=', e.message);
		}
		console.log('window.JavaScriptCall.fullScreen();');
		return false;
	},
	/**
	 * 制作动态相册
	 * @returns {Boolean}
	 */
	exitFullScreen:function(){
		try{
			G_CallPhoneFN.beforeCallPhone();
			if(window.JavaScriptCall){
				JavaScriptCall.exitFullScreen();
				return true;
			}
		}catch(e){
			  console.log('Exception:JavaScriptCall.exitFullScreen()=', e.message);
		}
		console.log('window.JavaScriptCall.exitFullScreen();');
		return false;
	},
	/**
	 * 制作动态相册
	 * @returns {Boolean}
	 */
	makeFPMovie:function(){
		try{
			G_CallPhoneFN.beforeCallPhone();
			if(window.JavaScriptCall){
				JavaScriptCall.makeFPMovie();
				return true;
			}
		}catch(e){
			  console.log('Exception:JavaScriptCall.makeFPMovie()=', e.message);
		}
		console.log('window.JavaScriptCall.makeFPMovie();');
		return false;
	},
	/**
	 * JSESSIONID=C483CC4E6FECB6F6267591D624704A86
	 */
	jsessionToPhone:function(sessionid){
		try{
			
			
			if(window.JavaScriptCall){
				JavaScriptCall.jsessionToPhone(sessionid);
				try{//新版本才支持
					var userinfo=Store.getUserinfo();
					if(userinfo)JavaScriptCall.jsessionToPhoneTel(userinfo.loginname);
				}catch(e){
				}
				
				return true;
			}
			if(G_CallIosFN.isIos){
				G_CallIosFN.jsessionToPhone(sessionid);
				return true;
			}
		}catch(e){
			  console.log('G_CallPhoneFN：', e.message);
		}
		console.log('G_CallPhoneFN：', "false");
		return false;
	}
	
	
}
//向手机app注册回退事件.
G_CallPhoneFN.setDoBackFN();
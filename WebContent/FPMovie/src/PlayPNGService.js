var PlayPNGService = {
		
		/**
		 * 根据模块key,获取运动效果
		 * PlayPNGService.getMp3();
		 * @returns
		 */
		getMp3:function(){
		
			return getFPMovie.data.mp3;
		},
		/**
		 * 根据模块key,获取运动效果
		 * PlayPNGService.getAction();
		 * @returns
		 */
		getAction:function(){
			//getFPMovie.data.template_key="happynewyear";
			var obj=PxTemplate[getFPMovie.data.template_key];
			if(!obj){
				alert("模版未定义,template_key="+getFPMovie.data.template_key);
				return "";
			}
			return window[obj.action];
		},
		/**
		 * 根据模块key,获取模版背景路径
		 * PlayPNGService.getBackgroundPath();
		 * @returns
		 */
		getBackgroundPath:function(){
			//getFPMovie.data.template_key="happynewyear";
			//getFPMovie.data.template_key="SeaBubble";
		//	var path="res/SeaBubble/MainScene.json";
			var obj=PxTemplate[getFPMovie.data.template_key];
			if(!obj){
				alert("模版未定义,template_key="+getFPMovie.data.template_key);
				return "";
			}
			return obj.bglayer;
		},
		//no use
		ajax_callback:function(callback){
			if(getFPMovie.ResMsg.status!="success"){
				alert(getFPMovie.ResMsg.message);
			}
		},
		//用于预加载
		getLoadFilesArray:function(){
			var fileArr=[];			
			var list=getFPMovie.list.data;
			for(var i=0;i<list.length;i++){
				var obj=list[i];
				G_register_Loader.regImgLoader(obj.path);
				fileArr.push(obj.path);
			}
			return fileArr;
		},
		/**
		 * 加载文件
		 * @param callback
		 */
		loadFile:function(loadImgTip,callback){
			var fileArr=[];		
			
			var list=getFPMovie.list.data;
			
			var total=list.length;
			
			loadImgTip.setText("加载图片 "+fileArr.length+"/"+total);
			
			for(var i=0;i<total;i++){
				var obj=list[i];
				G_register_Loader.regImgLoader(obj.path);
				//fileArr.push(obj.path);
				cc.loader.load(obj.path, function(err, results){
					
					fileArr.push(1);

					loadImgTip.setText("加载图片 "+fileArr.length+"/"+total);
					
//		            alert("fileArr==="+fileArr.length);
		             
		            if(fileArr.length==total){
		            	// alert("fileArr==="+fileArr.length);
		            	 if(typeof callback=='function'){
				            	callback();
				            }
		            }
		           
//		            if(err){
//	                cc.log("加载图片失败");
//	                return;
//	            }
				
				  });

				
			}
			return;
			cc.loader.load(fileArr, function(err, results){
	            if(err){
	                cc.log("加载图片失败");
	                return;
	            }
	            alert("fileArr==="+fileArr.length);
	            if(typeof callback=='function'){
	            	callback();
	            }
	            
			  });

		},
		
		/**
		 * 加载数据
		 */
		loadPNGbykdmovie:function(movie_uuid,callback){
			   var url="http://localhost/px-rest/rest/share/getFPMovie.js?kdmovie_uuid="+movie_uuid;//+"&t="+t;
				 loadJS(url,callback);
				 
			//window.audio_mp3.play();
			//

	},
		
		/**
		 * 加载数据
		 */
		loadPNG:function(movie_uuid,callback){
			   var url="http://jz.wenjienet.com/px-mobile/rest/share/getFPMovie.js?movie_uuid="+movie_uuid;//+"&t="+t;
				 loadJS(url,callback);
				 
			//window.audio_mp3.play();
			//

	}
};

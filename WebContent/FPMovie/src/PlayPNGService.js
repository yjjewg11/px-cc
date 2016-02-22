var PlayPNGService = {
		//no use
		ajax_callback:function(callback){
			if(getFPMovie.ResMsg.status!="success"){
				alert(getFPMovie.ResMsg.message);
			}
		},
		/**
		 * 加载文件
		 * @param callback
		 */
		loadFile:function(){
			var fileArr=[];			
			var list=getFPMovie.list.data;
			for(var i=0;i<list.length;i++){
				var obj=list[i];
				G_register_Loader.regImgLoader(obj.path);
				fileArr.push(obj.path);
			}
			cc.loader.load(fileArr, function(err, results){
	            if(err){
	                cc.log("Failed to load  .");
	                return;
	            }
	            
			  });

		},
		
		/**
		 * 加载数据
		 */
		loadPNG:function(movie_uuid,callback){
			   var url="http://120.25.212.44/px-mobile/rest/share/getFPMovie.js?movie_uuid="+movie_uuid;//+"&t="+t;
				 loadJS(url,callback);
				 
			//window.audio_mp3.play();
			//

	}
};

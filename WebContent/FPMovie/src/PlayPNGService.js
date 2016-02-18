var PlayPNGService = {
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

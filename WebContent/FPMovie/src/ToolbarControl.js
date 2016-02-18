/**
 * 工具按钮控制类
 */
var ToolbarControl={
		button_start:null,
		Button_movie:null,
		playPNGLayer :null,
		/**
		 * ToolbarControl.gameEnd();
		 * 电影开始播放,暂停
		 */
		gameEnd:function(){
		//	alert("gameEnd");
			this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
			this.button_start.setVisible(true);
		},
		/**
		 * 电影开始播放,暂停
		 */
		gamePlayOrPause:function(button_start,Button_movie){
			if(cc.director.isPaused()){//暂停->播放
				Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
				cc.director.resume();
				//alert("cc.director.resume()");
    		}else{
    			Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
    			cc.director.pause();		
    			//alert("cc.director.pause()");
    		}
			
			
		},
		/**
		 * 重头播放或start
		 */
		gameStartOrReplay:function(button_start,Button_movie){			
			Button_movie.loadTextures("movie_pause_S.png","movie_pause_S.png","",ccui.Widget.PLIST_TEXTURE);			
			//alert("game_replay");
			this.button_start=button_start;
			this.Button_movie=Button_movie;
			button_start.setVisible(false);
			 if(!window.audio_mp3||window.audio_mp3.paused){
				 window.audio_mp3.play();
			 }
			 
			var scene= cc.director.getRunningScene();
			if(this.playPNGLayer){
				this.playPNGLayer.playPng();
			}else{
				  this.playPNGLayer = new PlayPNGLayer();
				  scene.addChild(this.playPNGLayer,1);
			}
		
			
		},
		
		/**
		 * 背景音乐:播放或暂停
		 */
		bgAudioPlayOrPause:function(that){
			 if(!window.audio_mp3||window.audio_mp3.paused){
            	 
             //	alert("打开音乐");
             	that.loadTextures("mp3_play.png","mp3_play.png","",ccui.Widget.PLIST_TEXTURE);
             	  window.audio_mp3.play();
             }else{
             //	 alert("关闭音乐");
             	that.loadTextures("mp3_pause.png","mp3_pause.png","",ccui.Widget.PLIST_TEXTURE);
//             	 that.setTexture(res.pause_mp3);
             	  window.audio_mp3.pause();
             }
		}
}
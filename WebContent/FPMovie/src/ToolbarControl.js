/**
 * 工具按钮控制类
 */
var ToolbarControl={
		button_start:null,
		Button_movie:null,
		playPNGLayer :null,
		button_mp3:null,
		//背景音乐静音
		mp3Mute:false,
		/**
		 * 绑定关联对象
		 * @param button_start
		 * @param Button_movie
		 * @param button_mp3
		 */
		bindWidget:function(button_start,Button_movie,button_mp3){			
			this.button_start=button_start;
			this.Button_movie=Button_movie;
			this.button_mp3=button_mp3;
		},
		/**
		 * ToolbarControl.gameEnd();
		 * 电影开始播放,暂停
		 */
		gameEnd:function(){
		//	alert("gameEnd");
			this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
			this.button_start.setVisible(true);
			this.isPlayGame=false;
		},
		/**
		 * 暂停
		 */
		gamePause:function(button_start,Button_movie){
			if(!cc.director.isPaused()&&this.isPlayGame){//暂停->播放
				this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
    			cc.director.pause();	
    			this.isPlayGame=false;
    		}
			
			
		},
		/**
		 * 电影开始播放,暂停
		 */
		gamePlayOrPause:function(button_start,Button_movie){
			if(!cc.director.isPaused()&&this.isPlayGame){//暂停->播放
				this.gamePause();
			}else{
				this.Button_movie.loadTextures("movie_pause_S.png","movie_pause_S.png","",ccui.Widget.PLIST_TEXTURE);
				cc.director.resume();
				this.isPlayGame=true;
			}
			
		},
		
		/**
		 * 重头播放或start
		 */
		gameStartOrReplay:function(button_start,Button_movie,button_mp3){			
			Button_movie.loadTextures("movie_pause_S.png","movie_pause_S.png","",ccui.Widget.PLIST_TEXTURE);			
			//alert("game_replay");
			this.button_start=button_start;
			this.Button_movie=Button_movie;
			this.button_mp3=button_mp3;
			
			ToolbarControl.bgAudioLoad(getFPMovie.data.mp3);
			
			button_start.setVisible(false);
			this.isPlayGame=true;
			if(this.mp3Mute==false){
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
		 * 背景音乐:加载
		 */
		bgAudioLoad:function(mp3){
			if(window.audio_mp3.src!=mp3){
				window.audio_mp3.src=mp3;
			}
			 if(!window.audio_mp3||window.audio_mp3.paused){
            	 
             //	alert("打开音乐");
				 this.button_mp3.loadTextures("mp3_play.png","mp3_play.png","",ccui.Widget.PLIST_TEXTURE);
             	  window.audio_mp3.play();
             }
		},
		/**
		 * 背景音乐:播放
		 */
		bgAudioPlay:function(){
			 if(!window.audio_mp3||window.audio_mp3.paused){
            	 
             //	alert("打开音乐");
				 this.button_mp3.loadTextures("mp3_play.png","mp3_play.png","",ccui.Widget.PLIST_TEXTURE);
             	  window.audio_mp3.play();
             }
		},
		
		/**
		 * 背景音乐:播放或暂停
		 */
		bgAudioPlayOrPause:function(that){
			 if(!window.audio_mp3||window.audio_mp3.paused){
				 this.mp3Mute=false;
	             this.bgAudioPlay(that);
             }else{
            	 this.mp3Mute=true;
             	that.loadTextures("mp3_pause.png","mp3_pause.png","",ccui.Widget.PLIST_TEXTURE);
             	  window.audio_mp3.pause();
             }
		}
}
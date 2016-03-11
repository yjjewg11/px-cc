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
			
			this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
		},
		/**
		 * ToolbarControl.gameEnd();
		 * 电影开始播放,暂停
		 */
		gameEnd:function(){
		//	alert("gameEnd");
			this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
			//this.button_start.setVisible(true);
			  window.audio_mp3.pause();
			LayerManage.showGameEndLayer();
			this.isPlayGame=false;
		},
		/**
		 * ToolbarControl.gameEnd();
		 * 电影开始播放,暂停
		 */
		shareTo:function(){
			
			
				var title=getFPMovie.data.title;
				var content=title;
				var imgurl=getFPMovie.data.herald;
				var httpurl=window.location.href;
				G_CallPhoneFN.setShareContent(title,content,imgurl,httpurl);

		},
		/**
		 * ToolbarControl.gameEnd();
		 * 电影开始播放,暂停
		 */
		makeMovie:function(){
			var f=G_CallPhoneFN.makeFPMovie();
			if(f)return true;	
			window.location.href="http://www.wenjienet.com/";
		},
		/**
		 * 暂停
		 */
		gamePause:function(){
			if(!cc.director.isPaused()&&this.isPlayGame){//暂停->播放
				this.Button_movie.loadTextures("movie_play_S.png","movie_play_S.png","",ccui.Widget.PLIST_TEXTURE);
    			cc.director.pause();	
    			this.isPlayGame=false;
    			G_CallPhoneFN.exitFullScreen();
    		}
			
			
		},
		gameResume:function(){
			this.Button_movie.loadTextures("movie_pause_S.png","movie_pause_S.png","",ccui.Widget.PLIST_TEXTURE);
			cc.director.resume();
			this.isPlayGame=true;
			G_CallPhoneFN.fullScreen();
		},
		/**
		 * 电影开始播放,暂停
		 */
		gamePlayOrPause:function(){
			if(cc.director.isPaused()){//暂停->播放
				this.gameResume();
				return;
			}else{//暂停或未播放
				if(!this.isPlayGame){//未播放->播放
					this.gameReplay();
					return;
				}
				G_CallPhoneFN.exitFullScreen();
				this.gamePause();//播放->暂停
			}
			
		},
		/**
		 * 重头播放
		 */
		gameReplay:function(){			
			LayerManage.hideGameEndLayer();
			this.gameStartOrReplay();
		},
		/**
		 * 重头播放或start
		 */
		gameStartOrReplay:function(){			
			this.Button_movie.loadTextures("movie_pause_S.png","movie_pause_S.png","",ccui.Widget.PLIST_TEXTURE);			
			
			this.button_start.setVisible(false);
			this.isPlayGame=true;
			ToolbarControl.bgAudioLoad(PlayPNGService.getMp3());
			if(this.mp3Mute==false){
				ToolbarControl.bgAudioPlay();
			}
			 
			var scene= cc.director.getRunningScene();
			if(this.playPNGLayer){
				this.playPNGLayer.playPng();
			}else{
				  this.playPNGLayer = new PlayPNGLayer();
				  scene.addChild(this.playPNGLayer,1);
			}
			G_CallPhoneFN.fullScreen();
			
		},
		/**
		 * 背景音乐:加载
		 */
		bgAudioLoad:function(mp3){
			if(window.audio_mp3.src!=mp3){
				window.audio_mp3.src=mp3;
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
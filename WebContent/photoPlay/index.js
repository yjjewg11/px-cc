  

cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function(){
    //处理游戏进入后台的情况
});
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function(){
    //处理返回游戏的情况
});

window.onload = function(){
	//window.audio_mp3.play();
	//
	window.audio_mp3 = document.getElementById('audio_mp3'); 
	
	
              cc.game.onStart = function(){
                  //load resources
                  cc.LoaderScene.preload([], function () {
                    
                      cc.director.runScene(new PlayPNGScene());
                  }, this);
              };
              
              
              cc.game.run("gameCanvas");
          };
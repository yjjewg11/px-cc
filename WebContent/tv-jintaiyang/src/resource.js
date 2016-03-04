var res = {
		Plist : "res/toobar/Plist.plist",
		bgWarmSpring : "res/bgWarmSpring.png",
		
		bg1 : "res/img/1/1.png",
		bg2 : "res/img/1/2.png",
		bg3 : "res/img/1/3.png",
		bg4 : "res/img/1/4.png",
//		bgAudioPlay : "res/toobar/mp3_play.png",
//		bgAudioPause : "res/toobar/mp3_pause.png",
//		gamePlay : "res/toobar/movie_play_S.png",
//		gamePause : "res/toobar/mp3_pause.png",		
		ToolbarLayer : "res/toobar/ToolbarLayer.json",
		BG_SeaBubble : "res/SeaBubble/MainScene.json",
		GameEndScene : "res/gameEnd/GameEndScene.json"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

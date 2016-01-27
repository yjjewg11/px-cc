  

cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function(){
    //处理游戏进入后台的情况
});
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function(){
    //处理返回游戏的情况
});

function loadMovie(getFPMovie){
	
	/*
	 * 
	 * private Timestamp create_time;// 创建时间
	@Column
	private String create_useruuid;// 创建人uuid
	@Column
	private String mp3;// 背景音乐.256字符
	@Column
	private String title;// 家庭照片集合.128字符.XX的家
	@Column
	private String template;// 模版名
	@Column
	private Long photo_count=0l;// 照片计数
	@Column
	private Integer status=0;//类型'0:发布,1:未发布.2:屏蔽',
	 */
	var mp3=getFPMovie.data.mp3;
	var title=getFPMovie.data.title;
	var template=getFPMovie.data.template;
	alert(title);
	
	//解析数据.
	window.audio_mp3 = document.getElementById('audio_mp3'); 
    cc.game.onStart = function(){
  	  cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
        cc.LoaderScene.preload([], function () {
            cc.director.runScene(new PlayPNGScene());
        }, this);
    };
    cc.game.run("gameCanvas");
	
}

window.onload = function(){
	
		//var t=new Date().getTime();
		var movie_uuid="1";
	   var url="http://120.25.212.44/px-mobile/rest/share/getFPMovie.js?movie_uuid="+movie_uuid;//+"&t="+t;
		 loadJS(url,function(){
			 if(getFPMovie){
				 loadMovie(getFPMovie);
			 }
		 });
		 
	//window.audio_mp3.play();
	//

          };
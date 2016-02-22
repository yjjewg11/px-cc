  

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
	var title=getFPMovie.data.title;
	var template=getFPMovie.data.template;
	//alert(title);
	/**
	 * A brief explanation for "project.json":
	 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
	 * The detail of each field is under it.
	 {
	    "project_type": "javascript",
	    // "project_type" indicate the program language of your project, you can ignore this field

	    "debugMode"     : 1,
	    // "debugMode" possible values :
	    //      0 - No message will be printed.
	    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
	    //      2 - cc.error, cc.assert, cc.warn will print in console.
	    //      3 - cc.error, cc.assert will print in console.
	    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
	    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
	    //      6 - cc.error, cc.assert will print on canvas, available only on web.

	    "showFPS"       : true,
	    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

	    "frameRate"     : 60,
	    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

	    "noCache"       : false,
	    // "noCache" set whether your resources will be loaded with a timestamp suffix in the url.
	    // In this way, your resources will be force updated even if the browser holds a cache of it.
	    // It's very useful for mobile browser debuging.

	    "id"            : "gameCanvas",
	    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

	    "renderMode"    : 0,
	    // "renderMode" sets the renderer type, only useful on web :
	    //      0 - Automatically chosen by engine
	    //      1 - Forced to use canvas renderer
	    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

	    "engineDir"     : "frameworks/cocos2d-html5/",
	    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
	    // but if you are using a single engine file, you can ignore it.

	    "modules"       : ["cocos2d"],
	    // "modules" defines which modules you will need in your game, it's useful only on web,
	    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
	    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

	    "jsList"        : [
	    ]
	    // "jsList" sets the list of js files in your game.
	 }
	 *
	 */

	cc.game.onStart = function(){
	    
	    // Setup the resolution policy and design resolution size
		 cc.view.setDesignResolutionSize(640,960, cc.ResolutionPolicy.SHOW_ALL);
	    // Instead of set design resolution, you can also set the real pixel resolution size
	    // Uncomment the following line and delete the previous line.
	     cc.view.setRealPixelResolution(640,960, cc.ResolutionPolicy.SHOW_ALL);
	    // The game will be resized when browser size change
	    cc.view.resizeWithBrowserSize(true);
	    //load resources
	    cc.LoaderScene.preload(g_resources, function () {
	        cc.director.runScene(new MainScene());
	       // cc.director.runScene(new MyActionScene());
	       // PlayPNGService.loadFile();
	    }, this);
	};
	cc.game.run();
	  
}

window.onload = function(){
		var movie_uuid=getUrlParam("movie_uuid");
		if(!movie_uuid)movie_uuid="1";
	   PlayPNGService.loadPNG(movie_uuid,function(){
			 if(getFPMovie){
					if(getFPMovie.ResMsg.status!="success"){
						alert(getFPMovie.ResMsg.message);
						return;
					}
					
				 loadMovie(getFPMovie);
			 }
		 });
		 


          };
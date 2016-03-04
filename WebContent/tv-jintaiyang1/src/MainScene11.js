var MainScene1 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.backgroundLayer=new BackgroundLayer();
		this.addChild( this.backgroundLayer,-99);
        
        this.playPNGLayer = new PlayPNGLayer1();
		this.addChild(this.playPNGLayer,11);
		
		
		
	
        
       // LayerManage.addToolbarLayer();
    }
});
//层
var PlayPNGLayer1 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
   // nextScene:,
    playPng:function(){
    	this.index=0;
    	
    	  var sushi = new cc.Sprite(res.img_1);
          var size = cc.winSize;
          sushi.attr({
          	  x: size.width / 2,
                y: size.height / 2,
                opacity:255,
                //scale:0.1,
                rotation: 0
          });
          

          this.addChild(sushi);
          LongicAction.runAction(sushi);
          
//      	alert(1);
            this.scheduleOnce(function(){ 
//             	alert(111);
             	var nextScene=new MainScene2();
            	SceneTool.runNext(nextScene);
            },4);
      	
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng();      
        return true;
    },

});


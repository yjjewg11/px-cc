//层
var Layer1 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
    playPng:function(){
    	this.index=0;
    	
    	  var sushi = new cc.Sprite(res.bgimg_1
    			  );
    	  
    	  var size = cc.winSize;
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: size.width / 2,
                y: size.height / 2,
                opacity:255,
                //scale:getFullScale(size,sushi.getContentSize()),
                rotation: 0
          });
          

          this.addChild(sushi);
          
          
          LongicAction.runAction(sushi);
          
          
          this.scheduleOnce(function(){ 
        	  
        	// 转场特效持续两秒
        	  var transitionTime = 2;
        	  // 创建下一个场景
        	  var nextScene = new MainScene2();
        	  // 使用下一个场景创建转场特效场景
        	  var transitionScene = new cc.TransitionProgressInOut(transitionTime, nextScene);
        	  // 替换运行场景为转场特效场景
        	  cc.director.runScene(transitionScene);
          },4);
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng();
        
       
        return true;
    }

});

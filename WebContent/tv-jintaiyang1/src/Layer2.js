//层
var Layer2 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
    playPng:function(){
    	this.index=0;
    	
    	  var sushi = new cc.Sprite(res.bgimg_2
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
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng();
        
       
        return true;
    }
});

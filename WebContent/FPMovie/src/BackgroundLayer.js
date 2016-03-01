
var BackgroundLayer = cc.Layer.extend({
   
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        try{
        	  var  gameEndLayer = ccs.load(PlayPNGService.getBackgroundPath()).node;  
              this.addChild(gameEndLayer,10);
              
              return ;
        }catch(e){
        	alert("加载模版失败,路径:"+PlayPNGService.getBackgroundPath());
        }
      
        
       // return true;
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        
       
        this.backgroundSprite = new cc.Sprite(res.bgWarmSpring);
        this.backgroundSprite.attr({
        	scale:2,
        	   x: size.width / 2,
               y: size.height / 2
         
        });
       
        this.addChild(this.backgroundSprite, 0);
     

        return true;
    }
});




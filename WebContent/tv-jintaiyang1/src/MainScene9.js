var MainScene9 = cc.Scene.extend({
    onEnter:function () {
        this._super();
//        LayerManage.setMainScene(this);
//        LayerManage.addBackgroundLayer();
        
        
        this.playPNGLayer = new Layer9();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});
//层
var Layer9 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
  //  nextScene:new MainScene1(),
    
    
    playPng1:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	  var sushi = new cc.Sprite(res.bgimg_9
		  );
//  alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
  sushi.attr({
	  x: size.width / 2,
      y: size.height / 2,
        opacity:255,
        //scale:getFullScale(size,sushi.getContentSize()),
        rotation: 0
  });
  this.addChild(sushi);
  	SceneTool.addKDLogo(this);
//  return;
    	  var sushi = new cc.Sprite(res.img_30
    			  );
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          sushi.attr({
          	  x: 554.14,
                y: 498.31,
                opacity:255,
                scale:0.3575,
                rotation: -12.21
          });
          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          var that=this;
          var cb=function(){that.playPng2();};
          ActionM.runAction1(sushi,cb);
    },
    
    playPng2:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_31 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 330.47,
                y: 208.84,
                opacity:255,
                scale:0.3106,
                rotation: -11.30
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng3();};
          ActionM.runAction1(sushi,cb);
          return;      
    },
    
    
    playPng3:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_32 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 279.71,
                y: 453.20,
                opacity:255,
                scale:0.3016,
                rotation: -12.00
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng4();};
          ActionM.runAction1(sushi,cb);
          return;      
    },
     
    
    
    playPng4:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_33 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 879.34,
                y: 479.52,
                opacity:255,
                scale:0.42,
                rotation: 18.21
          });
          

          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          
          var that=this;
          var cb=function(){ 
        		var nextScene=new MainScene10();
            	SceneTool.runNext(nextScene);
          
          	};
          ActionM.runAction1(sushi,cb);
  		
  	// cc.callFunc(this.onCallback3, this, "Hi!")  // If you want to pass a optional value, like 
//       	alert(2);
          return;
//        this.scheduleOnce(function(){ 
////         	alert(22);
//         	var nextScene=new MainScene1();
//        	SceneTool.runNext(nextScene);
//        },4);
        
        
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng1();
        
       
        return true;
    },
});

var MainScene10 = cc.Scene.extend({
    onEnter:function () {
        this._super();
//        LayerManage.setMainScene(this);
//        LayerManage.addBackgroundLayer();
        
        
        this.playPNGLayer = new Layer10();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});
//层
var Layer10 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
  //  nextScene:new MainScene1(),
    
    
    playPng1:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	  var sushi = new cc.Sprite(res.bgimg_10
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
    	  var sushi = new cc.Sprite(res.img_20
    			  );
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          sushi.attr({
          	  x: 265.86,
                y: 381.04,
                opacity:255,
                scale:0.9243,
                rotation: 0
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_24 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 516.73,
                y: 379.31,
                opacity:255,
                scale:0.1824,
                rotation: -12.68
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_21 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 765.13,
                y: 375.99,
                opacity:255,
                scale:0.8874,
                rotation: 0
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_19 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 1016.65,
                y: 378.07,
                opacity:255,
                scale:0.8538,
                rotation: 0
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng5();};
          ActionM.runAction1(sushi,cb);
          return;      
    },  
    playPng5:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_31 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 265.93,
                y: 181.51,
                opacity:255,
                scale:0.2543,
                rotation: 0
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng6();};
          ActionM.runAction1(sushi,cb);
          return;      
    },  
    playPng6:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_18 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 517.60,
                y: 182.80,
                opacity:255,
                scale:0.2468,
                rotation: 0
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng7();};
          ActionM.runAction1(sushi,cb);
          return;      
    },  
    playPng7:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_25 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 767.13,
                y: 183.29,
                opacity:255,
                scale:0.2126,
                rotation: 0
          });
          

          this.addChild(sushi);
          
          var that=this;
          var cb=function(){that.playPng8();};
          ActionM.runAction1(sushi,cb);
          return;      
    },  
    
    
    playPng8:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_32 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 1013.99,
                y: 184.44,
                opacity:255,
                scale:0.2391,
                rotation:0
          });
          

          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          
          var that=this;
          var cb=function(){ 
        		var nextScene=new MainScene1();
            	SceneTool.runNext(nextScene);
          
          	};
          ActionM.runAction1(sushi,cb);
  		
  	// cc.callFunc(this.onCallback3, this, "Hi!")  // If you want to pass a optional value, like 
//       	alert(2);
          return;    
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng1();
        
       
        return true;
    },
});

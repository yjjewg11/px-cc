var MainScene7 = cc.Scene.extend({
    onEnter:function () {
        this._super();
//        LayerManage.setMainScene(this);
//        LayerManage.addBackgroundLayer();
        
        
        this.playPNGLayer = new Layer7();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});
//层
var Layer7 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
  //  nextScene:new MainScene1(),
    
    
    playPng1:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	  var sushi = new cc.Sprite(res.bgimg_7
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
    	  var sushi = new cc.Sprite(res.img_23
    			  );
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          sushi.attr({
          	  x: 469.57,
                y: 186.28,
                opacity:255,
                scale:0.3081,
                rotation: -21.05
          });
          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          var that=this;
          var cb=function(){that.playPng2();};
          ActionM.runAction1(sushi,cb);
  	// cc.callFunc(this.onCallback3, this, "Hi!")  // If you want to pass a optional value, like 
//       	alert(2);
          return;
    },
    
    playPng2:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_24 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 770.32,
                y: 477.64,
                opacity:255,
                scale:0.3389,
                rotation: -20.68
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_25 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 328.59,
                y: 430.64,
                opacity:255,
                scale:0.2923,
                rotation: -19.77
          });
          

          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          
          var that=this;
          var cb=function(){ 
        		var nextScene=new MainScene8();
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

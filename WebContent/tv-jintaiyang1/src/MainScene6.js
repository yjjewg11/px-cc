var MainScene6 = cc.Scene.extend({
    onEnter:function () {
        this._super();
//        LayerManage.setMainScene(this);
//        LayerManage.addBackgroundLayer();
        
        
        this.playPNGLayer = new Layer6();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});
//层
var Layer6 = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
  //  nextScene:new MainScene1(),
    
    
    playPng1:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	  var sushi = new cc.Sprite(res.bgimg_6
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
    	  var sushi = new cc.Sprite(res.img_18
    			  );
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          sushi.attr({
          	  x: 383.09,
                y: 477.64,
                opacity:255,
                scale:0.4537,
                rotation: -13.88
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
 	
 	
 	  var sushi = new cc.Sprite(res.img_19 );
 	  
 
 	  var allwight = sushi.getContentSize().width;
       var allhight = sushi.getContentSize().height;
       
//       alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
       
       sushi.attr({
       	  x: 283.47,
             y: 280.27,
             opacity:255,
             scale:0.8809,
             rotation: 12.80
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
 	
 	
 	  var sushi = new cc.Sprite(res.img_20 );
 	  
 
 	  var allwight = sushi.getContentSize().width;
       var allhight = sushi.getContentSize().height;
       
//       alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
       
       sushi.attr({
       	  x: 759.04,
             y: 567.86,
             opacity:255,
             scale:0.9436,
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
 	
 	
 	  var sushi = new cc.Sprite(res.img_21 );
 	  
 
 	  var allwight = sushi.getContentSize().width;
       var allhight = sushi.getContentSize().height;
       
//       alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
       
       sushi.attr({
       	  x: 1018.45,
             y: 522.75,
             opacity:255,
             scale:0.8475,
             rotation: 27.99
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_22 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 424.45,
                y: 124.25,
                opacity:255,
                scale:0.2777,
                rotation: 8.61
          });
          

          this.addChild(sushi);
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          
          var that=this;
          var cb=function(){ 
        		var nextScene=new MainScene7();
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

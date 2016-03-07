var MainScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
//        LayerManage.setMainScene(this);
//        LayerManage.addBackgroundLayer();
        
        
        this.playPNGLayer = new Layer2();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});
//层
var Layer2 = cc.Layer.extend({

    ctor:function () {
    	
        this._super();
        
        this.index=0;
    	  var size = cc.winSize;
      	  var sushi = new cc.Sprite(res.bgimg_2
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
        this.playPng1();
        
       
        return true;
    },
    
    playPng1:function(){
    	
//  return;
    	  var sushi = new cc.Sprite(res.img_4
    			  );
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          sushi.attr({
          	  x: 894.85,
                y: 519.63,
                opacity:255,
                scale:0.4523,
                rotation: -7.58
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
//        this.scheduleOnce(function(){ 
////         	alert(22);
//         	var nextScene=new MainScene1();
//        	SceneTool.runNext(nextScene);
//        },4);
        
        
    },
    playPng2:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_5 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 634.99,
                y: 173.41,
                opacity:255,
                scale:1.1601,
                rotation: -8.91
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
    	
    	
    	  var sushi = new cc.Sprite(res.img_6 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x:   307.57,
                y: 176.89,
                opacity:255,
                scale:1.2141,
                rotation: -8.54
          });
          

          this.addChild(sushi);
           
//          this.modMovieItem(3,sushi);
          // actionBy.reverse();
//          delay.clone(),
          
          var that=this;
          var that=this;
          var cb=function(){that.playPng4();};
          ActionM.runAction1(sushi,cb);
          return;      
    },
    playPng4:function(){
    	this.index=0;
  	  var size = cc.winSize;
    	
    	
    	  var sushi = new cc.Sprite(res.img_7 );
    	  
    
    	  var allwight = sushi.getContentSize().width;
          var allhight = sushi.getContentSize().height;
          
//          alert("winSize="+size.width+"-"+size.height+"|img="+allwight+"-"+allhight+"="+getFullScale(size,sushi.getContentSize()));
          
          sushi.attr({
          	  x: 972.43,
                y: 175.53,
                opacity:255,
                scale:1.1470,
                rotation: -8.25
          });
          

          this.addChild(sushi);
          var that=this;
          var cb=function(){ 
        		var nextScene=new MainScene3();
            	SceneTool.runNext(nextScene);
          
          	};
          ActionM.runAction1(sushi,cb);
          return;      
    }
});

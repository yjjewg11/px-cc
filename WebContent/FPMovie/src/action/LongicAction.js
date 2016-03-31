//执行动画
var LongicAction ={
	//运行动画
	runAction:function(sushi,callback) { 	
		sushi.setOpacity(255);
		sushi.scale=0.5;
		sushi.x = -320;
		sushi.y = 480;
		
	    var rotateBy =  new cc.RotateBy(1.5, 720);
	    var moveBy = cc.moveBy(1.5, cc.p(640+320, 0));;  
	    var spawn = new cc.Spawn([moveBy, rotateBy]);  
	    
	    var spawn1 = new cc.Spawn([new cc.RotateBy(0.5, -360), cc.moveTo(0.5, cc.p(320, 480))]);  
		sushi.runAction(cc.sequence(
				spawn,
				 cc.delayTime(0.3),
				spawn1,	  
              cc.scaleTo(2, 1),
              cc.delayTime(PxConfig.pngShowTime),
              cc.callFunc(function(){ if(callback)callback();})
		    )

		);
		
    }

};


//执行动画
var DorpAction ={
		
		
	//运行动画
	runAction:function(sushi,callback) { 
		sushi.scale=0.1;
		var dorpAction = cc.FadeTo.create(PxConfig.pngActionTime, 255);
		 var spawn = new cc.Spawn([dorpAction,   cc.scaleTo(PxConfig.pngActionTime, 1)]);  
		sushi.runAction(cc.sequence(
				spawn,
              cc.delayTime(PxConfig.pngShowTime),
              cc.callFunc(function(){ if(callback)callback();})
		    ));

    }

};


//层
var ScaleRotateAction = {
	//运行动画
	runAction:function(sushi,callback) { 
    	sushi.setOpacity(255);
    	sushi.scale=0.1;
        var scaleTo = new cc.ScaleTo(PxConfig.pngActionTime, 1);  
        var rotateBy = new cc.RotateBy(PxConfig.pngActionTime/2, 360);  
        var spawn = new cc.Spawn(scaleTo, rotateBy);  
      
        
        
    	sushi.runAction(cc.sequence(
    			spawn,
              cc.delayTime(PxConfig.pngShowTime),
              cc.callFunc(function(){ if(callback)callback();})
		    ));
     
    }

};



//移动
var MoveAction = {
	//运行动画
	runAction:function(sushi,callback) { 
  	sushi.setOpacity(255);
  	sushi.scale=1;
  	sushi.x=-320-100*cc.random0To1();
  	sushi.y=sushi.y-100*cc.random0To1();
  	 var size = cc.winSize;
    
      var actionTo = cc.moveTo(2, cc.p(size.width / 2, size.height / 2));
      
  	sushi.runAction(cc.sequence(
  			actionTo,
            cc.delayTime(PxConfig.pngShowTime),
            cc.callFunc(function(){ if(callback)callback();})
		    ));
   
  }

};
//移动Y轴拉升
var ScaleByAction = {
	//运行动画
	runAction:function(sushi,callback) { 
  	sushi.setOpacity(255);
  	sushi.scale=0.2;
  	
  	var actionBy2 = cc.scaleBy(0.7, 0.01, 15);
    
    
  	sushi.runAction(cc.sequence(
  		  cc.delayTime(0.5),
  			actionBy2,
  			cc.scaleTo(0.7, 1, 1),
            cc.delayTime(PxConfig.pngShowTime),
            cc.callFunc(function(){ if(callback)callback();})
		    ));
   
  }

};

//拉大2被缩小
var Scale3Action = {
	//运行动画
	runAction:function(sushi,callback) { 
  	sushi.setOpacity(255);
  	sushi.scale=0.2;
  	
    
  	sushi.runAction(cc.sequence(
  		  cc.scaleTo(0.7,3),
  			cc.scaleTo(0.7, 1),
            cc.delayTime(PxConfig.pngShowTime),
            cc.callFunc(function(){ if(callback)callback();})
		    ));
   
  }

};

//拉大2被缩小
var Scale6To1Action = {
	//运行动画
	runAction:function(sushi,callback) { 
  	sushi.setOpacity(255);
  	sushi.scale=6;
  	
    
  	sushi.runAction(cc.sequence(
  			cc.scaleTo(2, 1),
            cc.delayTime(PxConfig.pngShowTime),
            cc.callFunc(function(){ if(callback)callback();})
		    ));
   
  }

};




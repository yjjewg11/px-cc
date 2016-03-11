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
              cc.delayTime(4),
              cc.callFunc(function(){ if(callback)callback();})
		    )

		);
		
    }

};

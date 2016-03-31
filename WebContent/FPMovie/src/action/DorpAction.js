//执行动画
var DorpAction ={
		
		
	//运行动画
	runAction:function(sushi,callback) { 
		sushi.scale=0.1;
		var dorpAction = cc.FadeTo.create(PxConfig.pngActionTime, 255);
		 var spawn = new cc.Spawn([dorpAction,   cc.scaleTo(PxConfig.pngActionTime, 1)]);  
		sushi.runAction(cc.sequence(
				spawn,
              cc.delayTime(4),
              cc.callFunc(function(){ if(callback)callback();})
		    ));

    }

};

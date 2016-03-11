//执行动画
var DorpAction ={
	//运行动画
	runAction:function(sushi,callback) { 
		var dorpAction = cc.FadeTo.create(PxConfig.pngActionTime, 255);
        
		sushi.runAction(cc.sequence(
				dorpAction,
              cc.delayTime(4),
              cc.callFunc(function(){ if(callback)callback();})
		    ));

    }

};

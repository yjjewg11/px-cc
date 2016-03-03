//执行动画
var DorpAction ={
	//运行动画
	runAction:function(sushi) { 
		var dorpAction = cc.FadeTo.create(PxConfig.pngActionTime, 255);
        sushi.runAction(dorpAction);
     
    }

};

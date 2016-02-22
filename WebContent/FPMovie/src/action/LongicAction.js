//执行动画
var LongicAction ={
	//运行动画
	runAction:function(sushi) { 
//		var dorpAction = cc.FadeTo.create(PxConfig.pngActionTime, 255);
		
        var scaleTo = new cc.moveBy(PxConfig.pngActionTime, 1);  
        var rotateBy = new cc.RotateBy(PxConfig.pngActionTime, 360, 0);  
        var spawn = new cc.Spawn(scaleTo, rotateBy);  
//	    cc.moveBy(1, cc.p(150, 0)),
//	    cc.callFunc(this.onBugMe, this))
        sushi.runAction(spawn);
     
    }

};

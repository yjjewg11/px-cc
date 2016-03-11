//层
var ScaleRotateAction = {
	//运行动画
	runAction:function(sushi,callback) { 
    	sushi.setOpacity(255);
    	sushi.setScale(0);  
        var scaleTo = new cc.ScaleTo(PxConfig.pngActionTime, 1);  
        var rotateBy = new cc.RotateBy(PxConfig.pngActionTime/2, 360, 0);  
        var spawn = new cc.Spawn(scaleTo, rotateBy);  
      
        
        
    	sushi.runAction(cc.sequence(
    			spawn,
              cc.delayTime(4),
              cc.callFunc(function(){ if(callback)callback();})
		    ));
     
    }

};

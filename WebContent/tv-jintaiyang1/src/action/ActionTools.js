//层
var ActionTools = {
	//运行动画
	runAction:function(sushi) { 
    	sushi.setOpacity(255);
    	sushi.setScale(0);  
        var scaleTo = new cc.ScaleTo(PxConfig.pngActionTime, 1);  
        var rotateBy = new cc.RotateBy(PxConfig.pngActionTime, 360, 0);  
        var spawn = new cc.Spawn(scaleTo, rotateBy);  
      
        sushi.runAction(spawn);
     
    },
    moveToRecord:function(attr){
    	
    },
    /**
     * {
          	  x: 384.42,
                y: 487.90,
                opacity:255,
                scale:0.3080,
                rotation: -12.68
          }
     */
    getSpriteAttr:function(sp){
    	
//    	setAnchorPoint
    	//var action1=cc.moveBy(2, cc.p(size.width / 2, size.height / 2));
    	var o={
    		  position: sp.getPosition(),
              anchor:getAnchorPoint(),
              opacity:sp.opacity,
              scale:getScale(),
              rotation: sp.getRotation()
        }
    	return o;
    }

};

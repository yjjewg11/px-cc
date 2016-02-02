var ScaleRotateAction=function(){
	
	var obj={
			runAction:function(sushi) { 
		    	sushi.setOpacity(255);
		    	sushi.setScale(0);  
		        var scaleTo = new cc.ScaleTo(2.0, 1);  
		        var rotateBy = new cc.RotateBy(2.0, 360, 0);  
		        var spawn = new cc.Spawn(scaleTo, rotateBy);  
		      
		        sushi.runAction(spawn);
		     
		    }
	};
	return obj;
}();
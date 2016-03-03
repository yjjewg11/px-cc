//执行动画
var LongicAction ={
	//运行动画
	runAction:function(sushi) { 	
		sushi.setOpacity(255);
		sushi.scale=0.5;
		sushi.x = -320;
	
		//sushi.y = 480;
		
		var scale=getFullScale(cc.winSize,sushi.getContentSize());
		sushi.scale=scale/10;
		sushi.runAction(cc.sequence(

		    cc.moveBy(2, cc.p(640, 0)),
              cc.scaleTo(2, scale)
		    )

		);
     
    }

};





//执行动画
var ActionM ={
	//运行动画.ActionM.runAction1(sushi);
	runAction1:function(sushi,callback) { 	
		
		  var size = cc.winSize;
		  var scale=getFullScale(cc.winSize,sushi.getContentSize());
//		sushi.scale=scale/10;
		var action1=cc.moveBy(2, cc.p(size.width / 2, size.height / 2));
		//	action1,action1.reverse()
		var controlPoints2 = [ cc.p(size.width / 4, size.height / 4),
		                        cc.p(size.width / 3, size.height / 3),
		                        cc.p(size.width / 2, size.height / 2) ];
		var bezierTo1 = cc.bezierTo(2, controlPoints2);

		var tt=  cc.scaleTo(2, scale);
		var seq=cc.sequence(
				bezierTo1,
				cc.rotateBy(2, 360-sushi.rotation),
			   cc.scaleTo(2, scale),
				//cc.moveBy(2, cc.p(size.width / 2, size.height / 2)),
	  		    cc.delayTime(2),
	  		  cc.scaleTo(2, 0),
	  		  cc.callFunc(function(){   sushi.removeFromParent();if(callback)callback();})
	  		    );
		
//		var action = cc.sequence(seq, seq.reverse());

		sushi.runAction(seq);
   
  }

};
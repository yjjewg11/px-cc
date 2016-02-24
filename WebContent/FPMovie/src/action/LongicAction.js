//执行动画
var LongicAction ={
	//运行动画
	runAction:function(sushi) { 	
		sushi.setOpacity(255);
		sushi.scale=0.5;
		sushi.x = -320;
	
		sushi.y = 480;

		sushi.runAction(cc.sequence(

		    cc.moveBy(2, cc.p(640, 0)),
              cc.scaleTo(2, 1)
		    )

		);
     
    }

};

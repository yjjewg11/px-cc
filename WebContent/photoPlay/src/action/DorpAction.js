var DorpAction=function(){
	
	var obj={
			runAction:function(sushi) { 
				var dorpAction = cc.FadeTo.create(2, 255);
		        sushi.runAction(dorpAction);
		     
		    }
	};
	return obj;
}();
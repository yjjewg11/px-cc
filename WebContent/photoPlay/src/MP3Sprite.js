
var Mp3Sprite = cc.Sprite.extend({
    onEnter:function () {
        cc.log("onEnter");
        this._super();
        this.addTouchEventListenser();
    },
    isPlay:true,
    addTouchEventListenser:function(){
        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: function (touch, event) { 
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();  
                if ( cc.rectContainsPoint(target.getBoundingBox(),pos)) {
                    
                	
                    if(!window.audio_mp3||window.audio_mp3.paused){
                    	 
                    	alert("打开音乐");
                    	  window.audio_mp3.play();
                    }else{
                    	 alert("关闭音乐");
                    	  
                    	  window.audio_mp3.pause();
                    }
                    return true;
                }
                
                return false;
            }
        
      
        });
        cc.eventManager.addListener(this.touchListener,this);
        
    },
    onExit:function () {
        cc.log("onExit");
    }

});
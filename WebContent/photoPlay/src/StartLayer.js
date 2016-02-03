//创建一个场景
var PauseLayer = cc.LayerColor.extend({
	  m_touchListener:null,
	  ctor:function(){
	    this._super();
	    var touchListener = {
	      event: cc.EventListener.TOUCH_ONE_BY_ONE,
	      swallowTouches: true,
	      onTouchBegan: this.onTouchBegan
	    };
	    cc.eventManager.addListener(touchListener, this);
	    this.m_touchListener = touchListener;
	    
	  },
	  onTouchBegan:function(touch, event) {
		  alert(target.isVisible()+"="+this.isTouchInside(target,touch));
	    var target = event.getCurrentTarget();
	    if(!target.isVisible() || (!this.isTouchInside(target,touch))){
	      return false;
	    }
	    return true;
	  },
	  isTouchInside: function (owner,touch) {
	    if(!owner || !owner.getParent()){
	      return false;
	    }
	    var touchLocation = touch.getLocation(); // Get the touch position
	    touchLocation = owner.getParent().convertToNodeSpace(touchLocation);
	    return cc.rectContainsPoint(owner.getBoundingBox(), touchLocation);
	  }
});



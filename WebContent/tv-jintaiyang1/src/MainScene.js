var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        LayerManage.setMainScene(this);
        LayerManage.addBackgroundLayer();
        
        this.playPNGLayer = new Layer1();
		this.addChild(this.playPNGLayer,11);
		
       // LayerManage.addToolbarLayer();
    }
});



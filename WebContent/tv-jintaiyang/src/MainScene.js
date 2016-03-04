var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        LayerManage.setMainScene(this);
        LayerManage.addBackgroundLayer();
       // LayerManage.addToolbarLayer();
        
        this.pNGLayer1=new PNGLayer1();
		this.addChild( this.pNGLayer1,1);
    }
});
var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        LayerManage.setMainScene(this);
        LayerManage.addBackgroundLayer();
        LayerManage.addToolbarLayer();
        LayerManage.showGameEndLayer();
    }
});
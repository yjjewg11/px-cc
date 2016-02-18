var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild( new BackgroundLayer(),-99);
        this.addChild( new ToolbarLayer(),99);
    }
});
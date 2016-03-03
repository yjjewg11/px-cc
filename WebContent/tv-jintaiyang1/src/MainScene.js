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


/**

类似的游戏特效:

TransitionRotoZoom 旋转进入
TransitionJumpZoom 原场景缩小弹出，新场景放大弹入
TransitionPageTurn 翻页效果进入
TransitionRadialCCW 钟摆效果
TransitionMoveInL ／ TransitionMoveInR ／ TransitionMoveInT ／ TransitionMoveInB 左侧／右侧／顶部／底部进入
TransitionSlideInL／TransitionSlideInR／TransitionSlideInT／TransitionSlideInB 分别从左侧／右侧／顶部／底部滑入
TransitionShrinkGrow 交替进入
TransitionFlipX／TransitionFlipY x轴翻入（左右）／ y轴翻入（上下）
TransitionFlipAngular 左上右下轴翻入
TransitionZoomFlipX／TransitionZoomFlipY x轴翻入放大缩小效果（左右）／ y轴翻入放大缩小效果（上下）
TransitionFadeTR ／TransitionFadeBL／TransitionFadeUp／TransitionFadeDown 小方格右上角显示进入／ 小方格左下角显示进入／ 横条向上显示进入／ 横条向下显示进入
TransitionSplitCols ／ TransitionSplitRows 竖条切换进入／ 横条切换进入
TransitionZoomFlipAngular 左上右下轴翻入放大缩小效果
TransitionFade 渐隐进入
TransitionCrossFade 渐变进入
TransitionTurnOffTiles 小方格消失进入
TransitionRadialCCW／TransitionRadialCW 扇面展开收起

*/
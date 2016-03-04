//
var LayerManage =  {
		mainScene:null,
		backgroundLayer:null,
		toolbarLayer:null,
		gameEndLayer:null,
		showGameEndLayer:function(){
			if(this.gameEndLayer==null){
				
				this.addGameEndLayer();
				return;
			}
			this.gameEndLayer.setVisible(true);
		},
		hideGameEndLayer:function(){
			if(this.gameEndLayer==null)return;
			this.gameEndLayer.setVisible(false);
			
		//	this.gameEndLayer.removeFromParent();
			//this.gameEndLayer=null;
			//不生效
		
		},
		addBackgroundLayer:function(){
			this.backgroundLayer=new BackgroundLayer();
			this.mainScene.addChild( this.backgroundLayer,-99);
		},
		addToolbarLayer:function(){
			this.toolbarLayer=new ToolbarLayer();
			this.mainScene.addChild( this.toolbarLayer,90);
		},
		addGameEndLayer:function(){
			this.gameEndLayer=new GameEndLayer();
			this.mainScene.addChild( this.gameEndLayer,95);
		},
		setMainScene:function(o){
			this.mainScene=o;
		}
		
}

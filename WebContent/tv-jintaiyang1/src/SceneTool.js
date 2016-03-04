var SceneTool = {
		actionArray:[],
		ind:0,
		init:function(){
			
			setInterval("SceneTool.getNewVer()", 60000);
			
			
			var a=this.actionArray;
			a.push("TransitionRotoZoom");
			a.push("TransitionJumpZoom");

			a.push("TransitionMoveInL");
			a.push("TransitionMoveInR");
			a.push("TransitionMoveInL");
			a.push("TransitionMoveInT");
			a.push("TransitionMoveInL");
			a.push("TransitionMoveInB");
			a.push("TransitionSlideInL");
			a.push("TransitionSlideInR");
			a.push("TransitionSlideInT");
			a.push("TransitionSlideInB");
			
			a.push("TransitionShrinkGrow");
			a.push("TransitionFlipX");
			a.push("TransitionFlipY");
			a.push("TransitionFlipAngular");
			a.push("TransitionZoomFlipX");
			a.push("TransitionZoomFlipY");
			
			//异常,参数不对
//				a.push("TransitionPageTurn");
//				a.push("TransitionRadialCCW");
//				a.push("TransitionFadeTR");
//				a.push("TransitionFadeBL");
//				a.push("TransitionFadeUp");
//				a.push("TransitionFadeDown");
		},
		/**
		 * SceneTool.runNext();
		 * @param nextScene
		 */
		runNext:function(nextScene){
			   
			// 转场特效持续两秒
      	  var transitionTime = 2;
      	  // 创建下一个场景
//      	  var nextScene = new MainScene2();
      	  // 使用下一个场景创建转场特效场景
      	  if(this.ind>=this.actionArray.length){
      		//  alert("end");
      		this.ind=0;
      	  }
      	  var tmp=this.actionArray[this.ind];
      	  
      	
      	try{
      	   var transitionScene = cc[tmp].create(transitionTime, nextScene);
      	   cc.director.runScene(transitionScene);
      	 this.ind++;
      	}catch(e){
      		alert(this.actionArray[this.ind]);
      		this.ind++;
      		this.runNext(nextScene);
      	}
    	
	},
	responseText:null,
	getNewVer:function(){
		var xhr = cc.loader.getXMLHttpRequest();
		var url="data.json?tt="+new Date().getTime();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
//                alert(xhr.responseText);
                if( SceneTool.responseText==null){
                	  SceneTool.responseText=xhr.responseText;
                	  return;
                }
                if( SceneTool.responseText==xhr.responseText)return;
                
                SceneTool.responseText=xhr.responseText;
                
                window.location.href="index.html?ver="+SceneTool.responseText;
            }
        };
        xhr.send();
	}
}
SceneTool.init();
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
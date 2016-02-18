
var ToolbarLayer = cc.Layer.extend({
    sprite:null,
   
  
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        
       var  toolbarLayer = ccs.load(res.ToolbarLayer).node;  
        this.addChild(toolbarLayer,10);
        
       
      
      //背景音乐按钮
        var button_mp3 = ccui.helper.seekWidgetByName(toolbarLayer, "Button_mp3");
        //绑定事件
        button_mp3.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.bgAudioPlayOrPause(button_mp3);
        	}
        	
        });
        
      //开始按钮(中间)
        var button_start = ccui.helper.seekWidgetByName(toolbarLayer, "Button_start");
        //暂停,开始按钮(左上).
        var Button_movie = ccui.helper.seekWidgetByName(toolbarLayer, "Button_movie");
        //绑定事件
        button_start.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		
        		ToolbarControl.gameStartOrReplay(button_start,Button_movie);
        	}
        	
        });
        
       
        //绑定事件
        Button_movie.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.gamePlayOrPause(button_start,Button_movie);
        	}
        	
        });
        //自动播放
        //ToolbarControl.gamePlay();
        
        /* you can create scene with following comment code instead of using csb file.
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        */

        return true;
    }
});




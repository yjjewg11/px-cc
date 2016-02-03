
var MainLayer = cc.Layer.extend({
    sprite:null,
    button_start:function(sender,type){
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
    	
        switch (type) {
        case ccui.Widget.TOUCH_BEGAN:
            cc.log("loginButton Touch Began");
            break;
        case ccui.Widget.TOUCH_MOVED:
            cc.log("loginButton Touch Moved");
            break;
        case ccui.Widget.TOUCH_ENDED:
            cc.log("loginButton Touch Ended");
            alert( cc.director.isPaused ());
            if(cc.director.isPaused ()){
            	 this.loadTextures(res.play_mp3,res.pause_mp3);
            	 cc.director.resume();
            }else{
            	 this.loadTextures(res.pause_mp3,res.play_mp3);
            	cc.director.pause();
            }
            break;
        case ccui.Widget.TOUCH_CANCELED:
            cc.log("loginButton Touch Canceled");
            break;
        default:
            break;
        }
    },
    buttonTouchEvent:function(sender,type){
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
        switch (type) {
        case ccui.Widget.TOUCH_BEGAN:
            cc.log("loginButton Touch Began");
            break;
        case ccui.Widget.TOUCH_MOVED:
            cc.log("loginButton Touch Moved");
            break;
        case ccui.Widget.TOUCH_ENDED:
            cc.log("loginButton Touch Ended");
            alert( cc.director.isPaused ());
            if(cc.director.isPaused ()){
            	 this.loadTextures(res.play_mp3,res.pause_mp3);
            	 cc.director.resume();
            }else{
            	 this.loadTextures(res.pause_mp3,res.play_mp3);
            	cc.director.pause();
            }
            break;
        case ccui.Widget.TOUCH_CANCELED:
            cc.log("loginButton Touch Canceled");
            break;
        default:
            break;
        }
    },
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        
       var  mainscene = ccs.load(res.ToobarScene).node;  
        this.addChild(mainscene,10);
        
        
        this.backgroundSprite = new cc.Sprite(res.background);
        this.backgroundSprite.attr({
        	   x: size.width / 2,
               y: size.height / 2
         
        });
       
        this.addChild(this.backgroundSprite, 0);
        //this.removeChild(fire);
      //开始按钮
        var button_start = ccui.helper.seekWidgetByName(mainscene, "Button_start");
        //绑定事件
        button_start.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.gamePlay();
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




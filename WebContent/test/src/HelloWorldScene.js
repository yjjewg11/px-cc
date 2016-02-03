
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    buttonTouchEvent:function(sender,type){
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
        switch (type) {
        case ccui.Widget.TOUCH_BEGAN:
            cc.log("loginButton Touch Began");
            //获取用户在name和password输入框的输入。使用getString()方法获得内容。
          //  cc.log("username : " + nameTextField.getString());
          //  cc.log("password : " + passwordTextField.getString());
            //获取用户是否勾选CheckBox，使用isSelected()方法获取，返回boolean。
         //   cc.log("saveState : " + saveCheckBox.isSelected());
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

        
       var  mainscene = ccs.load(res.MainScene_json).node;  
        this.addChild(mainscene);
       // cc.ParticleSmoke();  
        system = new cc.ParticleSmoke(2); 
        system.x = size.width /2;  
        system.y = size.height /2;  
   
   
        this.addChild(system); 
        var fire = ccui.helper.seekWidgetByName(mainscene, "Particle_1");
        fire.removeFromParent(); 

        //this.removeChild(fire);
      //LoginButton控件
        var loginButton = ccui.helper.seekWidgetByName(mainscene, "Button_1");
        this.loginButton=loginButton;
        loginButton.addTouchEventListener(this.buttonTouchEvent);
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

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});



var GameEndLayer = cc.Layer.extend({
    sprite:null,
   //Image_herald   LabelText
  
    ctor:function () {
        this._super();
       var  gameEndLayer = ccs.load(res.GameEndScene).node;  
        this.addChild(gameEndLayer,10);
        
      //背景音乐按钮
        var Button_relpay = ccui.helper.seekWidgetByName(gameEndLayer, "Button_relpay");
        //绑定事件
        Button_relpay.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.gameReplay();
        	}
        	
        });
      //背景音乐按钮
        var Button_make = ccui.helper.seekWidgetByName(gameEndLayer, "Button_make");
        //绑定事件
        Button_make.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.makeMovie();
        	}
        	
        });
      //背景音乐按钮
        var Button_share = ccui.helper.seekWidgetByName(gameEndLayer, "Button_share");
        //绑定事件
        Button_share.addTouchEventListener(function(sender,type){
        	if(type==ccui.Widget.TOUCH_ENDED){
        		ToolbarControl.shareTo();
        	}
        	
        });
        
        var Image_herald = ccui.helper.seekWidgetByName(gameEndLayer, "Image_herald");
			G_register_Loader.regImgLoader(getFPMovie.data.herald);
	
        Image_herald.loadTexture(getFPMovie.data.herald,0);
    	
        var Text_title = ccui.helper.seekWidgetByName(gameEndLayer, "Text_title");
        Text_title.setText(getFPMovie.data.title);
         
      
//        var Image_herald1 = ccui.helper.seekWidgetByName(gameEndLayer, "Image_herald1");
//        Image_herald1.setTexture("res/bgWarmSpring.png",0);
//        
        
        
        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function                      
            onTouchBegan: function (touch, event) { 
            	
            	var target = event.getCurrentTarget();
                if(target&&target.isVisible()){
                	return true;
                }
                	return false;
                
            },
            onTouchEnded: function (touch, event) { 
            
            	 return true;
            }
        	
        });
        
        cc.eventManager.addListener(this.touchListener,this);
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




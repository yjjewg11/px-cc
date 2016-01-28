//层
var PlayPNGLayer = cc.LayerColor.extend({
    bgSprite:null,
    index:0,//当前图片索引
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;

        this.schedule_update();
        return true;
    },
    /**
     * 
     * 添加精灵（图片）
     * @param png
     * @param index
     */
    addMovieItem : function(obj,index) {
    	//{"path":"http://img.wenjienet.com/fp/2016/69629a2a-54a7-49bc-9823-4b92e9c6423a.jpg@108h","address":null,"note":null},
    
    	
    	G_register_Loader.regImgLoader(obj.path);
        var sushi = new cc.Sprite(obj.path);
        var size = cc.winSize;
        sushi.attr({
        	  x: size.width / 2,
              y: size.height / 2,
              opacity:0,
              //scale:0.1,
              rotation: 0
        });
        

        this.addChild(sushi,index);
        
        var dorpAction = cc.FadeTo.create(2, 255);
        sushi.runAction(dorpAction);
        
        //动画显示
        this.scheduleOnce(this.schedule_update,4);
        //定时销毁
        this.scheduleOnce(function(){this.schedule_delete_Sprite(sushi);},6);
        
    },
    /*
     *创建文本内容 
     * 
     * setString
     * */
    
    addTitle : function(title) {	
    	 var text = new cc.LabelTTF(title, "Arial", 38);      
        var size = cc.winSize;
        text.attr({
        	  x: size.width / 2,
              y: size.height / 4,
              rotation: 0
        });
        

        this.addChild(text,11);
   

        
//        //动画显示
//        this.scheduleOnce(this.schedule_update,4);
//        //定时销毁
//        this.scheduleOnce(function(){this.schedule_delete_Sprite(sushi);},6);
        
    },
    /**
     * 
     * 添加精灵（图片）
     * @param png
     * @param index
     */
    addPNG1 : function(png,index) {

        var sushi = new cc.Sprite(png);
        var size = cc.winSize;
        sushi.attr({
        	  x: size.width / 2,
              y: size.height / 2,
              opacity:0,
              scale:0.1,
              rotation: 0
        });
        

        this.addChild(sushi,index);
        
        var dorpAction = cc.FadeTo.create(2, 255);
        sushi.runAction(dorpAction);
        
        //动画显示
        this.scheduleOnce(this.schedule_update,4);
        //定时销毁
        this.scheduleOnce(function(){this.schedule_delete_Sprite(sushi);},6);
        
    }
    //销毁已显示（精灵）图片
    ,schedule_delete_Sprite : function(spr) {
    	
    	
    	  var dorpAction = cc.FadeTo.create(2, 100);
    	  spr.runAction(dorpAction);
    	 
    	  
    	   this.scheduleOnce(function(){ spr.removeFromParent();},3);
     
    }
    //获取图片列表，进行依次显示
    ,schedule_update : function() {
    	
    	
    	var list=getFPMovie.list.data;
    	if(this.index<list.length){
    		//{"path":"http://img.wenjienet.com/fp/2016/69629a2a-54a7-49bc-9823-4b92e9c6423a.jpg@108h","address":null,"note":null},
    		
    		this.addMovieItem(list[this.index],this.index);
    		this.addTitle(getFPMovie.data.title);
    		//this.addPNG1(data.list[this.index],this.index);
    		this.index++;
    	}
        
    }
});

//层
var PlayLayerMp3 = cc.Layer.extend({
    bgSprite:null,
    index:0,
    ctor:function () {
        this._super();

        var size = cc.winSize;
      //  this.setColor(cc.color(150,150,150));
        this.addMp3();
        return true;
    },
    /**
     * 
     * 添加精灵（图片）
     * @param png
     * @param index
     */
    addMp3 : function(png,index) {
        var sushi = new Mp3Sprite(res.play_mp3);
        var size = cc.winSize;
        sushi.attr({
        	  x: size.width,
              y: size.height,
              rotation: 0
        });
        
        sushi.setAnchorPoint(1, 1);
        this.addChild(sushi,0);
        
        
    }
    
});


//场景
var PlayPNGScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer1 = new PlayLayerMp3();
        this.addChild(layer1,9);
        var layer = new PlayPNGLayer();
        this.addChild(layer,0);
        
      
        
    }
});
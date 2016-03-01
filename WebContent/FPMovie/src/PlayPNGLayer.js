//层
var PlayPNGLayer = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
    playPng:function(){
    	this.index=0;
        this.schedule_update();
        this.schedule(this.schedule_update,PxConfig.pngShowTime);
    },
    ctor:function () {
    	
        this._super();
        var size = cc.winSize;
        this.playPng();
        
       
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
        
        
        var text=this.addTitle(obj,index);
        sushi.pxItemNote=text;
        this.spriteQueue.push(sushi);
        this.modMovieItem(3,sushi);
        
//        //动画显示
//        this.scheduleOnce(this.schedule_update,4);
//        //定时销毁
//        this.scheduleOnce(function(){this.schedule_delete_Sprite(sushi);},6);
        
    },
    
    //动画模板
    modMovieItem : function(type,sushi) { 
    	//DorpAction.runAction(sushi);
    	ScaleRotateAction.runAction(sushi);
    	//LongicAction.runAction(sushi);
        //动画显示
        // this.scheduleOnce(this.schedule_update,PxConfig.pngShowTime);
        
        //定时销毁
        // this.scheduleOnce(function(){this.schedule_delete_Sprite(sushi);},6);
        
    },
  
    
    
    /*
     *创建文本内容 
     * 
     * setString
     * */
    
    addTitle : function(title) {	
    	var text = new cc.LabelTTF(title.note, "Arial", 55);      
        var size = cc.winSize;
        text.attr({
        	  x: size.width / 4,
              y: size.height /4,
              rotation: 0
        });

        this.addChild(text);     
        return text;
    },
    //销毁已显示（精灵）图片
    schedule_delete_Sprite : function(spr) {
    	
    	if(!spr)return;
    	  var dorpAction = cc.FadeTo.create(2, 100);
    	  spr.runAction(dorpAction);
    	 
    	//  spr.removeFromParent();
    	   this.scheduleOnce(function(){ 
    			if(spr.pxItemNote)spr.pxItemNote.removeFromParent();
    		   spr.removeFromParent();
    		   },1);
     
    }
    //获取图片列表，进行依次显示
    ,schedule_update : function() {
    	var popObj=this.spriteQueue.pop();
    
    	var list=getFPMovie.list.data;
    	list[0].note="天空一朵云";
    	list[1].note=null;
    	list[2].note="小小小小小";
    	list[3].note="爱我中华爱我中华爱我中华";
    	list[4].note=null;
    	if(this.index<list.length){
    		//{"path":"http://img.wenjienet.com/fp/2016/69629a2a-54a7-49bc-9823-4b92e9c6423a.jpg@108h","address":null,"note":null},
    		
    		this.addMovieItem(list[this.index],this.index);
    		
    		//this.addPNG1(data.list[this.index],this.index);
    		this.index++;
    		
    	}else{
    		 this.unschedule(this.schedule_update);
    		ToolbarControl.gameEnd();
    	}
    	this.schedule_delete_Sprite(popObj);
        
    }
});

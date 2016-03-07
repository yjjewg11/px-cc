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
  
    
    title_bg:null,
	title_Label:null,
    /*
     *创建文本内容 
     * 
     * setString
     * */
    
    addTitle : function(obj) {
    	var data=obj.note;
    	var dataText;
    	if(data==null){
			if(this.title_bg){
					this.title_bg.attr({
					   opacity:0
				});
			}
			 if( this.title_Label){
				 this.title_Label.attr({
					   opacity:0
				});
					  
				}
    		 return;  	
    	}   
    	 var size = cc.winSize;
    	


 
	if(this.title_bg==null){
		this.title_bg = new cc.Sprite(res.text_bg);

		
     //   title_bg.setSize(cc.size(640,200));
       // title_bg.setPosition(cc.p(640, 0));
     //  title_bg.setContentSize(640,160);
        this.title_bg.attr({
				anchorX:0,
			anchorY:0,
        	  x: 0 ,
              y: 0,
			  scaleX:640,
			  scaleY:180,
			   opacity:125
        });
        

        this.addChild(this.title_bg);
	}
		
        
    	var dataArr=G_Tools.getStringSplitNumArr(data,18);
		var data=dataArr.join('\n');
		var title_bgHeight=35*dataArr.length+15;
		this.title_bg.attr({
				 scaleY:title_bgHeight,
			   opacity:125
        }); 

	if(this.title_Label==null){
		this.title_Label = new cc.Sprite(res.text_bg);

		this.title_Label = new cc.LabelTTF(data, "Arial", 30);      
			var size = cc.winSize;
			this.title_Label.setContentSize(560,150);
			this.title_Label.attr({
					anchorX:0,
					anchorY:0,
					  x: 40 ,
					  y: 0
			});
			this.addChild(this.title_Label);  


	}else{
			this.title_Label.setString(data);
			this.title_Label.attr({
				 
			   opacity:255
        });
	}
		

    	   
        return null;
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
    	list[0].note="stop;可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省 略该参数，那么返回的子串会一直到字符串的结尾。";
    	list[1].note=null;
    	list[2].note="小小小小小asssssssss";
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

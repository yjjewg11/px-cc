//层
var PlayPNGLayer = cc.Layer.extend({
    bgSprite:null,
    index:0,//当前图片索引
    spriteQueue:new ArrayQueue(),//保存需要释放内存的
    playPng:function(){
    	this.index=0;
        this.schedule_update();
//        this.schedule(this.schedule_update,PxConfig.pngShowTime);
//        this.scheduleOnce(this.schedule_update,PxConfig.pngShowTime);
    },
    ctor:function () {
    	
        this._super();
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
//        sushi.pxItemNote=text;
//        this.spriteQueue.push(sushi);
        this.modMovieItem(3,sushi);
        
    },
    
    //动画模板
    modMovieItem : function(type,sushi) { 
    	 var that=this;
    	  var cb=function(){that.schedule_update();that.schedule_delete_Sprite(sushi);};
    	PlayPNGService.getAction().runAction(sushi,cb);
        
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
	    	   
    },
    //销毁已显示（精灵）图片
    schedule_delete_Sprite : function(spr) {
    	
    	if(!spr)return;
    	spr.runAction(cc.sequence(
    			cc.FadeTo.create(1, 0),
              cc.callFunc(function(){ 
            	  	spr.removeFromParent();
            	  }
              )
		    ));
     
    }
    //获取图片列表，进行依次显示
    ,schedule_update : function() {
    
    	var list=getFPMovie.list.data;
    	
    	if(this.index<list.length){
    		this.addMovieItem(list[this.index],this.index);
    		this.index++;
    	}else{
//    		 this.unschedule(this.schedule_update);
    		ToolbarControl.gameEnd();
    	}
    	
        
    }
});

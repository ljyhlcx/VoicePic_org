window.Laya=window.Laya||{},function(e){"use strict";class t extends e.Script{constructor(){super(),this.intType=1e3,this.numType=1e3,this.strType="hello laya",this.boolType=!0}onEnable(){}onDisable(){}}var i,a=e.ClassUtils.regClass;!function(t){class i extends e.View{constructor(){super(),this.referenceClass=[e.Image,e.Label,e.Button,e.View]}createChildren(){super.createChildren(),this.createView(i.uiView)}}i.uiView={type:"View",props:{width:720,height:520},compId:2,child:[{type:"Image",props:{y:0,x:0,width:720,var:"bg",skin:"comp/img_bg.png",sizeGrid:"109,57,22,50",name:"bg",height:520},compId:3},{type:"Image",props:{y:100,x:0,width:720,var:"img",name:"img",mouseEnabled:!0,height:420},compId:4},{type:"Label",props:{y:17,width:187,var:"txtName",valign:"middle",text:"苹果",name:"txtName",height:71,fontSize:60,font:"SimHei",color:"#ffffff",centerX:0,align:"center"},compId:5},{type:"Button",props:{y:111,var:"btnVoice",stateNum:1,skin:"comp/voice.png",right:13,name:"btnVoice"},compId:7},{type:"Button",props:{y:22,x:17,visible:!1,var:"btnDIY",stateNum:1,skin:"comp/btnDIY.png",name:"btnDIY"},compId:8}],loadList:["comp/img_bg.png","comp/voice.png","comp/btnDIY.png"],loadList3D:[]},t.PicItemUI=i,a("ui.PicItemUI",i);class o extends e.View{constructor(){super(),this.referenceClass=[e.Panel,e.VBox,e.Box,e.View,e.Button,e.Sprite]}createChildren(){super.createChildren(),this.createView(o.uiView)}}o.uiView={type:"View",props:{width:720,runtime:"script/GameUI.ts",height:1440},compId:1,child:[{type:"Panel",props:{x:0,width:720,var:"panel",vScrollBarSkin:"comp/vscroll.png",top:0,bottom:150},compId:44,child:[{type:"VBox",props:{y:0,x:0,width:720,var:"vs",space:25,align:"left"},compId:29}]},{type:"Box",props:{width:600,var:"tab",height:150,centerX:0,bottom:0},compId:35,child:[{type:"Button",props:{y:0,x:0,toggle:!0,skin:"comp/tab.png",selected:!0,labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"认识人物"},compId:42,child:[{type:"Sprite",props:{y:8,x:25,texture:"comp/ren.png",mouseEnabled:!1},compId:43}]},{type:"Button",props:{y:0,x:150,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"动物声音"},compId:40,child:[{type:"Sprite",props:{y:8,x:25,width:100,texture:"comp/anim.png",height:100,disabled:!0},compId:41}]},{type:"Button",props:{y:0,x:300,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"水果蔬菜"},compId:36,child:[{type:"Sprite",props:{y:8,x:25,texture:"comp/bru.png",mouseEnabled:!1},compId:37}]},{type:"Button",props:{y:0,x:450,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"交通工具"},compId:38,child:[{type:"Sprite",props:{y:8,x:25,width:100,texture:"comp/car.png",mouseEnabled:!1,height:100},compId:39}]}]}],loadList:["comp/vscroll.png","comp/tab.png","comp/ren.png","comp/anim.png","comp/bru.png","comp/car.png"],loadList3D:[]},t.PicListUI=o,a("ui.PicListUI",o)}(i||(i={}));class o{constructor(){}static init(){var a=e.ClassUtils.regClass;a("ui",i),a("script/GameUI.ts",t)}}o.width=720,o.height=1440,o.scaleMode="fixedwidth",o.screenMode="vertical",o.alignV="top",o.alignH="center",o.startScene="PicList.scene",o.sceneRoot="",o.debug=!1,o.stat=!1,o.physicsDebug=!1,o.exportSceneToJson=!0,o.init();class s{}var n=e.ClassUtils.regClass;class l extends e.View{constructor(){super(),this.referenceClass=[e.Image,e.Label,e.Button,e.View]}createChildren(){super.createChildren(),this.createView(l.uiView)}}l.uiView={type:"View",props:{width:720,height:520},compId:2,child:[{type:"Image",props:{y:0,x:0,width:720,var:"bg",skin:"comp/img_bg.png",sizeGrid:"109,57,22,50",name:"bg",height:520},compId:3},{type:"Image",props:{y:100,x:0,width:720,var:"img",name:"img",mouseEnabled:!0,height:420},compId:4},{type:"Label",props:{y:17,width:187,var:"txtName",valign:"middle",text:"苹果",name:"txtName",height:71,fontSize:60,font:"SimHei",color:"#ffffff",centerX:0,align:"center"},compId:5},{type:"Button",props:{y:111,var:"btnVoice",stateNum:1,skin:"comp/voice.png",right:13,name:"btnVoice"},compId:7},{type:"Button",props:{y:22,x:17,visible:!1,var:"btnDIY",stateNum:1,skin:"comp/btnDIY.png",name:"btnDIY"},compId:8}],loadList:["comp/img_bg.png","comp/voice.png","comp/btnDIY.png"],loadList3D:[]},n("ui.PicItemUI",l);class p extends e.View{constructor(){super(),this.referenceClass=[e.Panel,e.VBox,e.Box,e.View,e.Button,e.Sprite]}createChildren(){super.createChildren(),this.createView(p.uiView)}}p.uiView={type:"View",props:{width:720,runtime:"script/GameUI.ts",height:1440},compId:1,child:[{type:"Panel",props:{x:0,width:720,var:"panel",vScrollBarSkin:"comp/vscroll.png",top:0,bottom:150},compId:44,child:[{type:"VBox",props:{y:0,x:0,width:720,var:"vs",space:25,align:"left"},compId:29}]},{type:"Box",props:{width:600,var:"tab",height:150,centerX:0,bottom:0},compId:35,child:[{type:"Button",props:{y:0,x:0,toggle:!0,skin:"comp/tab.png",selected:!0,labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"认识人物"},compId:42,child:[{type:"Sprite",props:{y:8,x:25,texture:"comp/ren.png",mouseEnabled:!1},compId:43}]},{type:"Button",props:{y:0,x:150,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"动物声音"},compId:40,child:[{type:"Sprite",props:{y:8,x:25,width:100,texture:"comp/anim.png",height:100,disabled:!0},compId:41}]},{type:"Button",props:{y:0,x:300,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"水果蔬菜"},compId:36,child:[{type:"Sprite",props:{y:8,x:25,texture:"comp/bru.png",mouseEnabled:!1},compId:37}]},{type:"Button",props:{y:0,x:450,toggle:!0,skin:"comp/tab.png",labelSize:20,labelPadding:"50",labelFont:"SimHei",labelColors:"#000000,#000000,#ffffff",label:"交通工具"},compId:38,child:[{type:"Sprite",props:{y:8,x:25,width:100,texture:"comp/car.png",mouseEnabled:!1,height:100},compId:39}]}]}],loadList:["comp/vscroll.png","comp/tab.png","comp/ren.png","comp/anim.png","comp/bru.png","comp/car.png"],loadList3D:[]},n("ui.PicListUI",p);class r extends l{constructor(){super(),this.canPlay=!0,this.img.on(e.Event.LOADED,this,this.onImgloaded),this.on(e.Event.CLICK,this,this.onMouseHandler),this.btnVoice.on(e.Event.CLICK,this,this.onVoice)}set data(e){this._data=e,this.btnVoice.visible=this.data.voice}get data(){return this._data}display(){this.txtName.text=this.data.name,this.img.skin=this.data.img,this.isDisplay=!0}onImgloaded(){var e=this.img.source,t=this.img.width/e.width,i=Math.ceil(e.height*t);this.img.height=i,this.bg.height=this.height=i+100}onMouseHandler(t){this.canPlay&&t.target.name.indexOf("btn")<0&&this.data.sound&&(e.SoundManager.playSound(this.data.sound),this.canPlay=!1,e.Laya.timer.loop(600,this,this.onReset))}onVoice(){this.canPlay&&this.data.voice&&(e.SoundManager.playSound(this.data.voice),this.canPlay=!1,e.Laya.timer.loop(600,this,this.onReset))}onReset(){this.canPlay=!0,e.Laya.timer.clear(this,this.onReset)}}class c extends p{constructor(){super(),this.preSelectIndex=0,c.instance=this,e.MouseManager.multiTouchEnabled=!1}createChildren(){super.createChildren(),this.tab.on(e.Event.CLICK,this,this.onTabclick),this.panel.vScrollBar.visible=!1,this.panel.vScrollBar.changeHandler=new e.Handler(this,this.onChange),this.topspace=new e.UIComponent,this.topspace.width=this.topspace.height=50,this.on(e.Event.DISPLAY,this,this.onDisplay),this.on(e.Event.UNDISPLAY,this,this.onUnDisplay)}onDisplay(){this.onResize(),e.Laya.stage.on(e.Event.RESIZE,this,this.onResize)}onUnDisplay(){e.Laya.stage.off(e.Event.RESIZE,this,this.onResize)}onResize(){this.height=e.Laya.stage.height}onTabclick(e){var t=e.target;this.selectedIndex=this.tab.getChildIndex(t)}set dataSource(e){this._dataSource=e,this.selectedIndex=0}set selectedIndex(e){this._selectedIndex=e;var t=this.tab.getChildAt(this.preSelectIndex);t.selected=!1,(t=this.tab.getChildAt(e)).selected=!0,this.preSelectIndex=e,this.onTabSelect(e)}get selectedIndex(){return this._selectedIndex}onTabSelect(t){this.panel.vScrollBar.stopScroll(),this.panel.vScrollBar.value=0,this.vs.removeChildren();var i=this._dataSource[t];this.vs.addChild(this.topspace);for(var a=0,o=i.length;a<o;a++){var s=new r;s.data=i[a],s.btnDIY.visible=!0,s.btnDIY.on(e.Event.CLICK,this,this.onDIY,[a]),this.vs.addChild(s),a<4&&s.display()}}onChange(e){for(var t=this.vs.numChildren,i=1;i<t;i++){var a=this.vs.getChildAt(i);!a.isDisplay&&a.y<this.panel.height+this.panel.vScrollBar.value+400&&a.display()}}onDIY(e){var t=this;window.wx&&window.wx.chooseImage&&window.wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.tempFilePaths[0];t.vs.getChildAt(e+1).img.skin=a,s.jsonData[t.selectedIndex+""][e].img=a;var o=JSON.stringify(s.jsonData);o&&window.wx.setStorage({key:"jsonData",data:""+o})}})}}new class{constructor(){e.Laya.Browser.window.clearAll&&e.Laya.Browser.window.clearAll(),window.Laya3D?window.Laya3D.init(o.width,o.height):e.Laya.init(o.width,o.height,e.WebGL),e.Laya.DebugPanel&&e.Laya.DebugPanel.enable(),e.Laya.stage.scaleMode=o.scaleMode,e.Laya.stage.screenMode=o.screenMode,e.Laya.stage.alignV=o.alignV,e.Laya.stage.alignH=o.alignH,e.URL.exportSceneToJson=o.exportSceneToJson,(o.debug||"true"==e.Utils.getQueryString("debug"))&&e.Laya.enableDebugPanel(),o.stat&&e.Stat.show(),e.Laya.alertGlobalError(!0),e.ResourceVersion.enable("version.json",e.Handler.create(this,this.onVersionLoaded),e.ResourceVersion.FILENAME_VERSION)}onVersionLoaded(){if(window.wx)try{var t=window.wx.getStorageSync("jsonData");t&&(s.jsonData=JSON.parse(t))}catch(e){s.jsonData=null}var i=[{url:"res/atlas/comp.json",type:e.Loader.ATLAS}];s.jsonData||i.push({url:"config.json",type:e.Loader.TEXT}),e.Laya.loader.load(i,e.Handler.create(this,this.onConfigLoaded))}loadSinglePackage(e,t,i=0){var a=this,o={name:e,errNum:i,success:function(e){t&&t()},fail:function(i){o.errNum<0?(o.errNum=1,a.loadSinglePackage(e,t,1)):console.log(i.errMsg)}};window.wx.loadSubpackage(o)}loadPackListSync(e,t){for(var i=0,a=function(){++i>=e.length&&t&&t()},o=e.length-1;o>=0;o--)this.loadSinglePackage(e[o],a)}initWXGameMain(){if(window.wx.loadSubpackage){var e=this;this.loadPackListSync(["content1","content2","content3","content4"],function(){e.onCreatePic()})}}onConfigLoaded(){window.wx?this.initWXGameMain():this.onCreatePic()}onCreatePic(){var t=new c;if(e.Laya.stage.addChild(t),s.jsonData)t.dataSource=s.jsonData;else{var i=e.Laya.loader.getRes("config.json");i&&(s.jsonData=JSON.parse(i),t.dataSource=s.jsonData,window.wx&&window.wx.setStorage({key:"jsonData",data:""+i}))}}}}(Laya);
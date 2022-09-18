/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import { Scene } from "laya/display/Scene";
import { ClassUtils } from "laya/utils/ClassUtils";
var REG: Function = ClassUtils.regClass;
import { Button } from "laya/ui/Button";
import { List } from "laya/ui/List";
import { Box } from "laya/ui/Box";
import { Image } from "laya/ui/Image";
import { View } from "laya/ui/View";
import { Label } from "laya/ui/Label";
import { Panel } from "laya/ui/Panel";
import { VBox } from "laya/ui/VBox";
import { Sprite } from "laya/display/Sprite";
export module ui {
    export class NameToPicUI extends View {
		public btnName:Button;
		public btnNext:Button;
		public lblzq:Button;
		public lblcuo:Button;
		public list:List;
		public bigBox:Box;
		public bigImg:Image;
        public static  uiView:any ={"type":"View","props":{"width":720,"top":0,"bottom":0},"compId":2,"child":[{"type":"Button","props":{"x":57,"width":379,"var":"btnName","stateNum":1,"skin":"comp/btn_1.png","sizeGrid":"0,50,0,50","labelSize":40,"labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"苹果","height":89,"bottom":40},"compId":4},{"type":"Button","props":{"x":480,"width":211,"var":"btnNext","stateNum":1,"skin":"comp/btn_1.png","sizeGrid":"0,50,0,50","labelSize":40,"labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"下一题","height":89,"bottom":40},"compId":5},{"type":"Button","props":{"y":39,"width":260,"var":"lblzq","stateNum":1,"skin":"comp/btn_1.png","sizeGrid":"0,50,0,50","right":60,"mouseEnabled":false,"labelSize":35,"labelColors":"#000000,#000000,#ffffff","label":"正确：0","height":89},"compId":6},{"type":"Button","props":{"y":39,"width":260,"var":"lblcuo","stateNum":1,"skin":"comp/btn_2.png","sizeGrid":"0,50,0,50","mouseEnabled":false,"left":60,"labelSize":35,"labelColors":"#000000,#000000,#ffffff","label":"错误：0","height":89},"compId":7},{"type":"List","props":{"var":"list","top":140,"spaceY":30,"spaceX":30,"selectEnable":true,"right":30,"repeatY":2,"repeatX":2,"left":30,"bottom":160},"compId":11},{"type":"Box","props":{"var":"bigBox","top":140,"right":30,"left":30,"bottom":160},"compId":12,"child":[{"type":"Image","props":{"var":"bigImg","centerY":0,"centerX":0},"compId":13}]}],"loadList":["comp/btn_1.png","comp/btn_2.png"],"loadList3D":[]};
        public referenceClass:Array<any>=[Button, List, Box, Image, View, 
				]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(NameToPicUI.uiView);
        }
    }
    REG("ui.NameToPicUI",NameToPicUI);
    export class PicItemUI extends View {
		public bg:Image;
		public img:Image;
		public txtName:Label;
		public btnVoice:Button;
		public btnDIY:Button;
        public static  uiView:any ={"type":"View","props":{"width":720,"height":520},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"bg","skin":"comp/img_bg.png","sizeGrid":"109,57,22,50","name":"bg","height":520},"compId":3},{"type":"Image","props":{"y":100,"x":0,"width":720,"var":"img","name":"img","mouseEnabled":true,"height":420},"compId":4},{"type":"Label","props":{"y":17,"width":187,"var":"txtName","valign":"middle","text":"苹果","name":"txtName","height":71,"fontSize":60,"font":"SimHei","color":"#ffffff","centerX":0,"align":"center"},"compId":5},{"type":"Button","props":{"y":111,"var":"btnVoice","stateNum":1,"skin":"comp/voice.png","right":13,"name":"btnVoice"},"compId":7},{"type":"Button","props":{"y":22,"x":17,"visible":false,"var":"btnDIY","stateNum":1,"skin":"comp/btnDIY.png","name":"btnDIY"},"compId":8}],"loadList":["comp/img_bg.png","comp/voice.png","comp/btnDIY.png"],"loadList3D":[]};
        public referenceClass:Array<any>=[Image, Label, Button, View]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(PicItemUI.uiView);
        }
    }
    REG("ui.PicItemUI",PicItemUI);
    export class PicListUI extends View {
		public panel:Panel;
		public vs:VBox;
		public tab:Box;
        public static  uiView:any ={"type":"View","props":{"width":720,"runtime":"script/GameUI.ts","height":1440},"compId":1,"child":[{"type":"Panel","props":{"x":0,"width":720,"var":"panel","vScrollBarSkin":"comp/vscroll.png","top":0,"bottom":150},"compId":44,"child":[{"type":"VBox","props":{"y":0,"x":0,"width":720,"var":"vs","space":25,"align":"left"},"compId":29}]},{"type":"Panel","props":{"x":0,"width":720,"height":150,"hScrollBarSkin":"comp/vscroll.png","bottom":0},"compId":45,"child":[{"type":"Box","props":{"x":0,"var":"tab","height":150},"compId":35,"child":[{"type":"Button","props":{"y":0,"x":0,"toggle":true,"skin":"comp/tab.png","selected":true,"labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"认识人物"},"compId":42,"child":[{"type":"Sprite","props":{"y":8,"x":25,"texture":"comp/ren.png","mouseEnabled":false},"compId":43}]},{"type":"Button","props":{"y":0,"x":150,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"动物声音"},"compId":40,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/anim.png","height":100,"disabled":true},"compId":41}]},{"type":"Button","props":{"y":0,"x":300,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"水果蔬菜"},"compId":36,"child":[{"type":"Sprite","props":{"y":8,"x":25,"texture":"comp/bru.png","mouseEnabled":false},"compId":37}]},{"type":"Button","props":{"y":0,"x":450,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"交通工具"},"compId":38,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/car.png","mouseEnabled":false,"height":100},"compId":39}]},{"type":"Button","props":{"y":0,"x":600,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"名称识图"},"compId":46,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/game1.png","mouseEnabled":false,"height":100},"compId":47}]},{"type":"Button","props":{"y":0,"x":750,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"看图辨声"},"compId":48,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/game2.png","mouseEnabled":false,"height":100},"compId":49}]},{"type":"Button","props":{"y":0,"x":900,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"听声识图"},"compId":50,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/game3.png","mouseEnabled":false,"height":100},"compId":51}]}]}]}],"loadList":["comp/vscroll.png","comp/tab.png","comp/ren.png","comp/anim.png","comp/bru.png","comp/car.png","comp/game1.png","comp/game2.png","comp/game3.png"],"loadList3D":[]};
        public referenceClass:Array<any>=[Panel, VBox, Box, View, Button, 
				Sprite]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(PicListUI.uiView);
        }
    }
    REG("ui.PicListUI",PicListUI);
    export class PicToVoiceUI extends View {
        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"loadList":[],"loadList3D":[]};
        public referenceClass:Array<any>=[View]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(PicToVoiceUI.uiView);
        }
    }
    REG("ui.PicToVoiceUI",PicToVoiceUI);
    export class VoiceToPicUI extends View {
        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"loadList":[],"loadList3D":[]};
        public referenceClass:Array<any>=[View]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(VoiceToPicUI.uiView);
        }
    }
    REG("ui.VoiceToPicUI",VoiceToPicUI);
}
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import { Scene } from "laya/display/Scene";
import { ClassUtils } from "laya/utils/ClassUtils";
var REG: Function = ClassUtils.regClass;
import { Image } from "laya/ui/Image";
import { Label } from "laya/ui/Label";
import { Button } from "laya/ui/Button";
import { View } from "laya/ui/View";
import { Panel } from "laya/ui/Panel";
import { VBox } from "laya/ui/VBox";
import { Box } from "laya/ui/Box";
import { Sprite } from "laya/display/Sprite";
export module ui {
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
        public static  uiView:any ={"type":"View","props":{"width":720,"runtime":"script/GameUI.ts","height":1440},"compId":1,"child":[{"type":"Panel","props":{"x":0,"width":720,"var":"panel","vScrollBarSkin":"comp/vscroll.png","top":0,"bottom":150},"compId":44,"child":[{"type":"VBox","props":{"y":0,"x":0,"width":720,"var":"vs","space":25,"align":"left"},"compId":29}]},{"type":"Box","props":{"width":600,"var":"tab","height":150,"centerX":0,"bottom":0},"compId":35,"child":[{"type":"Button","props":{"y":0,"x":0,"toggle":true,"skin":"comp/tab.png","selected":true,"labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"认识人物"},"compId":42,"child":[{"type":"Sprite","props":{"y":8,"x":25,"texture":"comp/ren.png","mouseEnabled":false},"compId":43}]},{"type":"Button","props":{"y":0,"x":150,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"动物声音"},"compId":40,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/anim.png","height":100,"disabled":true},"compId":41}]},{"type":"Button","props":{"y":0,"x":300,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"水果蔬菜"},"compId":36,"child":[{"type":"Sprite","props":{"y":8,"x":25,"texture":"comp/bru.png","mouseEnabled":false},"compId":37}]},{"type":"Button","props":{"y":0,"x":450,"toggle":true,"skin":"comp/tab.png","labelSize":20,"labelPadding":"50","labelFont":"SimHei","labelColors":"#000000,#000000,#ffffff","label":"交通工具"},"compId":38,"child":[{"type":"Sprite","props":{"y":8,"x":25,"width":100,"texture":"comp/car.png","mouseEnabled":false,"height":100},"compId":39}]}]}],"loadList":["comp/vscroll.png","comp/tab.png","comp/ren.png","comp/anim.png","comp/bru.png","comp/car.png"],"loadList3D":[]};
        public referenceClass:Array<any>=[Panel, VBox, Box, View, Button, 
				Sprite]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(PicListUI.uiView);
        }
    }
    REG("ui.PicListUI",PicListUI);
}
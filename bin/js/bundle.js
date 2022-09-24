window.Laya=window.Laya||{};

(function (Laya) {
    'use strict';

    class GameUI extends Laya.Script {
        constructor() {
            super();
            this.intType = 1000;
            this.numType = 1000;
            this.strType = "hello laya";
            this.boolType = true;
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        class NameToPicUI extends Laya.View {
            constructor() {
                super();
                this.referenceClass = [Laya.Button, Laya.List, Laya.Box, Laya.Image, Laya.View,
                ];
            }
            createChildren() {
                super.createChildren();
                this.createView(NameToPicUI.uiView);
            }
        }
        NameToPicUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 6 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 7 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 5 }, { "type": "Button", "props": { "y": 471, "x": 45, "width": 379, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "苹果", "height": 89, "bottom": 40 }, "compId": 4 }, { "type": "List", "props": { "var": "list", "top": 180, "spaceY": 4, "spaceX": 4, "selectEnable": true, "right": 0, "repeatY": 2, "repeatX": 2, "left": 0, "bottom": 160 }, "compId": 11 }, { "type": "Box", "props": { "var": "bigBox", "top": 180, "right": 10, "left": 10, "bottom": 160 }, "compId": 12, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 13 }] }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
        ui.NameToPicUI = NameToPicUI;
        REG("ui.NameToPicUI", NameToPicUI);
        class PicItemUI extends Laya.View {
            constructor() {
                super();
                this.referenceClass = [Laya.Image, Laya.Label, Laya.Button, Laya.View];
            }
            createChildren() {
                super.createChildren();
                this.createView(PicItemUI.uiView);
            }
        }
        PicItemUI.uiView = { "type": "View", "props": { "width": 720, "height": 520 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "bg", "skin": "comp/img_bg.png", "sizeGrid": "109,57,22,50", "name": "bg", "height": 520 }, "compId": 3 }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 720, "var": "img", "name": "img", "mouseEnabled": true, "height": 420 }, "compId": 4 }, { "type": "Label", "props": { "y": 17, "width": 187, "var": "txtName", "valign": "middle", "text": "苹果", "name": "txtName", "height": 71, "fontSize": 60, "font": "SimHei", "color": "#ffffff", "centerX": 0, "align": "center" }, "compId": 5 }, { "type": "Button", "props": { "y": 111, "var": "btnVoice", "stateNum": 1, "skin": "comp/voice.png", "right": 13, "name": "btnVoice" }, "compId": 7 }, { "type": "Button", "props": { "y": 22, "x": 17, "visible": false, "var": "btnDIY", "stateNum": 1, "skin": "comp/btnDIY.png", "name": "btnDIY" }, "compId": 8 }], "loadList": ["comp/img_bg.png", "comp/voice.png", "comp/btnDIY.png"], "loadList3D": [] };
        ui.PicItemUI = PicItemUI;
        REG("ui.PicItemUI", PicItemUI);
        class PicListUI extends Laya.View {
            constructor() {
                super();
                this.referenceClass = [Laya.Panel, Laya.VBox, Laya.Box, Laya.View, Laya.Button,
                    Laya.Sprite];
            }
            createChildren() {
                super.createChildren();
                this.createView(PicListUI.uiView);
            }
        }
        PicListUI.uiView = { "type": "View", "props": { "width": 720, "runtime": "script/GameUI.ts", "height": 1440 }, "compId": 1, "child": [{ "type": "Panel", "props": { "x": 0, "width": 720, "var": "panel", "vScrollBarSkin": "comp/vscroll.png", "top": 0, "bottom": 150 }, "compId": 44, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 720, "var": "vs", "space": 25, "align": "left" }, "compId": 29 }] }, { "type": "Panel", "props": { "x": 0, "width": 720, "var": "tabPanel", "height": 150, "hScrollBarSkin": "comp/vscroll.png", "elasticEnabled": true, "bottom": 0 }, "compId": 45, "child": [{ "type": "Box", "props": { "x": 0, "width": 1050, "var": "tab", "height": 150 }, "compId": 35, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "toggle": true, "skin": "comp/tab.png", "selected": true, "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "认识人物" }, "compId": 42, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/ren.png", "mouseEnabled": false }, "compId": 43 }] }, { "type": "Button", "props": { "y": 0, "x": 150, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "动物声音" }, "compId": 40, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/anim.png", "height": 100, "disabled": true }, "compId": 41 }] }, { "type": "Button", "props": { "y": 0, "x": 300, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "水果蔬菜" }, "compId": 36, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/bru.png", "mouseEnabled": false }, "compId": 37 }] }, { "type": "Button", "props": { "y": 0, "x": 450, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "交通工具" }, "compId": 38, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/car.png", "mouseEnabled": false, "height": 100 }, "compId": 39 }] }, { "type": "Button", "props": { "y": 0, "x": 600, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "名称识图" }, "compId": 46, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game1.png", "mouseEnabled": false, "height": 100 }, "compId": 47 }] }, { "type": "Button", "props": { "y": 0, "x": 750, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "听声识图" }, "compId": 48, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game2.png", "mouseEnabled": false, "height": 100 }, "compId": 49 }] }, { "type": "Button", "props": { "y": 0, "x": 900, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "看图辨声" }, "compId": 50, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game3.png", "mouseEnabled": false, "height": 100 }, "compId": 51 }] }] }] }], "loadList": ["comp/vscroll.png", "comp/tab.png", "comp/ren.png", "comp/anim.png", "comp/bru.png", "comp/car.png", "comp/game1.png", "comp/game2.png", "comp/game3.png"], "loadList3D": [] };
        ui.PicListUI = PicListUI;
        REG("ui.PicListUI", PicListUI);
        class PicToVoiceUI extends Laya.View {
            constructor() {
                super();
                this.referenceClass = [Laya.Box, Laya.Image, Laya.Button, Laya.View];
            }
            createChildren() {
                super.createChildren();
                this.createView(PicToVoiceUI.uiView);
            }
        }
        PicToVoiceUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 700, "var": "bigBox", "top": 180, "right": 10, "left": 10, "bottom": 400 }, "compId": 9, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 10 }] }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 7 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 8 }, { "type": "Button", "props": { "width": 224, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "height": 89, "centerX": 0, "bottom": 403 }, "compId": 11 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 12 }, { "type": "Button", "props": { "x": 45, "width": 379, "var": "btnSubmit", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "确定选择", "height": 89, "bottom": 40 }, "compId": 13 }, { "type": "Button", "props": { "x": 45, "width": 289, "var": "v3", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "3", "height": 89, "bottom": 159 }, "compId": 14 }, { "type": "Button", "props": { "width": 287, "var": "v4", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "4", "height": 89, "bottom": 159 }, "compId": 15 }, { "type": "Button", "props": { "x": 45, "width": 289, "var": "v1", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "1", "height": 89, "bottom": 279 }, "compId": 16 }, { "type": "Button", "props": { "width": 287, "var": "v2", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "2", "height": 89, "bottom": 279 }, "compId": 17 }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
        ui.PicToVoiceUI = PicToVoiceUI;
        REG("ui.PicToVoiceUI", PicToVoiceUI);
        class VoiceToPicUI extends Laya.View {
            constructor() {
                super();
                this.referenceClass = [Laya.Box, Laya.Image, Laya.List, Laya.Button, Laya.View,
                ];
            }
            createChildren() {
                super.createChildren();
                this.createView(VoiceToPicUI.uiView);
            }
        }
        VoiceToPicUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "x": 10, "width": 700, "var": "bigBox", "top": 180, "right": 10, "left": 10, "height": 190, "bottom": 160 }, "compId": 8, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 9 }] }, { "type": "List", "props": { "x": 0, "var": "list", "top": 180, "spaceY": 4, "spaceX": 4, "selectEnable": true, "right": 0, "repeatY": 2, "repeatX": 2, "left": 0, "bottom": 160 }, "compId": 7 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 3 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 4 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 5 }, { "type": "Button", "props": { "x": 45, "width": 379, "var": "btnVoice", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "谁的声音", "height": 89, "bottom": 40 }, "compId": 6 }, { "type": "Button", "props": { "width": 224, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "height": 89, "centerX": 0, "bottom": 161 }, "compId": 11 }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
        ui.VoiceToPicUI = VoiceToPicUI;
        REG("ui.VoiceToPicUI", VoiceToPicUI);
    })(ui || (ui = {}));

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("ui", ui);
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 720;
    GameConfig.height = 1440;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "PicList.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class DataManager {
    }
    DataManager.nameToPicNum = { zq: 0, cw: 0 };
    DataManager.voiceToPicNum = { zq: 0, cw: 0 };
    DataManager.picToVoiceNum = { zq: 0, cw: 0 };

    var REG$1 = Laya.ClassUtils.regClass;
    class NameToPicUI extends Laya.View {
        constructor() {
            super();
            this.referenceClass = [Laya.Button, Laya.List, Laya.Box, Laya.Image, Laya.View,
            ];
        }
        createChildren() {
            super.createChildren();
            this.createView(NameToPicUI.uiView);
        }
    }
    NameToPicUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 6 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 7 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 5 }, { "type": "Button", "props": { "y": 471, "x": 45, "width": 379, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "苹果", "height": 89, "bottom": 40 }, "compId": 4 }, { "type": "List", "props": { "var": "list", "top": 180, "spaceY": 4, "spaceX": 4, "selectEnable": true, "right": 0, "repeatY": 2, "repeatX": 2, "left": 0, "bottom": 160 }, "compId": 11 }, { "type": "Box", "props": { "var": "bigBox", "top": 180, "right": 10, "left": 10, "bottom": 160 }, "compId": 12, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 13 }] }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
    REG$1("ui.NameToPicUI", NameToPicUI);
    class PicItemUI extends Laya.View {
        constructor() {
            super();
            this.referenceClass = [Laya.Image, Laya.Label, Laya.Button, Laya.View];
        }
        createChildren() {
            super.createChildren();
            this.createView(PicItemUI.uiView);
        }
    }
    PicItemUI.uiView = { "type": "View", "props": { "width": 720, "height": 520 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "bg", "skin": "comp/img_bg.png", "sizeGrid": "109,57,22,50", "name": "bg", "height": 520 }, "compId": 3 }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 720, "var": "img", "name": "img", "mouseEnabled": true, "height": 420 }, "compId": 4 }, { "type": "Label", "props": { "y": 17, "width": 187, "var": "txtName", "valign": "middle", "text": "苹果", "name": "txtName", "height": 71, "fontSize": 60, "font": "SimHei", "color": "#ffffff", "centerX": 0, "align": "center" }, "compId": 5 }, { "type": "Button", "props": { "y": 111, "var": "btnVoice", "stateNum": 1, "skin": "comp/voice.png", "right": 13, "name": "btnVoice" }, "compId": 7 }, { "type": "Button", "props": { "y": 22, "x": 17, "visible": false, "var": "btnDIY", "stateNum": 1, "skin": "comp/btnDIY.png", "name": "btnDIY" }, "compId": 8 }], "loadList": ["comp/img_bg.png", "comp/voice.png", "comp/btnDIY.png"], "loadList3D": [] };
    REG$1("ui.PicItemUI", PicItemUI);
    class PicListUI extends Laya.View {
        constructor() {
            super();
            this.referenceClass = [Laya.Panel, Laya.VBox, Laya.Box, Laya.View, Laya.Button,
                Laya.Sprite];
        }
        createChildren() {
            super.createChildren();
            this.createView(PicListUI.uiView);
        }
    }
    PicListUI.uiView = { "type": "View", "props": { "width": 720, "runtime": "script/GameUI.ts", "height": 1440 }, "compId": 1, "child": [{ "type": "Panel", "props": { "x": 0, "width": 720, "var": "panel", "vScrollBarSkin": "comp/vscroll.png", "top": 0, "bottom": 150 }, "compId": 44, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 720, "var": "vs", "space": 25, "align": "left" }, "compId": 29 }] }, { "type": "Panel", "props": { "x": 0, "width": 720, "var": "tabPanel", "height": 150, "hScrollBarSkin": "comp/vscroll.png", "elasticEnabled": true, "bottom": 0 }, "compId": 45, "child": [{ "type": "Box", "props": { "x": 0, "width": 1050, "var": "tab", "height": 150 }, "compId": 35, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "toggle": true, "skin": "comp/tab.png", "selected": true, "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "认识人物" }, "compId": 42, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/ren.png", "mouseEnabled": false }, "compId": 43 }] }, { "type": "Button", "props": { "y": 0, "x": 150, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "动物声音" }, "compId": 40, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/anim.png", "height": 100, "disabled": true }, "compId": 41 }] }, { "type": "Button", "props": { "y": 0, "x": 300, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "水果蔬菜" }, "compId": 36, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/bru.png", "mouseEnabled": false }, "compId": 37 }] }, { "type": "Button", "props": { "y": 0, "x": 450, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "交通工具" }, "compId": 38, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/car.png", "mouseEnabled": false, "height": 100 }, "compId": 39 }] }, { "type": "Button", "props": { "y": 0, "x": 600, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "名称识图" }, "compId": 46, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game1.png", "mouseEnabled": false, "height": 100 }, "compId": 47 }] }, { "type": "Button", "props": { "y": 0, "x": 750, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "听声识图" }, "compId": 48, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game2.png", "mouseEnabled": false, "height": 100 }, "compId": 49 }] }, { "type": "Button", "props": { "y": 0, "x": 900, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "看图辨声" }, "compId": 50, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/game3.png", "mouseEnabled": false, "height": 100 }, "compId": 51 }] }] }] }], "loadList": ["comp/vscroll.png", "comp/tab.png", "comp/ren.png", "comp/anim.png", "comp/bru.png", "comp/car.png", "comp/game1.png", "comp/game2.png", "comp/game3.png"], "loadList3D": [] };
    REG$1("ui.PicListUI", PicListUI);
    class PicToVoiceUI extends Laya.View {
        constructor() {
            super();
            this.referenceClass = [Laya.Box, Laya.Image, Laya.Button, Laya.View];
        }
        createChildren() {
            super.createChildren();
            this.createView(PicToVoiceUI.uiView);
        }
    }
    PicToVoiceUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "width": 700, "var": "bigBox", "top": 180, "right": 10, "left": 10, "bottom": 400 }, "compId": 9, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 10 }] }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 7 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 8 }, { "type": "Button", "props": { "width": 224, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "height": 89, "centerX": 0, "bottom": 403 }, "compId": 11 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 12 }, { "type": "Button", "props": { "x": 45, "width": 379, "var": "btnSubmit", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "确定选择", "height": 89, "bottom": 40 }, "compId": 13 }, { "type": "Button", "props": { "x": 45, "width": 289, "var": "v3", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "3", "height": 89, "bottom": 159 }, "compId": 14 }, { "type": "Button", "props": { "width": 287, "var": "v4", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "4", "height": 89, "bottom": 159 }, "compId": 15 }, { "type": "Button", "props": { "x": 45, "width": 289, "var": "v1", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "1", "height": 89, "bottom": 279 }, "compId": 16 }, { "type": "Button", "props": { "width": 287, "var": "v2", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "2", "height": 89, "bottom": 279 }, "compId": 17 }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
    REG$1("ui.PicToVoiceUI", PicToVoiceUI);
    class VoiceToPicUI extends Laya.View {
        constructor() {
            super();
            this.referenceClass = [Laya.Box, Laya.Image, Laya.List, Laya.Button, Laya.View,
            ];
        }
        createChildren() {
            super.createChildren();
            this.createView(VoiceToPicUI.uiView);
        }
    }
    VoiceToPicUI.uiView = { "type": "View", "props": { "width": 720, "top": 0, "bottom": 0 }, "compId": 2, "child": [{ "type": "Box", "props": { "x": 10, "width": 700, "var": "bigBox", "top": 180, "right": 10, "left": 10, "height": 190, "bottom": 160 }, "compId": 8, "child": [{ "type": "Image", "props": { "var": "bigImg", "centerY": 0, "centerX": 0 }, "compId": 9 }] }, { "type": "List", "props": { "x": 0, "var": "list", "top": 180, "spaceY": 4, "spaceX": 4, "selectEnable": true, "right": 0, "repeatY": 2, "repeatX": 2, "left": 0, "bottom": 160 }, "compId": 7 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblzq", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 60, "mouseEnabled": false, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "正确：0", "height": 89 }, "compId": 3 }, { "type": "Button", "props": { "y": 80, "width": 260, "var": "lblcuo", "stateNum": 1, "skin": "comp/btn_2.png", "sizeGrid": "0,50,0,50", "mouseEnabled": false, "left": 60, "labelSize": 35, "labelColors": "#000000,#000000,#ffffff", "label": "错误：0", "height": 89 }, "compId": 4 }, { "type": "Button", "props": { "width": 211, "var": "btnNext", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "right": 45, "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "下一题", "height": 89, "bottom": 40 }, "compId": 5 }, { "type": "Button", "props": { "x": 45, "width": 379, "var": "btnVoice", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "谁的声音", "height": 89, "bottom": 40 }, "compId": 6 }, { "type": "Button", "props": { "width": 224, "var": "btnName", "stateNum": 1, "skin": "comp/btn_1.png", "sizeGrid": "0,50,0,50", "labelSize": 40, "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "height": 89, "centerX": 0, "bottom": 161 }, "compId": 11 }], "loadList": ["comp/btn_1.png", "comp/btn_2.png"], "loadList3D": [] };
    REG$1("ui.VoiceToPicUI", VoiceToPicUI);

    class GameControl {
        constructor() {
            this.preNameToPic = {};
            this.voiceToPicPool = [1, 3];
        }
        static get instance() {
            if (!GameControl._instance) {
                GameControl._instance = new GameControl();
            }
            return GameControl._instance;
        }
        getOneNameToPicByType() {
            var type = Math.floor(Math.random() * 4);
            var dic = DataManager.jsonData;
            var arr = dic[type];
            var temp = arr.concat();
            var returnArr = [];
            for (var i = 0; i < 4; i++) {
                var indx = Math.floor(temp.length * Math.random());
                if (i == 0) {
                    while (type == this.preNameToPic.type && indx == this.preNameToPic.index) {
                        indx = Math.floor(temp.length * Math.random());
                    }
                    this.preNameToPic.type = type;
                    this.preNameToPic.index = indx;
                }
                var a1 = temp.splice(indx, 1);
                returnArr.push(a1[0]);
            }
            return returnArr;
        }
        getOneVoiceToPicByType() {
            var type = this.voiceToPicPool[Math.floor(Math.random() * 2)];
            var dic = DataManager.jsonData;
            var arr = dic[type];
            var temp = arr.concat();
            var returnArr = [];
            for (var i = 0; i < 4; i++) {
                var indx = Math.floor(temp.length * Math.random());
                if (i == 0) {
                    while (type == this.preNameToPic.type && indx == this.preNameToPic.index) {
                        indx = Math.floor(temp.length * Math.random());
                    }
                    this.preNameToPic.type = type;
                    this.preNameToPic.index = indx;
                }
                var a1 = temp.splice(indx, 1);
                returnArr.push(a1[0]);
            }
            return returnArr;
        }
    }

    class PicToVoice extends PicToVoiceUI {
        constructor() {
            super();
            this.allBtn = [this.v1, this.v2, this.v3, this.v4];
            this.on(Laya.Event.DISPLAY, this, this.onAddtoStage);
            this.btnName.on(Laya.Event.CLICK, this, this.sayName);
            this.btnNext.on(Laya.Event.CLICK, this, this.onPlayNext);
            this.v1.on(Laya.Event.CLICK, this, this.onPlayVoice);
            this.v2.on(Laya.Event.CLICK, this, this.onPlayVoice);
            this.v3.on(Laya.Event.CLICK, this, this.onPlayVoice);
            this.v4.on(Laya.Event.CLICK, this, this.onPlayVoice);
            this.btnSubmit.on(Laya.Event.CLICK, this, this.onClick);
        }
        onAddtoStage() {
            var arr = GameControl.instance.getOneVoiceToPicByType();
            this.firstVO = arr[0];
            this.sayName();
            this.btnName.label = this.firstVO.name;
            this.bigImg.skin = this.firstVO.img;
            if (this.bigImg.source) {
                var bmpscal = this.bigImg.source.width / this.bigImg.source.height;
                var boxscal = this.bigBox.width / this.bigBox.height;
                if (bmpscal > boxscal) {
                    this.bigImg.width = this.bigBox.width;
                    this.bigImg.height = this.bigImg.width / bmpscal;
                }
                else {
                    this.bigImg.height = this.bigBox.height;
                    this.bigImg.width = this.bigImg.height * bmpscal;
                }
            }
            for (var i = 0; i < 4; i++) {
                var index = Math.floor(arr.length * Math.random());
                var btn = this["v" + (i + 1)];
                btn.visible = true;
                btn.skin = "comp/btn_1.png";
                btn.dataSource = arr.splice(index, 1)[0];
            }
        }
        onClick() {
            if (this.selectBtn.dataSource == this.firstVO) {
                this.lblzq.label = "正确：" + ++DataManager.picToVoiceNum.zq;
                for (var button of this.allBtn) {
                    if (button != this.selectBtn) {
                        button.visible = false;
                    }
                }
                Laya.SoundManager.playSound("res/sound/duile.mp3");
            }
            else {
                this.lblcuo.label = "错误：" + ++DataManager.picToVoiceNum.cw;
                Laya.SoundManager.playSound("res/sound/budui.mp3");
            }
        }
        sayName() {
            Laya.SoundManager.playSound(this.firstVO.sound);
        }
        onPlayVoice(e) {
            var btn = this.selectBtn = e.currentTarget;
            for (var button of this.allBtn) {
                if (button == btn) {
                    button.skin = "comp/btn_2.png";
                }
                else {
                    button.skin = "comp/btn_1.png";
                }
            }
            Laya.SoundManager.playSound(btn.dataSource.voice);
        }
        onPlayNext() {
            this.onAddtoStage();
        }
    }

    class GamePicItem extends Laya.Box {
        constructor() {
            super();
            this.img = new Laya.Image();
            this.img.centerX = 0;
            this.img.centerY = 0;
            this.img.on(Laya.Event.LOADED, this, this.onLoaded);
            this.addChild(this.img);
            this.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onResize() {
            if (this.img.source) {
                var bmpscal = this.img.source.width / this.img.source.height;
                var boxscal = this.width / this.height;
                if (bmpscal > boxscal) {
                    this.img.width = this.width;
                    this.img.height = this.img.width / bmpscal;
                }
                else {
                    this.img.height = this.height;
                    this.img.width = this.img.height * bmpscal;
                }
            }
        }
        onLoaded() {
            this.onResize();
        }
        set dataSource(val) {
            this.img.skin = val.img;
            this.visible = true;
        }
    }

    class VoiceToPic extends VoiceToPicUI {
        constructor() {
            super();
            this.list.itemRender = GamePicItem;
            this.list.renderHandler = new Laya.Handler(this, this.onRender);
            this.on(Laya.Event.DISPLAY, this, this.onAddtoStage);
            this.btnVoice.on(Laya.Event.CLICK, this, this.onPlayVoice);
            this.btnNext.on(Laya.Event.CLICK, this, this.onPlayNext);
            this.list.on(Laya.Event.RESIZE, this, this.onResize);
            this.btnName.on(Laya.Event.CLICK, this, this.onPlayNameSound);
        }
        onAddtoStage() {
            this.bigImg.visible = false;
            this.list.visible = true;
            this.btnName.visible = false;
            var arr = GameControl.instance.getOneVoiceToPicByType();
            this.firstVO = arr[0];
            this.onPlayVoice();
            this.dataArr = [];
            for (var i = 0; i < 4; i++) {
                var index = Math.floor(arr.length * Math.random());
                this.dataArr.push(arr.splice(index, 1)[0]);
            }
            this.list.dataSource = this.dataArr;
        }
        onClick(index) {
            if (this.dataArr[index] == this.firstVO) {
                this.lblzq.label = "正确：" + ++DataManager.voiceToPicNum.zq;
                this.bigImg.x = this.list.x;
                this.bigImg.y = this.list.y;
                this.bigImg.skin = this.firstVO.img;
                this.bigImg.visible = true;
                this.list.visible = false;
                if (this.bigImg.source) {
                    var bmpscal = this.bigImg.source.width / this.bigImg.source.height;
                    var boxscal = this.bigBox.width / this.bigBox.height;
                    if (bmpscal > boxscal) {
                        this.bigImg.width = this.bigBox.width;
                        this.bigImg.height = this.bigImg.width / bmpscal;
                    }
                    else {
                        this.bigImg.height = this.bigBox.height;
                        this.bigImg.width = this.bigImg.height * bmpscal;
                    }
                }
                this.btnName.visible = true;
                this.btnName.label = this.firstVO.name;
                Laya.SoundManager.playSound("res/sound/duile.mp3");
                Laya.Laya.timer.once(900, this, this.onPlayNameSound);
            }
            else {
                this.lblcuo.label = "错误：" + ++DataManager.voiceToPicNum.cw;
                Laya.SoundManager.playSound("res/sound/budui.mp3");
            }
        }
        onPlayVoice() {
            Laya.SoundManager.playSound(this.firstVO.voice);
        }
        onPlayNameSound() {
            Laya.SoundManager.playSound(this.firstVO.sound);
        }
        onPlayNext() {
            this.onAddtoStage();
        }
        onRender(cell, index) {
            var w = Math.floor((this.list.width - this.list.spaceX) / 2);
            var h = Math.floor((this.list.height - this.list.spaceY) / 2);
            cell.width = w;
            cell.height = h;
            cell.on(Laya.Event.CLICK, this, this.onClick, [index]);
        }
        onResize() {
            var w = Math.floor((this.list.width - this.list.spaceX) / 2);
            var h = Math.floor((this.list.height - this.list.spaceY) / 2);
            for (var i = 0; i < 4; i++) {
                var cell = this.list.getCell(i);
                cell.width = w;
                cell.height = h;
            }
        }
    }

    class NameToPic extends NameToPicUI {
        constructor() {
            super();
            this.list.itemRender = GamePicItem;
            this.list.renderHandler = new Laya.Handler(this, this.onRender);
            this.on(Laya.Event.DISPLAY, this, this.onAddtoStage);
            this.btnName.on(Laya.Event.CLICK, this, this.onSayName);
            this.btnNext.on(Laya.Event.CLICK, this, this.onPlayNext);
            this.list.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onAddtoStage() {
            this.bigImg.visible = false;
            this.list.visible = true;
            var arr = GameControl.instance.getOneNameToPicByType();
            this.btnName.label = arr[0].name;
            this.firstVO = arr[0];
            this.onSayName();
            this.dataArr = [];
            for (var i = 0; i < 4; i++) {
                var index = Math.floor(arr.length * Math.random());
                this.dataArr.push(arr.splice(index, 1)[0]);
            }
            this.list.dataSource = this.dataArr;
        }
        onClick(index) {
            if (this.dataArr[index] == this.firstVO) {
                this.lblzq.label = "正确：" + ++DataManager.nameToPicNum.zq;
                this.bigImg.x = this.list.x;
                this.bigImg.y = this.list.y;
                this.bigImg.skin = this.firstVO.img;
                this.bigImg.visible = true;
                this.list.visible = false;
                if (this.bigImg.source) {
                    var bmpscal = this.bigImg.source.width / this.bigImg.source.height;
                    var boxscal = this.bigBox.width / this.bigBox.height;
                    if (bmpscal > boxscal) {
                        this.bigImg.width = this.bigBox.width;
                        this.bigImg.height = this.bigImg.width / bmpscal;
                    }
                    else {
                        this.bigImg.height = this.bigBox.height;
                        this.bigImg.width = this.bigImg.height * bmpscal;
                    }
                }
                Laya.SoundManager.playSound("res/sound/duile.mp3");
            }
            else {
                this.lblcuo.label = "错误：" + ++DataManager.nameToPicNum.cw;
                Laya.SoundManager.playSound("res/sound/budui.mp3");
            }
        }
        onSayName() {
            Laya.SoundManager.playSound(this.firstVO.sound);
        }
        onPlayNext() {
            this.onAddtoStage();
        }
        onRender(cell, index) {
            var w = Math.floor((this.list.width - this.list.spaceX) / 2);
            var h = Math.floor((this.list.height - this.list.spaceY) / 2);
            cell.width = w;
            cell.height = h;
            cell.on(Laya.Event.CLICK, this, this.onClick, [index]);
        }
        onResize() {
            var w = Math.floor((this.list.width - this.list.spaceX) / 2);
            var h = Math.floor((this.list.height - this.list.spaceY) / 2);
            for (var i = 0; i < 4; i++) {
                var cell = this.list.getCell(i);
                cell.width = w;
                cell.height = h;
            }
        }
    }

    class PicItem extends PicItemUI {
        constructor() {
            super();
            this.canPlay = true;
            this.img.on(Laya.Event.LOADED, this, this.onImgloaded);
            this.on(Laya.Event.CLICK, this, this.onMouseHandler);
            this.btnVoice.on(Laya.Event.CLICK, this, this.onVoice);
        }
        set data(params) {
            this._data = params;
            this.btnVoice.visible = this.data.voice;
        }
        get data() {
            return this._data;
        }
        display() {
            this.txtName.text = this.data.name;
            this.img.skin = this.data.img;
            this.isDisplay = true;
        }
        onImgloaded() {
            var bmpd = this.img.source;
            var scalx = this.img.width / bmpd.width;
            var cellH = Math.ceil(bmpd.height * scalx);
            this.img.height = cellH;
            this.bg.height = this.height = cellH + 100;
        }
        onMouseHandler(e) {
            if (this.canPlay && e.target.name.indexOf("btn") < 0 && this.data.sound) {
                Laya.SoundManager.playSound(this.data.sound);
                this.canPlay = false;
                Laya.Laya.timer.loop(600, this, this.onReset);
            }
        }
        onVoice() {
            if (this.canPlay && this.data.voice) {
                Laya.SoundManager.playSound(this.data.voice);
                this.canPlay = false;
                Laya.Laya.timer.loop(600, this, this.onReset);
            }
        }
        onReset() {
            this.canPlay = true;
            Laya.Laya.timer.clear(this, this.onReset);
        }
    }

    class PicList extends PicListUI {
        constructor() {
            super();
            this.preSelectIndex = 0;
            PicList.instance = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        createChildren() {
            super.createChildren();
            this.tab.on(Laya.Event.CLICK, this, this.onTabclick);
            this.panel.vScrollBar.visible = false;
            this.tabPanel.hScrollBar.visible = false;
            this.panel.vScrollBar.changeHandler = new Laya.Handler(this, this.onChange);
            this.topspace = new Laya.UIComponent();
            this.topspace.width = this.topspace.height = 50;
            this.on(Laya.Event.DISPLAY, this, this.onDisplay);
            this.on(Laya.Event.UNDISPLAY, this, this.onUnDisplay);
        }
        onDisplay() {
            this.onResize();
            Laya.Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onUnDisplay() {
            Laya.Laya.stage.off(Laya.Event.RESIZE, this, this.onResize);
        }
        onResize() {
            this.height = Laya.Laya.stage.height;
        }
        onTabclick(e) {
            var btn = e.target;
            this.selectedIndex = this.tab.getChildIndex(btn);
        }
        set dataSource(value) {
            this._dataSource = value;
            this.selectedIndex = 0;
        }
        set selectedIndex(value) {
            this._selectedIndex = value;
            var btn = this.tab.getChildAt(this.preSelectIndex);
            btn.selected = false;
            btn = this.tab.getChildAt(value);
            btn.selected = true;
            this.preSelectIndex = value;
            this.onTabSelect(value);
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        onTabSelect(index) {
            if (index < 3)
                this.tabPanel.hScrollBar.value = 0;
            else if (index > 3)
                this.tabPanel.hScrollBar.value = this.tabPanel.hScrollBar.max;
            this.panel.vScrollBar.stopScroll();
            this.panel.vScrollBar.value = 0;
            this.vs.removeChildren();
            this.removeAllGame();
            if (index >= 4) {
                this.onTabToGame(index);
            }
            else {
                var arr = this._dataSource[index];
                this.vs.addChild(this.topspace);
                for (var i = 0, len = arr.length; i < len; i++) {
                    var item = new PicItem();
                    item.data = arr[i];
                    item.btnDIY.visible = true;
                    item.btnDIY.on(Laya.Event.CLICK, this, this.onDIY, [i]);
                    this.vs.addChild(item);
                    if (i < 4)
                        item.display();
                }
            }
        }
        onChange(value) {
            var len = this.vs.numChildren;
            for (var i = 1; i < len; i++) {
                var item = this.vs.getChildAt(i);
                if (!item.isDisplay && item.y < this.panel.height + this.panel.vScrollBar.value + 400)
                    item.display();
            }
        }
        onDIY(i) {
            var the = this;
            if (window["wx"] && window["wx"].chooseImage) {
                window["wx"].chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function (res) {
                        var tempFilePath = res.tempFilePaths[0];
                        the.vs.getChildAt(i + 1).img.skin = tempFilePath;
                        DataManager.jsonData[the.selectedIndex + ""][i].img = tempFilePath;
                        var str = JSON.stringify(DataManager.jsonData);
                        if (str) {
                            window["wx"].setStorage({
                                key: "jsonData",
                                data: "" + str
                            });
                        }
                    }
                });
            }
        }
        onTabToGame(index) {
            switch (index) {
                case 4:
                    if (!this.nameToPic) {
                        this.nameToPic = new NameToPic();
                    }
                    this.panel.addChild(this.nameToPic);
                    break;
                case 5:
                    if (!this.voiceToPic) {
                        this.voiceToPic = new VoiceToPic();
                    }
                    this.panel.addChild(this.voiceToPic);
                    break;
                case 6:
                    if (!this.picToVoice) {
                        this.picToVoice = new PicToVoice();
                    }
                    this.panel.addChild(this.picToVoice);
                    break;
            }
        }
        removeAllGame() {
            if (this.nameToPic)
                this.nameToPic.removeSelf();
            if (this.voiceToPic)
                this.voiceToPic.removeSelf();
            if (this.picToVoice)
                this.picToVoice.removeSelf();
        }
    }

    class Main {
        constructor() {
            if (Laya.Laya.Browser.window.clearAll)
                Laya.Laya.Browser.window.clearAll();
            if (window["Laya3D"])
                window["Laya3D"].init(GameConfig.width, GameConfig.height);
            else
                Laya.Laya.init(GameConfig.width, GameConfig.height, Laya.WebGL);
            Laya.Laya["DebugPanel"] && Laya.Laya["DebugPanel"].enable();
            Laya.Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.Laya.stage.screenMode = GameConfig.screenMode;
            Laya.Laya.stage.alignV = GameConfig.alignV;
            Laya.Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.Laya.enableDebugPanel();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            if (window["wx"]) {
                try {
                    var value = window["wx"].getStorageSync('jsonData');
                    if (value) {
                        DataManager.jsonData = JSON.parse(value);
                    }
                }
                catch (e) {
                    DataManager.jsonData = null;
                }
            }
            var loadList = [{ url: "res/atlas/comp.json", type: Laya.Loader.ATLAS }];
            if (!DataManager.jsonData)
                loadList.push({ url: "config.json", type: Laya.Loader.TEXT });
            Laya.Laya.loader.load(loadList, Laya.Handler.create(this, this.onConfigLoaded));
        }
        loadSinglePackage(sname, callback, errCount = 0) {
            var thisobj = this;
            var loadobj = {
                name: sname,
                errNum: errCount,
                success: function (res) {
                    if (callback)
                        callback();
                },
                fail: function (res) {
                    if (loadobj.errNum < 0) {
                        loadobj.errNum = 1;
                        thisobj.loadSinglePackage(sname, callback, 1);
                    }
                    else {
                        console.log(res.errMsg);
                    }
                }
            };
            window["wx"].loadSubpackage(loadobj);
        }
        ;
        loadPackListSync(list, callback) {
            var loadedNum = 0;
            var loadComp = function () {
                loadedNum++;
                if (loadedNum >= list.length && callback)
                    callback();
            };
            for (var i = list.length - 1; i >= 0; i--) {
                this.loadSinglePackage(list[i], loadComp);
            }
        }
        ;
        initWXGameMain() {
            if (window["wx"].loadSubpackage) {
                var thisObj = this;
                this.loadPackListSync(["content1", "content2", "content3", "content4"], function () {
                    thisObj.onCreatePic();
                });
            }
        }
        onConfigLoaded() {
            if (window["wx"])
                this.initWXGameMain();
            else
                this.onCreatePic();
        }
        onCreatePic() {
            var list = new PicList();
            Laya.Laya.stage.addChild(list);
            if (DataManager.jsonData)
                list.dataSource = DataManager.jsonData;
            else {
                var str = Laya.Laya.loader.getRes("config.json");
                if (str) {
                    DataManager.jsonData = JSON.parse(str);
                    list.dataSource = DataManager.jsonData;
                    if (window["wx"]) {
                        window["wx"].setStorage({
                            key: "jsonData",
                            data: "" + str
                        });
                    }
                }
            }
        }
    }
    new Main();

}(Laya));

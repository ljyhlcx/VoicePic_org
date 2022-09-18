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
        PicListUI.uiView = { "type": "View", "props": { "width": 720, "runtime": "script/GameUI.ts", "height": 1440 }, "compId": 1, "child": [{ "type": "Panel", "props": { "x": 0, "width": 720, "var": "panel", "vScrollBarSkin": "comp/vscroll.png", "top": 0, "bottom": 150 }, "compId": 44, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 720, "var": "vs", "space": 25, "align": "left" }, "compId": 29 }] }, { "type": "Box", "props": { "width": 600, "var": "tab", "height": 150, "centerX": 0, "bottom": 0 }, "compId": 35, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "toggle": true, "skin": "comp/tab.png", "selected": true, "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "认识人物" }, "compId": 42, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/ren.png", "mouseEnabled": false }, "compId": 43 }] }, { "type": "Button", "props": { "y": 0, "x": 150, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "动物声音" }, "compId": 40, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/anim.png", "height": 100, "disabled": true }, "compId": 41 }] }, { "type": "Button", "props": { "y": 0, "x": 300, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "水果蔬菜" }, "compId": 36, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/bru.png", "mouseEnabled": false }, "compId": 37 }] }, { "type": "Button", "props": { "y": 0, "x": 450, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "交通工具" }, "compId": 38, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/car.png", "mouseEnabled": false, "height": 100 }, "compId": 39 }] }] }], "loadList": ["comp/vscroll.png", "comp/tab.png", "comp/ren.png", "comp/anim.png", "comp/bru.png", "comp/car.png"], "loadList3D": [] };
        ui.PicListUI = PicListUI;
        REG("ui.PicListUI", PicListUI);
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

    var REG$1 = Laya.ClassUtils.regClass;
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
    PicListUI.uiView = { "type": "View", "props": { "width": 720, "runtime": "script/GameUI.ts", "height": 1440 }, "compId": 1, "child": [{ "type": "Panel", "props": { "x": 0, "width": 720, "var": "panel", "vScrollBarSkin": "comp/vscroll.png", "top": 0, "bottom": 150 }, "compId": 44, "child": [{ "type": "VBox", "props": { "y": 0, "x": 0, "width": 720, "var": "vs", "space": 25, "align": "left" }, "compId": 29 }] }, { "type": "Box", "props": { "width": 600, "var": "tab", "height": 150, "centerX": 0, "bottom": 0 }, "compId": 35, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "toggle": true, "skin": "comp/tab.png", "selected": true, "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "认识人物" }, "compId": 42, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/ren.png", "mouseEnabled": false }, "compId": 43 }] }, { "type": "Button", "props": { "y": 0, "x": 150, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "动物声音" }, "compId": 40, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/anim.png", "height": 100, "disabled": true }, "compId": 41 }] }, { "type": "Button", "props": { "y": 0, "x": 300, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "水果蔬菜" }, "compId": 36, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "texture": "comp/bru.png", "mouseEnabled": false }, "compId": 37 }] }, { "type": "Button", "props": { "y": 0, "x": 450, "toggle": true, "skin": "comp/tab.png", "labelSize": 20, "labelPadding": "50", "labelFont": "SimHei", "labelColors": "#000000,#000000,#ffffff", "label": "交通工具" }, "compId": 38, "child": [{ "type": "Sprite", "props": { "y": 8, "x": 25, "width": 100, "texture": "comp/car.png", "mouseEnabled": false, "height": 100 }, "compId": 39 }] }] }], "loadList": ["comp/vscroll.png", "comp/tab.png", "comp/ren.png", "comp/anim.png", "comp/bru.png", "comp/car.png"], "loadList3D": [] };
    REG$1("ui.PicListUI", PicListUI);

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
            this.panel.vScrollBar.stopScroll();
            this.panel.vScrollBar.value = 0;
            this.vs.removeChildren();
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

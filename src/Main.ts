import { Text } from './../libs/laya/display/Text';
import { Laya } from "Laya";
import { URL } from "laya/net/URL";
import { Utils } from "laya/utils/Utils";
import { Stat } from "laya/utils/Stat";
import { Handler } from "laya/utils/Handler";
import { ResourceVersion } from "laya/net/ResourceVersion";
import GameConfig from "./GameConfig";
import { WebGL } from "laya/webgl/WebGL";
import { Loader } from "laya/net/Loader";
import { DataManager } from './DataManager';
import { PicList } from './script/PicList';

class Main {
	constructor() {
		if(Laya.Browser.window.clearAll)Laya.Browser.window.clearAll();
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) window["Laya3D"].init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, WebGL);
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.stat) Stat.show();
		Laya.alertGlobalError(true);

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		ResourceVersion.enable("version.json", Handler.create(this, this.onVersionLoaded), ResourceVersion.FILENAME_VERSION);
	}
	onVersionLoaded(): void {
		if (window["wx"]) {
			try {
				var value = window["wx"].getStorageSync('jsonData')
				if (value) {
					DataManager.jsonData = JSON.parse(value);
				}
			} catch (e) {
				DataManager.jsonData = null;
			}
		}
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		// AtlasInfoManager.enable("fileconfig.json", Handler.create(this, this.onConfigLoaded));
		var loadList: any[] = [{ url: "res/atlas/comp.json", type: Loader.ATLAS }];
		if (!DataManager.jsonData)
			loadList.push({ url: "config.json", type: Loader.TEXT });
		Laya.loader.load(loadList, Handler.create(this, this.onConfigLoaded));
	}
	/**加载单个包*/
	loadSinglePackage(sname: string, callback: Function, errCount: number = 0) {
		var thisobj = this;
		var loadobj = {
			name: sname,
			errNum: errCount,
			success: function (res) {
				if (callback)
					callback();
			},
			fail: function (res) {
				if (loadobj.errNum < 0) {//只允许重现加载一次
					loadobj.errNum = 1;
					thisobj.loadSinglePackage(sname, callback, 1);
				} else {
					// 分包加载失败通过 fail 回调
					console.log(res.errMsg);
				}
			}
		};
		window["wx"].loadSubpackage(loadobj);
	};

	/**同步加载script标签集合*/
	loadPackListSync(list, callback) {
		var loadedNum = 0;
		var loadComp = function () {
			loadedNum++;
			if (loadedNum >= list.length && callback)
				callback();
		}
		for (var i = list.length - 1; i >= 0; i--) {
			this.loadSinglePackage(list[i], loadComp);
		}
	};
	initWXGameMain() {
		if (window["wx"].loadSubpackage) { //微信小游戏官方提供的分包加载方法
			var thisObj = this;
			this.loadPackListSync(["content1", "content2", "content3", "content4"], function () {
				thisObj.onCreatePic();
			});
		}
	}
	onConfigLoaded(): void {
		// GameConfig.startScene && Scene.open(GameConfig.startScene);
		//加载IDE指定的场景
		if (window["wx"])
			this.initWXGameMain();
		else
			this.onCreatePic();
	}
	onCreatePic(): void {
		var list: PicList = new PicList();
		Laya.stage.addChild(list);
		if (DataManager.jsonData)
			list.dataSource = DataManager.jsonData;
		else {
			var str: string = Laya.loader.getRes("config.json");
			if (str) {
				DataManager.jsonData = JSON.parse(str);
				list.dataSource = DataManager.jsonData;
				if (window["wx"]) {
					window["wx"].setStorage({
						key: "jsonData",
						data: "" + str
					})
				}
			}
		}
	}
}
//激活启动类
new Main();

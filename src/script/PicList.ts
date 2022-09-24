import { PicToVoice } from './PicToVoice';
import { VoiceToPic } from './VoiceToPic';
import { NameToPic } from './NameToPic';
import { UIComponent } from '../../libs/laya/ui/UIComponent';
import { DataManager } from '../DataManager';
import { stage, Laya } from '../../libs/Laya';
import { Point } from '../../libs/laya/maths/Point';
import { Rectangle } from '../../libs/laya/maths/Rectangle';
import { MouseManager } from "laya/events/MouseManager";
import { Event } from "laya/events/Event";
import { Box } from "laya/ui/Box";
import { Image } from "laya/ui/Image";
import { Texture } from "laya/resource/Texture";
import { Handler } from "laya/utils/Handler";
import { SoundManager } from "laya/media/SoundManager";
import { Label } from "laya/ui/Label";
import { PicItem } from "./PicItem";
import { Button } from 'laya/ui/Button';
import { PicListUI } from '../layaMaxUI';

/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export class PicList extends PicListUI {
    /**设置单例的引用方式，方便其他类引用 */
    static instance: PicList;
    private topspace: UIComponent;
    constructor() {
        super();
        PicList.instance = this;
        //关闭多点触控，否则就无敌了
        MouseManager.multiTouchEnabled = false;
    }
    public createChildren(): void {
        super.createChildren();
        this.tab.on(Event.CLICK, this, this.onTabclick);
        this.panel.vScrollBar.visible = false;
        this.panel.vScrollBar.changeHandler = new Handler(this, this.onChange);
        this.topspace = new UIComponent();
        this.topspace.width = this.topspace.height = 50;
        this.on(Event.DISPLAY, this, this.onDisplay);
        this.on(Event.UNDISPLAY, this, this.onUnDisplay);
    }
    private onDisplay(): void {
        this.onResize();
        Laya.stage.on(Event.RESIZE, this, this.onResize);
    }
    private onUnDisplay(): void {
        Laya.stage.off(Event.RESIZE, this, this.onResize);
    }
    private onResize(): void {
        this.height = Laya.stage.height;
    }
    private onTabclick(e: Event) {
        var btn: Button = e.target as Button;
        this.selectedIndex = this.tab.getChildIndex(btn);
    }
    public set dataSource(value: any) {
        this._dataSource = value;
        this.selectedIndex = 0;
    }
    private preSelectIndex: number = 0;
    private _selectedIndex: number;
    public set selectedIndex(value: number) {
        this._selectedIndex = value;
        var btn: Button = this.tab.getChildAt(this.preSelectIndex) as Button;
        btn.selected = false;
        btn = this.tab.getChildAt(value) as Button;
        btn.selected = true;
        this.preSelectIndex = value;
        this.onTabSelect(value);
    }
    public get selectedIndex(): number {
        return this._selectedIndex;
    }
    private onTabSelect(index: number): void {
        if (index < 3)
            this.tabPanel.hScrollBar.value = 0
        else if (index > 3)
            this.tabPanel.hScrollBar.value = this.tabPanel.hScrollBar.max;
        this.panel.vScrollBar.stopScroll();
        this.panel.vScrollBar.value = 0;
        this.vs.removeChildren();
        this.removeAllGame();
        if (index >= 4) {
            this.onTabToGame(index);//切到游戏
        } else {
            var arr: any[] = this._dataSource[index];
            this.vs.addChild(this.topspace);
            for (var i: number = 0, len: number = arr.length; i < len; i++) {
                var item: PicItem = new PicItem();
                item.data = arr[i];
                item.btnDIY.visible = true;//(index == 0);
                item.btnDIY.on(Event.CLICK, this, this.onDIY, [i]);
                this.vs.addChild(item);
                if (i < 4)
                    item.display();
            }
        }
    }

    private onChange(value: number): void {
        var len: number = this.vs.numChildren;
        for (var i: number = 1; i < len; i++) {
            var item: PicItem = this.vs.getChildAt(i) as PicItem;
            if (!item.isDisplay && item.y < this.panel.height + this.panel.vScrollBar.value + 400)
                item.display();
        }
    }
    /**
     * 自定义图片内容
     * @param i 
     */
    private onDIY(i: number): void {
        var the = this;
        if (window["wx"] && window["wx"].chooseImage) {
            window["wx"].chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePath = res.tempFilePaths[0];
                    (the.vs.getChildAt(i + 1) as PicItem).img.skin = tempFilePath;
                    DataManager.jsonData[the.selectedIndex + ""][i].img = tempFilePath;
                    var str = JSON.stringify(DataManager.jsonData);
                    if (str) {
                        window["wx"].setStorage({
                            key: "jsonData",
                            data: "" + str
                        })
                    }
                }
            })
        }
    }
    /******************************游戏***************************** */
    private nameToPic: NameToPic;
    private voiceToPic: VoiceToPic;
    private picToVoice: PicToVoice;
    /**切换到游戏 */
    private onTabToGame(index: number): void {
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
    private removeAllGame(): void {
        if (this.nameToPic) this.nameToPic.removeSelf();
        if (this.voiceToPic) this.voiceToPic.removeSelf();
        if (this.picToVoice) this.picToVoice.removeSelf();
    }
}
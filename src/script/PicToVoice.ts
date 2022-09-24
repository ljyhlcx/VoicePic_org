import { PicToVoiceUI } from "../layaMaxUI";
import { PicVO } from "./PicVO";
import { GameControl } from "./GameControl";
import { DataManager } from "../DataManager";
import { SoundManager } from "laya/media/SoundManager";
import { Laya } from "Laya";
import { Box } from "laya/ui/Box";
import { Event } from "laya/events/Event";
import { Button } from "laya/ui/Button";

export class PicToVoice extends PicToVoiceUI {
    private firstVO: PicVO;
    private selectBtn: Button;
    private allBtn: Button[];
    constructor() {
        super();
        this.allBtn = [this.v1, this.v2, this.v3, this.v4];
        this.on(Event.DISPLAY, this, this.onAddtoStage);
        this.btnName.on(Event.CLICK, this, this.sayName);
        this.btnNext.on(Event.CLICK, this, this.onPlayNext);
        this.v1.on(Event.CLICK, this, this.onPlayVoice);
        this.v2.on(Event.CLICK, this, this.onPlayVoice);
        this.v3.on(Event.CLICK, this, this.onPlayVoice);
        this.v4.on(Event.CLICK, this, this.onPlayVoice);
        this.btnSubmit.on(Event.CLICK, this, this.onClick);
    }
    private onAddtoStage(): void {
        var arr: PicVO[] = GameControl.instance.getOneVoiceToPicByType();
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
            } else {
                this.bigImg.height = this.bigBox.height;
                this.bigImg.width = this.bigImg.height * bmpscal;
            }
        }
        for (var i: number = 0; i < 4; i++) {
            var index = Math.floor(arr.length * Math.random());
            var btn: Button = this["v" + (i + 1)] as Button;
            btn.visible = true;
            btn.dataSource = arr.splice(index, 1)[0];
        }

    }
    private onClick(): void {
        if (this.selectBtn.dataSource == this.firstVO) {
            this.lblzq.label = "正确：" + ++DataManager.picToVoiceNum.zq;
            for (var button of this.allBtn) {
                if (button != this.selectBtn) {
                    button.visible = false;
                }
            }
            SoundManager.playSound("res/sound/duile.mp3");
        } else {
            this.lblcuo.label = "错误：" + ++DataManager.picToVoiceNum.cw;
            SoundManager.playSound("res/sound/budui.mp3");
        }
    }
    private sayName(): void {
        SoundManager.playSound(this.firstVO.sound);
    }
    private onPlayVoice(e: Event): void {
        var btn: Button = this.selectBtn = e.currentTarget as Button;
        for (var button of this.allBtn) {
            if (button == btn) {
                button.skin = "comp/btn_2.png";
            } else {
                button.skin = "comp/btn_1.png";
            }
        }
        SoundManager.playSound((btn.dataSource as PicVO).voice);
    }
    private onPlayNext(): void {
        this.onAddtoStage();
    }
}
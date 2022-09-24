import { Sound } from './../../libs/laya/media/Sound';
import { VoiceToPicUI } from "../layaMaxUI";
import { PicVO } from "./PicVO";
import { GamePicItem } from "./GamePicItem";
import { Handler } from "laya/utils/Handler";
import { GameControl } from "./GameControl";
import { DataManager } from "../DataManager";
import { SoundManager } from "laya/media/SoundManager";
import { Box } from "laya/ui/Box";
import { Event } from "laya/events/Event";
import { Laya } from "Laya";

export class VoiceToPic extends VoiceToPicUI {
    private dataArr: PicVO[];
    private firstVO: PicVO;
    constructor() {
        super();
        this.list.itemRender = GamePicItem;
        this.list.renderHandler = new Handler(this, this.onRender);
        this.on(Event.DISPLAY, this, this.onAddtoStage);
        this.btnVoice.on(Event.CLICK, this, this.onPlayVoice);
        this.btnNext.on(Event.CLICK, this, this.onPlayNext);
        this.list.on(Event.RESIZE, this, this.onResize);
        this.btnName.on(Event.CLICK, this, this.onPlayNameSound);
    }
    private onAddtoStage(): void {
        this.bigImg.visible = false;
        this.list.visible = true;
        this.btnName.visible = false;
        var arr: PicVO[] = GameControl.instance.getOneVoiceToPicByType();
        this.firstVO = arr[0];
        this.onPlayVoice();
        this.dataArr = [];
        for (var i: number = 0; i < 4; i++) {
            var index = Math.floor(arr.length * Math.random());
            this.dataArr.push(arr.splice(index, 1)[0]);
        }
        this.list.dataSource = this.dataArr;
    }
    private onClick(index: number): void {
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
                } else {
                    this.bigImg.height = this.bigBox.height;
                    this.bigImg.width = this.bigImg.height * bmpscal;
                }
            }
            this.btnName.visible = true;
            this.btnName.label = this.firstVO.name;
            SoundManager.playSound("res/sound/duile.mp3");
            Laya.timer.once(900, this, this.onPlayNameSound);
        } else {
            this.lblcuo.label = "错误：" + ++DataManager.voiceToPicNum.cw;
            SoundManager.playSound("res/sound/budui.mp3");
        }
    }
    private onPlayVoice(): void {
        SoundManager.playSound(this.firstVO.voice);
    }
    private onPlayNameSound():void{
        SoundManager.playSound(this.firstVO.sound);
    }
    private onPlayNext(): void {
        this.onAddtoStage();
    }
    private onRender(cell: Box, index: number): void {
        var w: number = Math.floor((this.list.width - this.list.spaceX) / 2);
        var h: number = Math.floor((this.list.height - this.list.spaceY) / 2);
        cell.width = w;
        cell.height = h;
        cell.on(Event.CLICK, this, this.onClick, [index]);
    }
    private onResize(): void {
        var w: number = Math.floor((this.list.width - this.list.spaceX) / 2);
        var h: number = Math.floor((this.list.height - this.list.spaceY) / 2);
        for (var i: number = 0; i < 4; i++) {
            var cell: Box = this.list.getCell(i);
            cell.width = w;
            cell.height = h;
        }
    }
}
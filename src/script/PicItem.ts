import { Laya } from './../../libs/Laya';
import { Box } from "laya/ui/Box";
import { Image } from "laya/ui/Image";
import { Texture } from "laya/resource/Texture";
import { SoundManager } from "laya/media/SoundManager";
import { Event } from "laya/events/Event";
import { Handler } from "laya/utils/Handler";
import { Button } from "laya/ui/Button";
import { PicItemUI } from '../layaMaxUI';

export class PicItem extends PicItemUI {
    constructor() {
        super();
        this.img.on(Event.LOADED, this, this.onImgloaded);
        this.on(Event.CLICK, this, this.onMouseHandler);
        this.btnVoice.on(Event.CLICK, this, this.onVoice);
    }
    private _data: any;
    public set data(params: any) {
        this._data = params;
        this.btnVoice.visible = this.data.voice;
    }
    public get data(): any {
        return this._data;
    }
    private canPlay: boolean = true;
    public isDisplay: boolean;
    /**
     * 进入视野开始加载显示
     */
    public display(): void {
        this.txtName.text = this.data.name;
        this.img.skin = this.data.img;
        this.isDisplay = true;
    }
    private onImgloaded(): void {
        var bmpd: Texture = this.img.source;
        var scalx: number = this.img.width / bmpd.width;
        var cellH: number = Math.ceil(bmpd.height * scalx);
        this.img.height = cellH;
        this.bg.height = this.height = cellH + 100;
    }
    private onMouseHandler(e: Event): void {
        if (this.canPlay && e.target.name.indexOf("btn") < 0 && this.data.sound) {
            SoundManager.playSound(this.data.sound);
            this.canPlay = false;
            Laya.timer.loop(600, this, this.onReset);
        }
    }   
    private onVoice(): void {
        if (this.canPlay && this.data.voice) {
            SoundManager.playSound(this.data.voice);
            this.canPlay = false;
            Laya.timer.loop(600, this, this.onReset);
        }
    }
    private onReset() {
        this.canPlay = true;
        Laya.timer.clear(this, this.onReset);
    }
}
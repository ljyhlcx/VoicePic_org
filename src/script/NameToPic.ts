import { Event } from 'laya/events/Event';
import { Image } from '../../libs/laya/ui/Image';
import { PicVO } from './PicVO';
import { GamePicItem } from './GamePicItem';
import { GameControl } from './GameControl';
import { Handler } from 'laya/utils/Handler';
import { SoundManager } from 'laya/media/SoundManager';
import { NameToPicUI } from '../layaMaxUI';
import { Box } from 'laya/ui/Box';
import { DataManager } from '../DataManager';
export class NameToPic extends NameToPicUI {
    private dataArr: PicVO[];
    private firstVO: PicVO;
    constructor() {
        super();
        this.list.itemRender = GamePicItem;
        this.list.renderHandler = new Handler(this, this.onRender);
        this.on(Event.DISPLAY, this, this.onAddtoStage);
        this.btnName.on(Event.CLICK, this, this.onSayName);
        this.btnNext.on(Event.CLICK, this, this.onPlayNext);
        this.list.on(Event.RESIZE, this, this.onResize);
    }
    private onAddtoStage(): void {
        this.bigImg.visible = false;
        this.list.visible = true;
        var arr: PicVO[] = GameControl.instance.getOneNameToPicByType();
        this.btnName.label = arr[0].name;
        this.firstVO = arr[0];
        this.onSayName();
        this.dataArr = [];
        for (var i: number = 0; i < 4; i++) {
            var index = Math.floor(arr.length * Math.random());
            this.dataArr.push(arr.splice(index, 1)[0]);
        }
        this.list.dataSource = this.dataArr;
    }
    private onClick(index: number): void {
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
                } else {
                    this.bigImg.height = this.bigBox.height;
                    this.bigImg.width = this.bigImg.height * bmpscal;
                }
            }
        } else {
            this.lblcuo.label = "错误：" + ++DataManager.nameToPicNum.cw;
            this.list.getCell(index).visible = false;
        }
    }
    private onSayName(): void {
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
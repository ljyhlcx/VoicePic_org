import { Image } from '../../libs/laya/ui/Image';
import { Box } from "laya/ui/Box";
import { Event } from "laya/events/Event";
import { PicVO } from './PicVO';

export class GamePicItem extends Box {
    private img: Image;
    constructor() {
        super();
        this.img = new Image();
        this.img.centerX = 0;
        this.img.centerY = 0;
        this.img.on(Event.LOADED, this, this.onLoaded);
        this.addChild(this.img);
        this.on(Event.RESIZE, this, this.onResize);
    }

    private onResize(): void {
        if (this.img.source) {
            var bmpscal = this.img.source.width / this.img.source.height;
            var boxscal = this.width / this.height;
            if (bmpscal > boxscal) {
                this.img.width = this.width;
                this.img.height = this.img.width / bmpscal;
            } else {
                this.img.height = this.height;
                this.img.width = this.img.height * bmpscal;
            }
        }
    }
    private onLoaded(): void {
        this.onResize();
    }
    public set dataSource(val: PicVO) {
        this.img.skin = val.img;
        this.visible = true;
    }
}
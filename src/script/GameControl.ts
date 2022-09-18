import { loader, Laya } from './../../libs/Laya';
import { PicVO } from "./PicVO";
import { DataManager } from '../DataManager';

export class GameControl {
    private static _instance: GameControl;
    constructor() {
    }
    public static get instance(): GameControl {
        if (!GameControl._instance) {
            GameControl._instance = new GameControl();
        }
        return GameControl._instance;
    }

    private preNameToPic: any = {};
    /**
     * 获取一个名称识图数据对象
     * @param type 
     */
    public getOneNameToPicByType(): PicVO[] {
        var type: number = Math.floor(Math.random() * 4);
        var dic: any = DataManager.jsonData;
        var arr: PicVO[] = dic[type];
        var temp: PicVO[] = arr.concat();
        var returnArr: PicVO[] = [];
        for (var i: number = 0; i < 4; i++) {
            var indx = Math.floor(temp.length * Math.random());
            if (i == 0) {
                while (type == this.preNameToPic.type && indx == this.preNameToPic.index) {
                    indx = Math.floor(temp.length * Math.random());
                }
                this.preNameToPic.type = type;
                this.preNameToPic.index = indx;
            }
            var a1: PicVO[] = temp.splice(indx, 1);
            returnArr.push(a1[0]);
        }
        return returnArr;
    }
}
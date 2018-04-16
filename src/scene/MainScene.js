import Phaser from 'phaser'
import Tank, { TankType } from '../world/Tank'
export default class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key:'MainScene'
        })
        this._tank = new Tank(this, 0, 0, TankType.RED);
    }

    preload() {
        console.log('preload');
        this._tank.preload();
    }

    create() {
        console.log('create');
        this._tank.create();
    }

    update() {
        this._tank.update();
    }
}

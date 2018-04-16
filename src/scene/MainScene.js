import Phaser from 'phaser'
import Tank from '../world/Tank'
export default class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key:'MainScene'
        })
        this._tank = new Tank(this, 0, 0);
    }

    preload() {
        console.log('preload');
        this._tank.preload();
    }

    create() {
        console.log('create');
        this._tank.create();
       
        // let logo = this.add.image(400, 150, 'logo');
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: 'Power2',
        //     yoyo: true,
        //     loop: -1
        // });
    }

    update() {
        this._tank.update();
    }
}

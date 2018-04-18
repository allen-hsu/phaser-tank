import BaseScene from '../base/BaseScene'
export default class BootScene extends BaseScene {
    constructor () {
        super('BootScene');
    }

    preload() {
        //load resource
        this.load.image('tank', 'assets/images/tank.png');
        this.load.image('grass', 'assets/images/logo.png');
        this.load.image('bullet', 'assets/bullets/bullet.png');
    }

    create() {
        this.scene.start('MainScene');
    }
}

import BaseScene from '../base/BaseScene'
export default class BootScene extends BaseScene {
    constructor () {
        super('BootScene');
    }

    preload() {
    }

    create() {
        this.scene.start('MainScene');
    }
}

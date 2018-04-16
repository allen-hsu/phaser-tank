import BaseScene from '../base/BaseScene'
export default class BootScene extends BaseScene {
    constructor () {
        super('BootScene');
    }

    preload() {
        console.log('preload');
    }

    create() {
        console.log('create');
        this.scene.start('MainScene');
    }
}

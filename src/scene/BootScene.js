import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor () {
        super({
            key:'BootScene'
        })
    }

    preload() {
        console.log('preload');
    }

    create() {
        console.log('create');
        this.scene.start('MainScene');
    }
}

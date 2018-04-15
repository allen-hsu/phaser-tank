import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key:'MainScene'
        })
    }

    preload() {
        console.log('preload');
        this.load.image('logo', 'assets/images/logo.png');
    }

    create() {
        console.log('create');
        let logo = this.add.image(400, 150, 'logo');
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });

    }
}

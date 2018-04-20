import Phaser from 'phaser'

export default class Wall extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'wall');
    }
}
    
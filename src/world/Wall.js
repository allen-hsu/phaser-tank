import Phaser from 'phaser'

export default class Wall extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'wall');
    }

    update(time, delta) { // eslint-disable-line no-unused-vars
        if(this.x < this.scene.leftBorder) {
            this.onDestory();
        }

        if(this.x < this.scene.leftBorder) {
            this.onDestory();
        }

        if(this.x > this.scene.rightBorder) {
            this.onDestory();
        }

        if(this.y < this.scene.topBorder) {
            this.onDestory();
        }

        if(this.y > this.scene.bottomBorder) {
            this.onDestory();
        }
    }

    onDestory() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }
}
    
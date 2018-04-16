import Phaser from 'phaser'

export default class Bullet extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'bullet');
        this.speed = Phaser.Math.GetSpeed(600, 1);
    }

    fire(x, y) {
        this.setPosition(x, y);

        this.setActive(true);
        this.setVisible(true);
    }

    update(time, delta) {
        this.x += this.speed * delta;

        if (this.x > 820)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}
    
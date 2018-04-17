import BaseComponent from '../base/BaseComponent';
export default class Attackable extends BaseComponent {
    constructor(scene, name, target, bullet) {
        super(scene, name, target);
        this.setBullet(bullet);
    }

    create() {
        this.scene.emmiter.on('input_action', this.onAttack, this);
    }

    onAttack() {
        var bullet = this._bullet.get();
        if (bullet) {
            let offset = new Phaser.Geom.Point(0, 0);
            Phaser.Math.Rotate(offset, this._target.rotation);
            bullet.fire(this._target.x + offset.x, this._target.y + offset.y, this._target.rotation);
        }
    }

    setBullet(bullet) {
        this._bullet = bullet;
    }
}
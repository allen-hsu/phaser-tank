import BaseComponent from '../base/BaseComponent';
export default class Attackable extends BaseComponent {
    constructor(scene, name, type, bullet, damage) {
        super(scene, name, '');
        this.setBullet(bullet);
        this.scene.emmiter.on('input_action', this.onAttack, this);
        this._type = type;
        this._damage = damage;
    }

    create() {
        
    }

    onAttack() {
        var bullet = this._bullet.get();
        if (bullet) {
            bullet.setType(this._type);
            bullet.setDamage(this._damage);
            let offset = new Phaser.Geom.Point(0, 0);
            Phaser.Math.Rotate(offset, this._target.rotation);
            bullet.fire(this._target.x + offset.x, this._target.y + offset.y, this._target.rotation);
        }
    }

    setBullet(bullet) {
        this._bullet = bullet;
    }

    get bullet() {
        return  this._bullet;
    }

    setType(type) {
        this._type = type;
    }
    
}
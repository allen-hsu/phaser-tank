import Phaser from 'phaser'
import Recoverable from '../components/Recoverable';
export default class Bullet extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'bullet');
        this.speed = Phaser.Math.GetSpeed(600, 1);
        this.lifespan = 3000;
        this.velocity = new Phaser.Geom.Point(0, 0);
        this._recover = new Recoverable(scene, 'recover', this);
        this._recover.create();
    }

    fire(x, y, direction) {
        this.lifespan = 3000;
        this.setPosition(x, y)
          .setActive(true)
          .setVisible(true)
          
        this.velocity.setTo(this.speed, 0);
        Phaser.Math.Rotate(this.velocity, direction);
        this.rotation = direction;
    }

    update(time, delta) {
        // Update position based on velocity
        this.x += this.velocity.x * delta;
        this.y += this.velocity.y * delta;
        
        this.lifespan -= delta;

        this._recover.update();
        if (this.lifespan <= 0) {
            this.emit('recover');
        }
    }

    setType(type) {
        this._type = type;
    }

    get type() {
        return this._type;
    }

    setDamage(damage) {
        this._damage = damage;
    }

    get damage() {
        return this._damage;
    }
}
    
import Phaser from 'phaser'

export default class Bullet extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'bullet');
        this.speed = Phaser.Math.GetSpeed(600, 1);
        this.lifespan = 3000;
        this.velocity = new Phaser.Geom.Point(0, 0);
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

        if (this.lifespan <= 0) {
          this.setActive(false);
          this.setVisible(false);
          this.body.stop();
          this.destroy();
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

    onDestory() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }
}
    
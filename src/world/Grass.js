import Phaser from 'phaser'

export default class Grass extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'grass');
        this._life = 100;
        this._progress = this.scene.add.graphics();
        this._progress.clear();
        this._progress.fillStyle(0xff0000, 1);
        this._progress.setDepth(1);
        
    }

    update(time, delta) { // eslint-disable-line no-unused-vars
        if(this._life > 0) {
            this._progress.clear();
            this._progress.fillStyle(0xff0000, 1);
            this._progress.fillRect(this.x - this.width/2, this.y + this.height/2, 0.65*this._life, 10);
        }

        if(this.distance() > 800) {
            this.onDestroy();
        }
    }
    
    onDamage(damage) {
        this._life -= damage;
        if(this._life <= 0) {
            this.onDestroy();
        }
    }

    onDestroy() {
        this.setActive(false);
        this.setVisible(false);
        this._progress.clear();
        this.body.stop();
        this.destroy();
    }

    distance() {
        var dx = this.x - this.scene._tank.tank.x;
        var dy = this.y - this.scene._tank.tank.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
    
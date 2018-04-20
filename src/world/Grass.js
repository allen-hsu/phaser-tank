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
    }
    
    onDamage(damage) {
        this._life -= damage;
        if(this._life <= 0) {
            this.onDestory();
        }
    }

    onDestory() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
        this._progress.clear();
    }
}
    
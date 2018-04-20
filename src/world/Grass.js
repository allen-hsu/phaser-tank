import Phaser from 'phaser'

export default class Grass extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'grass');
        this._life = 100;
        this._progress = this.scene.add.graphics();
        this._progress.clear();
        this._progress.fillStyle(0xffffff, 1);
        
    }

    update() {
        this._progress.fillRect(this.x, this.y, 20 * this._life, 100);
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
    }
}
    
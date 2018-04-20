import Phaser from 'phaser'

export default class Grass extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'grass');
        this._life = 0;
    }

    onDamage(damage) {
        this.life -= damage;
        if(this._life <= 0) {
            console.log('die');
        }
    }
}
    
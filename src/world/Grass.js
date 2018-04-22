import Phaser from 'phaser'
import Healthable from '../components/Healthable';
import Recoverable from '../components/Recoverable';
export default class Grass extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'grass');
        this._health = new Healthable(scene, 'health', 100, this);
        this._health.create();
        this._recover = new Recoverable(scene, 'recover', this);
        this._recover.create();
    }


    update(time, delta) { // eslint-disable-line no-unused-vars
        this._health.update();
        this._recover.update();
    }
}
    
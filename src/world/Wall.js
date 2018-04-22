import Phaser from 'phaser'
import Recoverable from '../components/Recoverable';
export default class Wall extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'wall');
        this._recover = new Recoverable(scene, 'recover', this);
        this._recover.create();
    }

    update(time, delta) { // eslint-disable-line no-unused-vars
        this._recover.update();
    }
}
    
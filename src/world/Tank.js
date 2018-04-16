import BaseNode from '../base/BaseNode';
import Controllerable from '../base/Controllerable';
export default class Tank extends BaseNode {
    constructor(scene, x, y) {
        super(scene, x, y);
        this._controller = this.addComponent(new Controllerable(scene, 'controller'), this);
    }

    preload() {
        super.preload();
        this.scene.load.image('tank', 'assets/images/logo.png');
    }

    create() {
        super.create();
        let tank = this.scene.add.image(400, 150, 'tank');
        tank.setTint(0xff0000);
        this._controller.setTarget(tank);
    }
}
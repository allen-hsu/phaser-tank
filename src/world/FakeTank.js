import BaseNode from '../base/BaseNode';


export default class FakeTank extends BaseNode {
    
    constructor(scene, x, y, type, name) {
        super(scene, x, y, name);
        this._type = type;
    }

    initComponent() {
    }

    preload() {
        super.preload();
    }

    create() {
        super.create();
        this._tank = this.scene.add.image(this._x, this._y, 'tank');
        
    }

    update() {

    }
}
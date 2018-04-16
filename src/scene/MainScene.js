import BaseScene from '../base/BaseScene'
import Tank, { TankType } from '../world/Tank'
import TankInput from '../world/TankInput'
export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
        this._tank = this.addNode(new Tank(this, 0, 0, TankType.RED));
        this._tankInput = this.addNode(new TankInput(this, 0, 0));
    }

    // preload() {
    //     console.log('preload');
    //     this._tank.preload();
    //     this._tankInput.preload();
    // }

    // create() {
    //     console.log('create');
    //     this._tank.create();
    // }

    // update() {
    //     this._tank.update();
    // }
}

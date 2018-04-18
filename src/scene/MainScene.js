import BaseScene from '../base/BaseScene'
import Tank, { TankType } from '../world/Tank'
import FakeTank from '../world/FakeTank'
import TankInput from '../world/TankInput'
export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
        this._tank = this.addNode(new Tank(this, 0, 0, TankType.RED, 'tank'));
        this._tank2 = this.addNode(new FakeTank(this, 0, 100, TankType.BLUE, 'tank2'));
        this._tank3 = this.addNode(new FakeTank(this, 200, 300, TankType.GREEN, 'tank3'));
        this._tankInput = this.addNode(new TankInput(this, 0, 0));
    }

    create() {
        super.create();
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(this._tank.tank);
    }
}

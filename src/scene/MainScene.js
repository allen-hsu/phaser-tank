import BaseScene from '../base/BaseScene'
import Tank, { TankType } from '../world/Tank'
import Hud from '../world/Hud'
import MapGenerate from '../world/MapGenerate';
export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
        this._tank = this.addNode(new Tank(this, 0, 0, TankType.RED, 'tank'));
        this._hud = this.addNode(new Hud(this, 0, 0));
        this._mapGen = this.addNode(new MapGenerate(this, 0, 0, 'mapGen'));
        
    }

    create() {
        super.create();
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(this._tank.tank);
        this.randomGenMap();
    }


    randomGenMap() {
        //center
        this._mapGen.genMap(0, 800, 0, 600);
        //left
        this._mapGen.genMap(-800, 0, 0, 600);
        //right
        this._mapGen.genMap(800, 1600, 0, 600);
        //top
        this._mapGen.genMap(0, 800, 600, 1200);
        //down
        this._mapGen.genMap(0, 800, -600, 0);
    }
}

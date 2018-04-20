import BaseScene from '../base/BaseScene'
import Tank, { TankType } from '../world/Tank'
import Hud from '../world/Hud'
import MapGenerate from '../world/MapGenerate';
import Bullet from '../world/Bullet'
import Grass from '../world/Grass';
export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
        this._tank = this.addNode(new Tank(this, 0, 0, TankType.RED, 'tank'));
        this._hud = this.addNode(new Hud(this, 0, 0));
        this._mapGen = this.addNode(new MapGenerate(this, 0, 0, 'mapGen'));
        this._leftBorder = 0;
        this._rightBorder = 800;
        this._upBorder = 0;
        this._downBorder = 600;
    }

    create() {
        super.create();
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(this._tank.tank);

        //this.physics.add.overlap(this._tank.tank,this._mapGen.wall,this.collectWall,null,this)
        this._bg = this.add.tileSprite(400, 300, 800, 600, 'background').setScrollFactor(0).setDepth(-1);
        this.randomGenMap();
        this.setupCollision();
    }

    setupCollision() {
        this._bullet = this._tank.getComponent('weapon').bullet;
        //console.log(this._mapGen.grass);
        this.physics.add.overlap(this._bullet,this._mapGen.grass,this.collision,null,this)
    }


    update() {
        super.update();
        if(this._tank.tank.x < this._leftBorder) {
            console.log('out of world');
        } 

        if(this._tank.tank.x > this._rightBorder) {
            console.log('out of world');
        } 

        if(this._tank.tank.y < this._upBorder) {
            console.log('out of world');
        } 

        if(this._tank.tank.y > this._downBorder) {
            console.log('out of world');
        } 

        this._bg.tilePositionX += this._tank.tank.body.deltaX() * 0.5;
        this._bg.tilePositionY += this._tank.tank.body.deltaY() * 0.5;
       
        this.updateCollision();
    }

    updateCollision() {
        this.physics.world.collide(this._tank.tank,this._mapGen.wall);
    }

    collision(a, b) {
        if ((a instanceof Bullet) && (b instanceof Grass) ) {
            a.onDestory();
            b.onDamage(a.damage);
        }
    }

    randomGenMap() {
        //center
        this._mapGen.genMap(0, 800, 0, 600);
        // //left
        // this._mapGen.genMap(-800, 0, 0, 600);
        // //right
        // this._mapGen.genMap(800, 1600, 0, 600);
        // //top
        // this._mapGen.genMap(0, 800, 600, 1200);
        // //down
        // this._mapGen.genMap(0, 800, -600, 0);
    }
}

import BaseScene from '../base/BaseScene'
import Tank, { TankType } from '../world/Tank'
import Hud from '../world/Hud'
import MapGenerate from '../world/MapGenerate';
import Bullet from '../world/Bullet'
import Grass from '../world/Grass';
import Wall from '../world/Wall';
export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
        this._tank = this.addNode(new Tank(this, 0, 0, TankType.RED, 'tank'));
        this._hud = this.addNode(new Hud(this, 0, 0));
        this._mapGen = this.addNode(new MapGenerate(this, 0, 0, 'mapGen'));
        this._leftBorder = 0;
        this._rightBorder = 800;
        this._topBorder = 0;
        this._bottomBorder = 600;
        this._width = 800;
        this._height = 600;
    }

    create() {
        super.create();
        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(this._tank.tank);
        this._bg = this.add.tileSprite(400, 300, 800, 600, 'background').setScrollFactor(0).setDepth(-1);
        this.setupCollision();
        this._mapGen.genMap(this._leftBorder, this._rightBorder, this._topBorder, this._bottomBorder);
    }

    setupCollision() {
        this._bullet = this._tank.getComponent('weapon').bullet;
        //console.log(this._mapGen.grass);
        this.physics.add.overlap(this._bullet,this._mapGen.grass,this.collision,null,this);
        this.physics.add.overlap(this._bullet,this._mapGen.wall,this.collision,null,this);
        this.physics.add.overlap(this._tank.tank,this._mapGen.wall,this.collisionWall,null,this);
    }


    update() {
        super.update();
        this.checkBorder();

        if(!this._onBlock) {
            this._bg.tilePositionX += this._tank.tank.body.deltaX() * 0.5;
            this._bg.tilePositionY += this._tank.tank.body.deltaY() * 0.5;
        }       
        this.updateCollision();
    }

    checkBorder() {
        if(this._tank.tank.x < (this._leftBorder) ) {
            this._mapGen.genMap(this._tank.tank.x - this._width*0.25, this._leftBorder - this._width, this._topBorder, this._bottomBorder);
            this._leftBorder -= this._width;
            this._rightBorder -= this._width;
        } 

        if(this._tank.tank.x > this._rightBorder) {
            this._mapGen.genMap(this._tank.tank.x + this._width*0.25, this._rightBorder + this._width, this._topBorder, this._bottomBorder);
            this._rightBorder += this._width;
            this._leftBorder += this._width;
        } 

        if(this._tank.tank.y < this._topBorder) {
            this._mapGen.genMap(this._leftBorder, this._rightBorder , this._tank.tank.y - this._height*0.25, this._topBorder - this._height);
            this._topBorder -= this._height;
            this._bottomBorder -= this._height;
        } 

        if(this._tank.tank.y > this._bottomBorder) {
            this._mapGen.genMap(this._leftBorder, this._rightBorder, this._tank.tank.y + this._height*0.25 , this._bottomBorder + this._height);
            this._bottomBorder += this._height;
            this._topBorder += this._height;
        }
    }

    updateCollision() {
        this.physics.world.collide(this._tank.tank,this._mapGen.wall);
        this._onBlock = false;
    }

    collision(a, b) {
        if (a instanceof Bullet) {
            if(b instanceof Grass) {
                a.emit('recover');
                b.emit('dammage', a.damage);           
            } else if(b instanceof Wall) {
                a.emit('recover');
            } else {
                console.log(a);
                console.log(b);
            }
        }
    }

    collisionWall() {
        this._onBlock = true;
    }

    get rightBorder() {
        return this._rightBorder;
    }

    get leftBorder() {
        return this._leftBorder;
    }

    get topBorder() {
        return this._topBorder;
    }
    get bottomBorder() {
        return this._bottomBorder;
    }
}

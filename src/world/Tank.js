import BaseNode from '../base/BaseNode';
import Transferable from '../components/Transferable';
import BlueAttackable from '../components/BlueAttackable';
import RedAttackable from '../components/RedAttackable';
import GreenAttackable from '../components/GreenAttackable';
import Bullet from './Bullet';
export const TankType = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    LENGTH : 3,
};

export default class Tank extends BaseNode {
    
    constructor(scene, x, y, type, name) {
        super(scene, x, y, name);
        this._type = type;
    }

    initComponent() {
        this._transfer = this.addComponent(new Transferable(this.scene, 'controller'), this);
        this.setWeapon();
    }

    preload() {
        super.preload();
        this.scene.load.image('tank', 'assets/images/tank.png');
        this.scene.load.image('bullet', 'assets/bullets/bullet.png');
    }

    create() {
        super.create();
        this.tank = this.scene.add.image(400, 150, 'tank');
        this.setTank();
        this._weapon.attack();

        this.bullets = this.scene.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });

        this.scene.emmiter.on('spacedown', this.onChangeTank, this);
        this.scene.emmiter.on('attack', this.onFire, this);
        this.scene.emmiter.on('rotate', this.onRotate, this);
    }

    update() {

    }

    setTank() {
        switch (this._type) {
            case TankType.RED :
                this.tank.setTint(0xff0000);
            break;
            case TankType.GREEN :
                this.tank.setTint(0x00ff00);
            break;
            case TankType.BLUE :
                this.tank.setTint(0x0000ff);
            break;
        }
    }

    setWeapon() {
        switch (this._type) {
            case TankType.RED :
                this._weapon = this.addComponent(new RedAttackable(this.scene, 'weapon'), this);
            break;
            case TankType.GREEN :
                this._weapon = this.addComponent(new GreenAttackable(this.scene, 'weapon'), this);
            break;
            case TankType.BLUE :
                this._weapon = this.addComponent(new BlueAttackable(this.scene, 'weapon'), this);
            break;
        }
    }

    changeTank(type) {
        this._type = type;
        this.setTank();
        this.setWeapon();
    }

    onChangeTank() {
        this._type += 1;
        if(this._type >= TankType.LENGTH) {
            this._type = 0;
        }
        this.changeTank(this._type);
    }

    onFire() {
        var bullet = this.bullets.get();
        if (bullet) {
            
            //bullet.fire(this.tank);
            // Phaser.Math.Rotate(offset, this.tank.rotation);
            // bullet.fire(this.tank.x + offset.x, this.tank.y + offset.y);
            let offset = new Phaser.Geom.Point(0, 0);
            Phaser.Math.Rotate(offset, this.tank.rotation);
            bullet.fire(this.tank.x + offset.x, this.tank.y + offset.y, this.tank.rotation);
        }
    }

    onRotate(angle) {
        this.tank.rotation += angle;
    } 
}
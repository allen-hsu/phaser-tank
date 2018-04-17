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
        this._transfer = this.addComponent(new Transferable(this.scene, 'tansfer', this), this);
        this.setWeapon();
    }

    preload() {
        super.preload();
        this.scene.load.image('tank', 'assets/images/tank.png');
        this.scene.load.image('logo', 'assets/images/logo.png');
        this.scene.load.image('bullet', 'assets/bullets/bullet.png');
    }

    create() {
        super.create();
        this._tank = this.scene.add.image(400, 150, 'tank');
        // this._test = this.matter.add.image(0, 150, 'logo');
        // this._test.setVelocityX(10);

        // this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
        //     bodyA.gameObject.setTint(0xff0000);
        //     bodyB.gameObject.setTint(0x00ff00);
        // });

        this._bullets = this.scene.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });

        this.setTank();
        this._transfer.setTarget(this._tank);

        this._weapon.setTarget(this._tank);
        this._weapon.setBullet(this._bullets);
        // 
        this.scene.emmiter.on('input_spacedown', this.onChangeTank, this);
    }

    update() {

    }

    setTank() {
        switch (this._type) {
            case TankType.RED :
                this._tank.setTint(0xff0000);
            break;
            case TankType.GREEN :
                this._tank.setTint(0x00ff00);
            break;
            case TankType.BLUE :
                this._tank.setTint(0x0000ff);
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

    get tank() {
        return this._tank;
    }
}
import BaseNode from '../base/BaseNode';
import Transferable from '../components/Transferable';
// import BlueAttackable from '../components/BlueAttackable';
// import RedAttackable from '../components/RedAttackable';
import Attackable from '../components/Attackable';
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
        this._weapon = this.addComponent(new Attackable(this.scene, 'weapon', 'red', this._bullets, 10), this);
        this.setWeapon();
    }

    preload() {
        super.preload();
    }

    create() {
        super.create();
        
        this._tank = this.scene.physics.add.image(this.scene.cameras.main.width/2, this.scene.cameras.main.height/2, 'tank');
        this._bullets = this.scene.physics.add.group({
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
        super.update();
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
                //this._weapon = this.addComponent(new RedAttackable(this.scene, 'weapon', 'red', this._bullets), this);
                this._weapon.setType('red');
                this._weapon.setDamage(10);
            break;
            case TankType.GREEN :
                this._weapon.setType('green');
                this._weapon.setDamage(25);
                //this._weapon = this.addComponent(new GreenAttackable(this.scene, 'weapon', 'green', this._bullets), this);
            break;
            case TankType.BLUE :
                this._weapon.setType('blue');
                this._weapon.setDamage(20);
                //this._weapon = this.addComponent(new BlueAttackable(this.scene, 'weapon', 'blue', this._bullets), this);
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
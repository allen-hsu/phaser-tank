import BaseNode from '../base/BaseNode';
import Controllerable from '../components/Controllerable';
import BlueAttackable from '../components/BlueAttackable';
import RedAttackable from '../components/RedAttackable';
import GreenAttackable from '../components/GreenAttackable';
import Bullet from './Bullet';
export const TankType = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
};

export default class Tank extends BaseNode {
    
    constructor(scene, x, y, type) {
        super(scene, x, y);
        this._type = type;
    }

    initComponent() {
        this._controller = this.addComponent(new Controllerable(this.scene, 'controller'), this);
        this.setWeapon();
        console.log('initComponent');
    }

    preload() {
        super.preload();
        this.scene.load.image('tank', 'assets/images/tank.png');
        this.scene.load.image('bullet', 'assets/bullets/bullet.png');
    }

    create() {
        super.create();
        this.tank = this.scene.add.image(400, 150, 'tank');
        this._controller.setTarget(this.tank);
        this.setTank();
        this._weapon.attack();

        this.bullets = this.scene.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });

        this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar))
        {
            var bullet = this.bullets.get();

            if (bullet) {
                bullet.fire(this.tank.x, this.tank.y);
            }
        }
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
                this._weapon = this.addComponent(new RedAttackable(this, 'weapon'), this);
            break;
            case TankType.GREEN :
                this._weapon = this.addComponent(new GreenAttackable(this, 'weapon'), this);
            break;
            case TankType.BLUE :
                this._weapon = this.addComponent(new BlueAttackable(this, 'weapon'), this);
            break;
        }
    }

    changeTank(type) {
        this._type = type;
        this.setTank();
        this.setWeapon();
    }
}
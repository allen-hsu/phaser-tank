import Attackable from './Attackable';
export default class BlueAttackable extends Attackable {
    constructor(scene, name) {
        super(scene, name);
    }

    attack() {
        console.log('blue fire');
    }
}
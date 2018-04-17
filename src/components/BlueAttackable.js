import Attackable from './Attackable';
export default class BlueAttackable extends Attackable {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    onAttack() {
        console.log('blue fire');
    }
}
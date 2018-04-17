import Attackable from './Attackable';
export default class GreenAttackable extends Attackable {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    onAttack() {
        console.log('green fire');
    }
}
import Attackable from './Attackable';
export default class RedAttackable extends Attackable {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    onAttack() {
        super.onAttack();
        console.log('red fire');
    }
}
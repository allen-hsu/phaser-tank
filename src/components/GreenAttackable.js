import Attackable from './Attackable';
export default class GreenAttackable extends Attackable {
    constructor(scene, name, target, bullet) {
        super(scene, name, target, bullet);
    }

    onAttack() {
        console.log('green fire');
    }
}
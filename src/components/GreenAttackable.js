import Attackable from './Attackable';
export default class GreenAttackable extends Attackable {
    constructor(scene, name) {
        super(scene, name);
    }

    attack() {
        console.log('green fire');
    }
}
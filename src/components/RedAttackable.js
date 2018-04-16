import Attackable from './Attackable';
export default class RedAttackable extends Attackable {
    constructor(scene, name) {
        super(scene, name);
    }

    attack() {
        console.log('red fire');
    }
}
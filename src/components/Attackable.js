import BaseComponent from '../base/BaseComponent';
export default class Attackable extends BaseComponent {
    constructor(scene, name) {
        super(scene, name);
    }

    attack() {

    }

    create() {
        console.log(this.scene.emmiter);
        this.scene.emmiter.on('input_action', this.onAttack, this);
    }

    onAttack() {
        this.scene.emmiter.emit('attack');
    }
}
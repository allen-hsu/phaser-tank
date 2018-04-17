import BaseComponent from '../base/BaseComponent';
export default class Transferable extends BaseComponent {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    preload() {

    }

    create() {
        this.scene.emmiter.on('input_turnleft', this.onRotate, this);
        this.scene.emmiter.on('input_turnright', this.onRotate, this);
    }

    update() {
    
    }

    onRotate(angle) {
        this.target.rotation += angle;
    }
}
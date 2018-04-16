import BaseComponent from '../base/BaseComponent';
export default class Transferable extends BaseComponent {
    constructor(scene, name) {
        super(scene, name);
    }

    preload() {

    }

    create() {
        console.log(this.scene.emmiter);
        this.scene.emmiter.on('input_turnleft', this.onTurnLeft, this);
        this.scene.emmiter.on('input_turnright', this.onTurnRight, this);
        
    }

    update() {
    
    }

    onTurnLeft() {
        this.scene.emmiter.emit('rotate', -0.5);
    }

    onTurnRight() {
        this.scene.emmiter.emit('rotate', 0.5);
    }
}
import BaseComponent from '../base/BaseComponent';
export default class Transferable extends BaseComponent {
    constructor(scene, name, target) {
        super(scene, name, target);
        this.speed = Phaser.Math.GetSpeed(600, 1);
        this.velocity = new Phaser.Geom.Point(0, 0);
    }

    preload() {

    }

    create() {
        this.scene.emmiter.on('input_turnleft', this.onRotate, this);
        this.scene.emmiter.on('input_turnright', this.onRotate, this);
        this.scene.emmiter.on('input_left', this.onMove, this);
        this.scene.emmiter.on('input_right', this.onMove, this);
        this.scene.emmiter.on('input_down', this.onMove, this);
        this.scene.emmiter.on('input_up', this.onMove, this);
    }

    update() {
        this.target.body.setVelocity(0, 0);
    }

    onRotate(angle) {
        this.target.angle += angle;
    }

    onMove(x, y) {
        this.velocity.setTo(x, y);
        Phaser.Math.Rotate(this.velocity, this.target.rotation + Phaser.Math.DegToRad(90));
        this.target.body.setVelocity(this.velocity.x, this.velocity.y);
        //this.target.x += this.velocity.x;
        //this.target.y += this.velocity.y;
    }
}
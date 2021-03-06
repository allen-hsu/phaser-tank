import BaseNode from '../base/BaseNode';
import BaseButton from '../base/BaseButton';
export default class Hud extends BaseNode {
    constructor(scene, x, y) {
        super(scene, x, y, 'tankinput');
    }

    preload() {
        this.scene.load.spritesheet('buttonvertical', 'assets/buttons/buttons-big/button-vertical.png', { frameWidth: 64, frameHeight: 64 });
        this.scene.load.spritesheet('buttondiagonal', 'assets/buttons/buttons-big/button-diagonal.png',{ frameWidth: 64, frameHeight: 64 });
        this.scene.load.spritesheet('buttonfire', 'assets/buttons/buttons-big/button-round-a.png',{ frameWidth: 96, frameHeight: 96 });
    }

    create() {
        //action
        this.action = new BaseButton(this.scene, 600, 500, 'buttonfire', 0, this.onAction);
        //left
        this.left = new BaseButton(this.scene, 80, 472, 'buttonvertical', 1, this.onTurnLeft);
        //right
        this.right = new BaseButton(this.scene, 240, 472, 'buttonvertical', 1, this.onTurnRight);
        //up
        this.up = new BaseButton(this.scene, 160, 416, 'buttonvertical', 1, this.onUp);
        //down
        this.down = new BaseButton(this.scene, 160, 536, 'buttonvertical', 1, this.onDown);
        // // buttonbottomleft 
        // this.bottomleft = new BaseButton(this.scene, 80, 540, 'buttondiagonal', 6, this.onTurnLeft);
        // // buttonbottomright 
        // this.bottomright = new BaseButton(this.scene, 240, 540, 'buttondiagonal', 7, this.onTurnRight);

        this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.emmiter.emit('input_spacedown');
        }
    }

    onAction(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('input_action');
    }

    // onLeft(pointer) { // eslint-disable-line no-unused-vars
    //     this.scene.emmiter.emit('input_left', -5, 0);
    // }

    
    // onRight(pointer) { // eslint-disable-line no-unused-vars
    //     this.scene.emmiter.emit('input_right', 5, 0);
    // }

    onDown(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('input_down', 0, 1500);
    }

    onUp(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('input_up', 0, -1500);
    }

    onTurnLeft(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('input_turnleft', -10);
    }

    onTurnRight(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('input_turnright', 10);
    }
}
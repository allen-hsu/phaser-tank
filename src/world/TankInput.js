import BaseNode from '../base/BaseNode';
import BaseButton from '../base/BaseButton';
export default class TankInput extends BaseNode {
    constructor(scene, x, y) {
        super(scene, x, y, 'tankinput');
    }

    preload() {
        this.scene.load.spritesheet('buttonvertical', 'assets/buttons/buttons-big/button-vertical.png', { frameWidth: 64, frameHeight: 64 });
        this.scene.load.spritesheet('buttondiagonal', 'assets/buttons/buttons-big/button-diagonal.png',{ frameWidth: 64, frameHeight: 64 });
        this.scene.load.spritesheet('buttonfire', 'assets/buttons/buttons-big/button-round-a.png',{ frameWidth: 96, frameHeight: 96 });
    }

    create() {
        //fire
        this.fire = new BaseButton(this.scene, 600, 500, 'buttonfire', 0, this.onFire);
        //left
        this.left = new BaseButton(this.scene, 80, 472, 'buttonvertical', 1, this.onLeft);
        //right
        this.right = new BaseButton(this.scene, 240, 472, 'buttonvertical', 1, this.onRight);
        //up
        this.up = new BaseButton(this.scene, 160, 416, 'buttonvertical', 1, this.onUp);
        //down
        this.down = new BaseButton(this.scene, 160, 536, 'buttonvertical', 1, this.onDown);
        // buttonbottomleft 
        this.bottomleft = new BaseButton(this.scene, 80, 540, 'buttondiagonal', 6, this.onTurnLeft);
        // buttonbottomright 
        this.bottomright = new BaseButton(this.scene, 240, 540, 'buttondiagonal', 7, this.onTurnRight);

        this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.emmiter.emit('spacedown');
        }
    }

    onFire(pointer) { // eslint-disable-line no-unused-vars
        this.scene.emmiter.emit('fire');
    }

    onLeft(pointer) { // eslint-disable-line no-unused-vars

    }

    
    onRight(pointer) { // eslint-disable-line no-unused-vars
        
    }

    onDown(pointer) { // eslint-disable-line no-unused-vars
        
    }

    onUp(pointer) { // eslint-disable-line no-unused-vars
        
    }

    onTurnLeft(pointer) { // eslint-disable-line no-unused-vars
        
    }

    onTurnRight(pointer) { // eslint-disable-line no-unused-vars
        
    }
}
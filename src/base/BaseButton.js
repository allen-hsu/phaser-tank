import Phaser from 'phaser'
export default class BaseButton extends Phaser.GameObjects.Image {
    constructor (scene, x, y, name, index, down, out, up) {
      super(scene, x, y, name, index);
      scene.add.existing(this).setInteractive();
      this._down = down;
      this._out = out;
      this._up = up;

      if (typeof down !== 'undefined') {
        this.setEvent('pointerdown', down);
      }
      
      if (typeof out !== 'undefined') {
        this.setEvent('pointerup', out);
      }

      if (typeof up !== 'undefined') {
        this.setEvent('pointerout', up);
      }
    }

    setEvent(name, callback) {
        this.on(name, callback);
    }
  }
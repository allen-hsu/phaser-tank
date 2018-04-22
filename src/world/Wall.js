import Phaser from 'phaser'

export default class Wall extends Phaser.GameObjects.Image {

    constructor(scene) {
        super(scene, 0, 0, 'wall');
    }

    update(time, delta) { // eslint-disable-line no-unused-vars
        //console.log(this.scene._tank.tank.x);
        if(this.distance() > 800) {
            this.onDestroy();
        }
    }

    onDestroy() {
        this.setActive(false);
        this.setVisible(false);
        this.body.stop();
        this.destroy();
    }

    distance() {
        var dx = this.x - this.scene._tank.tank.x;
        var dy = this.y - this.scene._tank.tank.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
    
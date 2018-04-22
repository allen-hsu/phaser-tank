import BaseComponent from '../base/BaseComponent';
export default class Recoverable extends BaseComponent {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    create() {
        this.target.on('recover', this.onRecover, this);
    }

    update() {
        if(this.distance() > 800) {
            this.onRecover();
        }
    }

    onRecover() {
        this.target.setActive(false);
        this.target.setVisible(false);
        this.target.body.stop();
        this.target.destroy();
    }

    distance() {
        var dx = this.x - this.target.x;
        var dy = this.y - this.target.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
import BaseComponent from '../base/BaseComponent';
export default class Recoverable extends BaseComponent {
    constructor(scene, name, target) {
        super(scene, name, target);
    }

    create() {
        
    }

    update() {
 
    }

    onRecover() {

    }

    distance() {
        var dx = this.x - this.target.x;
        var dy = this.y - this.target.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
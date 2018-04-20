import BaseComponent from '../base/BaseComponent';
export default class Healthable extends BaseComponent {
    constructor(scene, name, life) {
        super(scene, name, '');
        this._life = life;
    }

    create() {
        
    }

    update() {
        if(this._life <= 0) {
            console.log('die');
        }
    }
}
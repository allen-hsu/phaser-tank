import BaseComponent from '../base/BaseComponent';
export default class Healthable extends BaseComponent {
    constructor(scene, name, life, target) {
        super(scene, name, target);
        this._life = life;
        this._progress = this.scene.add.graphics();
        this._progress.clear();
        this._progress.fillStyle(0xff0000, 1);
        this._progress.setDepth(1);
    }

    create() {
        this.target.on('dammage', this.onDamage, this);
    }

    onDamage(damage) {
        this._life -= damage;
        if(this._life <= 0) {
            //die
            this._progress.clear();
            this.target.emit('recover');
        }
    }

    update() {
        if(this._life > 0) {
            this._progress.clear();
            this._progress.fillStyle(0xff0000, 1);
            this._progress.fillRect(this.target.x - this.target.width/2, this.target.y + this.target.height/2, 0.65*this._life, 10);
        }
    }
}
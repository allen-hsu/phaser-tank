import BaseNode from '../base/BaseNode';


export default class MapGenerate extends BaseNode {
    
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
    }

    initComponent() {
    }

    preload() {
        super.preload();
    }

    create() {
        super.create();
        this._grass = this.scene.add.group({
            defaultKey: 'grass',
            maxSize: 100,
            active: false,
            visible: false,
            runChildUpdate: true
        });

        this._grass.createMultiple({
            active: false,
            visible: false,
            key: this._grass.defaultKey,
            repeat: this._grass.maxSize - 1
        });
    }

    update() {

    }

    genMap(x1, x2, y1, y2) {

        for (var i = 0; i < 5; i++) {
            let grass = this._grass.get(Phaser.Math.Between(x1, x2), Phaser.Math.Between(y1, y2));
            if(!grass) return;
            grass.setActive(true).setVisible(true)
        }
    }
}
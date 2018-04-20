import BaseNode from '../base/BaseNode';
import Grass from '../world/Grass';
import Wall from '../world/Wall';
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
        this._wall = this.scene.physics.add.group({
            classType: Wall,
            maxSize: 100,
            runChildUpdate: true,
            immovable: true
        });

        this._grass = this.scene.physics.add.group({
            classType: Grass,
            maxSize: 100,
            active: false,
            visible: false,
            runChildUpdate: true,
            immovable: true
        });

        this._grass.createMultiple({
            active: false,
            visible: false,
            key: this._grass.defaultKey,
            repeat: this._grass.maxSize - 1
        });


        this._wall.createMultiple({
            active: false,
            visible: false,
            key: this._wall.defaultKey,
            repeat: this._wall.maxSize - 1
        });
    }

    update() {

    }

    genMap(x1, x2, y1, y2) {

        for (var i = 0; i < 5; i++) {
            let grass = this._grass.get(Phaser.Math.Between(x1, x2), Phaser.Math.Between(y1, y2));
            if(!grass) return;
            grass.setActive(true).setVisible(true);

            let wall = this._wall.get(Phaser.Math.Between(x1, x2), Phaser.Math.Between(y1, y2));
            if(!wall) return;
            wall.setActive(true).setVisible(true);
            wall.enableBody = true;
            wall.body.allowGravity = false;
            wall.body.immovable = true;
        }
    }

    get wall() {
        return this._wall;
    }

    get grass() {
        return this._grass;
    }
}
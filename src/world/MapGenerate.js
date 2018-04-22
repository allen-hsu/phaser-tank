import BaseNode from '../base/BaseNode';
import Grass from '../world/Grass';
import Wall from '../world/Wall';
export default class MapGenerate extends BaseNode {
    
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this._tileWidth = 200;
        this._tileHeight = 200;
        this._captionTextFormat = (
            'Total:    %1\n' +
            'Max:      %2\n' +
            'Active:   %3\n' +
            'Inactive: %4\n' +
            'Used:     %5\n' +
            'Free:     %6\n' +
            'Full:     %7\n'
        );

        this._captionStyle = {
            fill: '#7fdbff',
            fontFamily: 'monospace',
            lineSpacing: 4
        };
        
        
    }


    initComponent() {
    }

    preload() {
        super.preload();
    }

    create() {
        super.create();
        //this._caption = this.scene.add.text(16, 16, '', this.captionStyle).setInteractive().setScrollFactor(0).setDepth(99);
        this._wall = this.scene.physics.add.group({
            classType: Wall,
            maxSize: 100,
            runChildUpdate: true,
        });

        this._grass = this.scene.physics.add.group({
            classType: Grass,
            maxSize: 100,
            runChildUpdate: true,
        });
    
    }

    update() {
        super.update();
        // this._caption.setText(Phaser.Utils.String.Format(this._captionTextFormat, [
        //     this._wall.getLength(),
        //     this._wall.maxSize,
        //     this._wall.countActive(true),
        //     this._wall.countActive(false),
        //     this._wall.getTotalUsed(),
        //     this._wall.getTotalFree(),
        //     this._wall.isFull()
        // ]));
    }

    genMap(x1, x2, y1, y2) {
        // console.log(x1, x2, y1, y2);
        // let xSize = Math.abs(x1 - x2);
        // let ySize = Math.abs(y1 - y2);

        // let xRange = 4;
        // let yRange = 3;
        // console.log('xSize' + xSize);
        // console.log('ySize' + ySize);
        // console.log('xRange' + xRange);
        // console.log('yRange' + yRange);
        // for(var i = 0; i <= xRange; i++) {
        //     var lastX = i - 1;
        //     if(lastX <= 0) {
        //         lastX = 0;
        //     }
                
        //     for(var k = 0; k <= yRange; k++) {
        //         var lastY = k - 1;
        //         if(lastY <= 0) {
        //             lastY = 0;
        //         }

        //         if(lastX != i && lastY != k) {
        //             //gen
        //             let genX1 = this._tileWidth*lastX;
        //             let genX2 = this._tileWidth*i;
        //             let genY1 = this._tileHeight*lastY;
        //             let genY2 = this._tileHeight*k;
        //             let random = Math.floor(Math.random() * 100) + 0;
        //             console.log('gen random' + random);
        //             console.log(genX1, genX2, genY1, genY2);
        //             if(random >= 0 && random <= 10) {
        //                 console.log('gen empty');
        //             } else if(random > 10 && random <= 50) {
        //                 console.log('gen wall',Phaser.Math.Between(x1 + genX1, x1 + genX2), Phaser.Math.Between(y1 + genY1, y1 + genY2) );
        //                 let wall = this._wall.get(Phaser.Math.Between(x1 + genX1, x1 + genX2), Phaser.Math.Between(y1 + genY1, y1 + genY2));
        //                 if(!wall) return;
        //                 wall.setActive(true).setVisible(true);
        //                 wall.enableBody = true;
        //                 wall.body.immovable = true;
        //             } else {
        //                 console.log('gen grass',Phaser.Math.Between(x1 + genX1, x1 + genX2), Phaser.Math.Between(y1 + genY1, y1 + genY2) );
        //                 let grass = this._grass.get(Phaser.Math.Between(x1 + genX1, x1 + genX2), Phaser.Math.Between(y1 + genY1, y1 +genY2));
        //                 if(!grass) return;
        //                 grass.setActive(true).setVisible(true);
        //             }
        //         }
        //     }
        // }
        for (var i = 0; i < 5; i++) {
            let grass = this._grass.get();
            if(!grass) return;
            
            //
            grass.setActive(true).setVisible(true).setPosition(Phaser.Math.Between(x1, x2), Phaser.Math.Between(y1, y2));
            let wall = this._wall.get();
            if(!wall) return;
            wall.setActive(true).setVisible(true).setPosition(Phaser.Math.Between(x1, x2), Phaser.Math.Between(y1, y2));
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
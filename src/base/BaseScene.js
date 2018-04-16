import Phaser from 'phaser'

export default class BaseScene extends Phaser.Scene {
    constructor (key) {
        super({
            key: key
        })
        this._nodes = {};
    }

    preload() {
        for (var key in this._nodes) {
            this._nodes[key].preload();
        }
    }

    create() {
        for (var key in this._nodes) {
            this._nodes[key].create();
        }
    }

    update() {
        for (var key in this._nodes) {
            this._nodes[key].update();
        }
    }

    addNode(node) {
        this._nodes[node.name] = node;
        return node;
    }

}

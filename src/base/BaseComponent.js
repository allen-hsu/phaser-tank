
export default class BaseComponent {
    constructor(scene, name) {
        this._name = name;
        this._scene = scene;
    }

    preload() {

    }

    create() {

    }

    update() {

    }

    get name() {
        return this._name;
    }

    get scene() {
        return this._scene;
    }
}
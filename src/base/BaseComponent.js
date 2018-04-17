
export default class BaseComponent {
    constructor(scene, name, target) {
        this._name = name;
        this._scene = scene;
        this._target = target;
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

    setTarget(target) {
        this._target = target;
    }

    get target() {
        return this._target;
    }
}
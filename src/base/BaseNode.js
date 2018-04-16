export default class BaseNode {
    constructor(scene, x, y) {
        this._scene = scene;
        this._x = x;
        this._y = y;
        this._components = {};
    }

    initComponent() {

    }

    preload() {
        this.initComponent();
        for (var key in this._components) {
            this._components[key].preload();
        }
    }

    create() {
        for (var key in this._components) {
            this._components[key].create();
        }
    }

    update() {
        for (var key in this._components) {
            this._components[key].update();
        }
    }

    addComponent(component, target) {
        this._components[component.name] = component;
        this._components[component.name].setTarget(target);
        return component;
    }

    get scene() {
        return this._scene;
    }
}
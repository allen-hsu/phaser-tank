export default class BaseNode {
    constructor(scene, x, y, name) {
        this._scene = scene;
        this._x = x;
        this._y = y;
        this._name = name;
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

    addComponent(component) {
        this._components[component.name] = component;
        return component;
    }

    getComponent(name) {
        return this._components[name]
    }

    get scene() {
        return this._scene;
    }
    
    get name() {
        return this._name;
    }
}
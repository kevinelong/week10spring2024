//FRAMEWORK
class Model {
    constructor(data) {
        this.data = data
    }
}

class View {
    constructor(model) {
        this.model = model;
    }
    render(model={}) { //get html
        return `base view`;
    }
}

class Controller {
    constructor(routes) {
        this.routes = routes
    }
    route(path, model) {
        return this.routes[path].render(model)
    }
}
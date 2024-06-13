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
/// TEST OUT FRAMEWORK 
class UserModel extends Model {
    constructor(id, first, last) {
        super({ id: id, first: first, last: last });
    }
}
class UserView extends View {
    render(userModel){
        return `# ${userModel.data.id} - <b>${userModel.data.last}, ${userModel.data.first} </b>`;
    }
}

class Sprite {
    constructor(name, location, direction) {
        this.name = name
        this.location = location
        this.direction = direction
    }
}
class Agent extends Sprite { //EXTENDS create an IS_A relationship
    constructor(name, location, direction) {
        super(name, location, direction);

        this.health = 100;
        this.inventory = []; //possessions
        this.gold = 0;
        this.isAlive = true;
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
    getStatus() {
        return { 
            name: this.name, 
            gold: this.gold, 
            inventory: this.inventory, 
            health: this.health, 
            isALive: this.isALive, 
            location: this.location, 
            direction: this.direction 
        }
    }
    move(newLocation){
        this.location = newLocation;
    }
}
class Player extends Agent{
    constructor(){
        super("hero", [5,5], [0,0])
    }
}
class Zombie extends Agent{
    constructor(number){
        super("zombie"+number, [9,9], [0,0])
    }    
}
class Game{
    constructor(){
        this.reset()
    }
    reset(){
        this.spriteList = [
            new Player(),
            new Zombie()
        ];
    }
    getStatus(){
        return {
            name : "Team Fortress X",
            spriteList : this.spriteList.map(s=>s.getStatus())
        }
    }
}
// // TEST
// const p = new Player([0,0], [0,0])
// console.log(JSON.stringify(p.getStatus()));
// p.takeDamage(25);
// console.log(JSON.stringify(p.getStatus()));

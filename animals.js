class Animal { //BASE CLASS - noun (person, place or thing)
    constructor(kind, noise) { //PARAMETERS TO NEW
        this.kind = kind   //PROPERTIES a variable inside
        this.noise = noise
    }
    speak() { //METHOD a function inside an object
        return `The ${this.kind} goes ${this.noise}.`
    }
}

// let dino = new Animal("t-rex", "roar"); //CREATE A NEW INSTANCE OF ANIMAL
// console.log(dino.speak()) //CALLING METHOD ON THE INSTANCE

// let animal2 = new Animal("lion", "roar"); //CREATE A NEW INSTANCE OF ANIMAL
// console.log(animal2.speak());//CALLING METHOD ON THE *OTHER* INSTANCE

class Pet extends Animal { // Pet IS_A animal
    constructor(name, kind, noise) {
        super(kind, noise); //call parent's constructor
        this.name = name; //add a third property
    }
    speak(punct=".") { // OVERRIDE A METHOD - replace with improved uses the 3rd
        let conjunction = "the";
        return `${this.name} ${conjunction} ${this.kind} goes ${this.noise}${punct}`
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name, "cat", "meow")
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name, "dog", "woof")
    }
}

let animals = [
    new Cat("Bianca"),
    new Cat("Fineley"),
    new Dog("Dandy"),
    new Dog("Koshka"),
    new Pet("Bessie", "cow", "chomp"),
    new Animal("t-rex", "roar"),
    new Animal("lion", "roar"),
    new Animal("bunny rabbit", "chitter")
]//end animal list

// animals.forEach(animal => console.log(animal.speak())); // log one at a time
console.log(animals.map(a=>a.speak()).join("\n")); //log all at once



// biana = new Cat("Bianca")
// console.log(biana.speak())

// fineley = new Cat("Fineley")
// console.log(fineley.speak())

// dandy = new Dog("Dandy")
// console.log(dandy.speak("!!!"))
// console.log(dandy.speak("....."))

// koshka = new Dog("Koshka")
// console.log(koshka.speak("..."))

// bessie = new Pet("Bessie", "cow", "chomp");
// console.log(bessie.speak())
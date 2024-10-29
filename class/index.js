class Attack {
    #place = 'Delhi'
    constructor(enemy) {
        this.enemy = enemy;
    }
    attack = (no) => {
        console.log(`Attacked ${this.enemy} ${no} th time at ${this.#place}`);
    }
    get readName(){
        console.log(this.#place, 'place');
    }
    set writeName(name) {
        this.name = name;
        console.log(name, 'name');
    }
}

class Alien { // Name of the class
    // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // These will be the object's methods.
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

class Bug {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}

class Robot extends Attack {
    constructor (name, phrase, enemy) {
        super(enemy);
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
    set writePlace(place) {
        this.place = place
    } 
}

const robo = new Robot("shree", "Hi", "Ravana");
robo.attack(10);
robo.writeName = "Shree";
console.log(robo.place);
//Space Battle Game
//Create Our ship with all of our propertie
  //Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed

// firepower is the amount of damage done to the hull of the target with a successful hit

// accuracy is the chance between 0 and 1 that the ship will hit its target

// Your spaceship, the USS HelloWorld should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// You could be battling six alien ships each with unique values.

class SpaceShip {
    constructor(name,hull, firePower, accuracy){
        this.name = name
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        
    }
    attack(ship){
        
         
    }
    
}

let me = new SpaceShip("USS HelloWorld", 20, 5, .7)

console.log(me);


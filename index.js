// Menu App Requirements:
// ---------------------
// 1. Must use at least one array
// 2. Must use at least two classes
// 3. Menu must include options to:
//    - Create elements
//    - View elements
//    - Delete elements

//kawaii cafe menu

//class Treats
    //food
    //drinks
class Treat{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

//class Menu
class Menu {
    constructor() {
        //treats array
        this.treats = [];
    }
    
    //see a menu


    //add treats
    //prompt for food
    //prompt for drink
    //create new treat and push treat into array
    addTreat(){
        let food = prompt("Enter Food Item:");
        let drink = prompt("Enter Drink Item:");
        this.treats.push(new Treat(food, drink))

    }
}


    //delete treats
    //view treats

    //start the menu

//instantiate the menu and invoke the start 
    
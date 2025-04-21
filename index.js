// Menu App Requirements:
// ---------------------
// 1. Must use at least one array
// 2. Must use at least two classes
// 3. Menu must include options to:
//    - Create elements
//    - View elements
//    - Delete elements

// Howl's Moving Café menu

// class Treats
//     food
//     drinks
class Treat {
    constructor(food) {
        this.food = food;
        //this.drink = drink;
    }
}

//see a Menu
class Menu {
    constructor() {
        // treats array
        this.treats = [
            new Treat("Calcifer’s Bacon & Eggs"),
            new Treat("Fire Roast Coffee"),
            new Treat("Sophie’s Sugar Cake"),
            new Treat("Lemon Tea"),
            new Treat("Totoro Cream Puffs"),
            new Treat("Acorn Hot Chocolate"),
            new Treat("Spirited Away Mochi"),
            new Treat("Haku’s Mint Tea"),
        ];
    }
    
    

    // add treats
    // create new treat and push treat into array
    addTreat() {
        let treat = prompt("Enter Treat Item:");
        this.treats.push(new Treat(treat));
    }

    // delete treats
    deleteTreat() {
        let index = prompt("Enter the index of the treat to delete:");
        if (index >= 0 && index < this.treats.length) {
            this.treats.splice(index, 1);
            alert("Treat deleted successfully!");
        } else {
            alert("Invalid index!");
        }
    }

    // view treats
    viewTreats() {
        let displayTreats = '';
        for (let i = 0; i < this.treats.length; i++) {
            displayTreats += `
            ${this.treats[i].food}`;
        }

        alert(`
            Treat Inventory:
            -----------------
            ${displayTreats}
            -----------------
        `);
    }

    // start the menu
    start() {
        while (true) {
            let choice = prompt(`
                Howl's Moving Café Menu:
                0. Exit Menu
                1. Add Treat
                2. View Treats
                3. Delete Treat
                Enter your choice (0-3):
            `);
    
            switch (choice) {
                case "0":
                    alert("Goodbye!");
                    return;
                case "1":
                    this.addTreat();
                    break;
                case "2":
                    this.viewTreats();
                    break;
                case "3":
                    this.deleteTreat();
                    break;
                default:
                    alert("Invalid choice! Try again.");
            }
        }
    }
}

// instantiate the menu and invoke the start
let menu = new Menu();
menu.start();
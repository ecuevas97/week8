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
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

// class Menu
class Menu {
    constructor() {
        // treats array
        this.treats = [];
    }
    
    // see a menu

    // add treats
    // prompt for food
    // prompt for drink
    // create new treat and push treat into array
    addTreat() {
        let food = prompt("Enter Food Item:");
        let drink = prompt("Enter Drink Item:");
        this.treats.push(new Treat(food, drink));
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
            ${this.treats[i].food} ${this.treats[i].drink}\n`;
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
                4. View All Treats
                Enter your choice (0-4):
            `);

            switch (choice) {
                case "1":
                    this.addTreat();
                    break;
                case "2":
                    this.viewTreats();
                    break;
                case "3":
                    this.deleteTreat();
                    break;
                case "4":
                    alert("Goodbye!");
                    return;
                default:
                    alert("Invalid choice! Try again.");
            }
        }
    }
}

// instantiate the menu and invoke the start
let menu = new Menu();
menu.start();

// Test treat (optional)
//let treat1 = new Treat("Totoro Cream Puffs", "Acorn Hot Chocolate");
//console.log(treat1);

//menu.addTreat();
//menu.addTreat();
//menu.viewTreats();
//menu.deleteTreat();
//menu.viewTreats();

menu.show
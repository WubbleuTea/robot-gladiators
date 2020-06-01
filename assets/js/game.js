var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators");

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of 'enemyAtack' from the vale of 'playerHealth and use that result to update the vale in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the consloe so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamaing."
    );

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();


/* var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10+10);
// what is this?
console.log("Our robot's name is " + playerName)

// this creates a function named "fight"

function fight() {
    window.alert("The fight has begun!");
}

// fight(); */
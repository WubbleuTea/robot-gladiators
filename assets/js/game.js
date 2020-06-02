var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }




console.log(enemyNames, enemyAttack, enemyHealth);

var playerMoney = 10;

var fight = function(enemyName) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    console.log(promptFight)

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
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
        // if player choses skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip)  {
            window.alert(playerName + " has decided to skip this fight.  Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        //if no (false), ask question again by running fight () again
        else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!")
    }

    
};

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}

// fight();

// Game States
// "Win" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
//  "LOSE" - Player robot's health is zero or less
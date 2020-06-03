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
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        // Alert users that they are starting the round


        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        console.log(promptFight)

        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip)  {
                window.alert(playerName + " has decided to skip this fight.  Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
            
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            console.log(playerMoney);
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of 'enemyAtack' from the vale of 'playerHealth and use that result to update the vale in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamaing."
        );

        // check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;
            // call fight function with enemy robot
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if (storeConfirm) {
                    shop();
                }
            }            
        } 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
     //play again
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame()
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? PLease enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL": // New case
        case "refill":
            if (playerMoney >= 7){
                window.alert("REfilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
            else {
                window.alert("You don't have enough money!")
            }

            break;
        case "UPGRADE": // New Case
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money!")
            }

            break;
        case "LEAVE": // New Case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};


startGame();
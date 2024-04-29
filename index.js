#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
console.log(chalk.yellow.bold("\n\t\t        Welcome to codewithYusra - Machli_Chappak_Game\n"));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t<<< ========================================================= >>> `));
let { userAns } = await inquirer.prompt([
    {
        type: "number",
        name: "userAns",
        message: (chalk.blueBright.bold("How many Fishes Do you want to chappak?"))
    }
]);
if (isNaN(userAns)) {
    console.log(chalk.red.bold("\n Write a number"));
}
else {
    async function fish_into_water(numFish = 1) {
        for (let i = 10; i > 0; i--) {
            let space = "".repeat(i);
            console.clear();
            for (let j = 0; j < numFish; j++) {
                console.log(space + chalk.green.bold("Machli"));
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        console.clear();
        for (let j = 0; j < numFish; j++) {
            console.log(chalk.blue.bold("Chappak"));
        }
    }
    fish_into_water(userAns);
}

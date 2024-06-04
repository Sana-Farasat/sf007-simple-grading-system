#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let header = chalkAnimation.rainbow('\n\t\t The Grading System');
header.start();
header.stop();
let ornamental1 = chalkAnimation.rainbow('\t\t ==================');
ornamental1.start();
ornamental1.stop();
let condition = true;
while (condition) {
    let totalmarks = 500;
    console.log(chalk.greenBright(`\n\t Your total marks of all subjects is ${totalmarks}.. \n\t Each subject carries equal marks!`));
    let subjectmarks = await inquirer.prompt([
        {
            name: 'urdu',
            type: 'number',
            message: chalk.blueBright(`\n Enter your marks of Urdu:`)
        },
        {
            name: 'english',
            type: 'number',
            message: chalk.blueBright(`\n Enter your marks of English:`)
        },
        {
            name: 'maths',
            type: 'number',
            message: chalk.blueBright(`\n Enter your marks of Maths:`)
        },
        {
            name: 'islamiat',
            type: 'number',
            message: chalk.blueBright(`\n Enter your marks of Islamiat:`)
        },
        {
            name: 'science',
            type: 'number',
            message: chalk.blueBright(`\n Enter your marks of Science:`)
        }
    ]);
    let allsubjectmarks = subjectmarks.urdu + subjectmarks.english + subjectmarks.maths + subjectmarks.islamiat + subjectmarks.science;
    console.log(chalk.greenBright(`\n\t Your obtained marks is ${allsubjectmarks}`));
    let obtainedmarks = await inquirer.prompt([
        {
            name: 'marks',
            type: 'number',
            message: chalk.blueBright(`\n Enter your obtained marks:`)
        }
    ]);
    let percentage = obtainedmarks.marks / totalmarks * 100;
    if (percentage >= 90 && percentage < 100) {
        console.log(chalk.greenBright('\n\t Grade A-One'));
        console.log(chalk.greenBright('\t Congratulations! Keep it up..'));
    }
    else if (percentage >= 80 && percentage < 89.9) {
        console.log(chalk.greenBright('\n\t Grade A'));
        console.log(chalk.greenBright('\t Excellent!'));
    }
    else if (percentage >= 70 && percentage < 79.9) {
        console.log(chalk.greenBright('\n\t Grade B'));
        console.log(chalk.greenBright('\t Good!'));
    }
    else if (percentage >= 60 && percentage < 69.9) {
        console.log(chalk.greenBright('\n\t Grade C'));
        console.log(chalk.greenBright('\t Satisfactory!'));
    }
    else if (percentage >= 50.9 && percentage < 59.9) {
        console.log(chalk.greenBright('\n\t Grade D'));
        console.log(chalk.greenBright('\t Needs Improvement!'));
    }
    else {
        console.log(chalk.redBright('\n\t Failed!'));
        console.log(chalk.redBright('\t Work Hard!'));
    }
    ;
    let ask = await inquirer.prompt({
        name: 'moregrades',
        type: 'list',
        message: (chalk.blueBright('Do you want to find more grades?')),
        choices: ['Yes', 'No']
    });
    ask.moregrades === 'Yes' ? (condition = true) : (condition = false);
}
;
let footer = chalkAnimation.rainbow('\n\t\t Thanks For Using');
footer.start();
footer.stop();
let ornamental2 = chalkAnimation.rainbow('\t\t ===============');
ornamental2.start();
ornamental2.stop();

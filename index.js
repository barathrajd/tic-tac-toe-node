import chalk from "chalk";
import figlet from "figlet";

const log = console.log

log(figlet.textSync(('Tic Tac Toe')))
log(`
    =================================
    ${chalk.bgRed.bold('How to play ?')}
    ${chalk.greenBright('1 - Have the fist player go first')}
    ${chalk.greenBright('2 - Have the second player go second')}
    ${chalk.greenBright('3 - Keep alternating moves', chalk.underline('until one of the players'))}
    ${chalk.greenBright('has drawn a row of three symbols', chalk.inverse('OR'), 'or no one can win')}
    =================================
`)


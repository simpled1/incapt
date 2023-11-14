/**
 * @file A simple module for handling user input using readline and chalk.
 * @module userInputModule
 */

'use strict'

const readline = require('readline');
const c = require('chalk');

/**
 * Creates a readline interface for user input.
 * @type {readline.Interface}
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


/**
 * Asynchronously prompts the user and resolves with the user's input.
 * @function
 * @async
 * @param {string} prompt - The prompt to display to the user.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 * @example
 * // example 1
 * const userInput = await I('What is your name?');
 * console.log('User input:', userInput);
 * 
 * // example 2
 * const a = await I('What is your name? ');
 * const b = await I('What is your age? ') 
 * console.log( `My name is ${a}. I am ${b} years old` )
 * 
 * // example 3
 * const x = await I('First number: ')
 * const y = await I('Second number: ')
 * console.log( `Sum is ${+x + +y}` )
 * 
 * // example 4 using thenables:
 * await I('What is your hobbby? ')
        .then(val => console.log(`My hobby is ${val}.`))
 */
async function I(prompt, options = {}) {
    const O = {
        'cyan': c.cyan,
        'green': c.green,
        'magenta': c.magenta,
        'blue': c.blue,
        'red': c.red,
        'yellow': c.yellow,
        'white': c.white,
        'bgCyan': c.bgCyan, // bgColors
        'bgGreen': c.bgGreen,
        'bgMagenta': c.bgMagenta,
        'bgBlue': c.bgBlue,
        'bgRed': c.bgRed,
        'bgYellow': c.bgYellow,
        'bgWhite': c.bgWhite,
        'italic': c.italic, // modifiers
        'underline': c.underline,
        'strikethrough': c.strikethrough
    }
    return new Promise((resolve) => {
        rl.question(`${(options.mc) ? O[options.mc]('⣿') : O['green']('⣿')} ${(options.pc) ? O[options.pc](prompt) : O['cyan'](prompt)}`, (ans) => {
            // if color exist -> check if bg exist -> check if mod exist -> finally apply them
            resolve((options.mod) ? O[options.mod]((options.bg) ? O[options.bg]((options.c) ? O[options.c](ans) : ans) : ans) : ans)
        });
    });
}


/**
 * Closes the read interface, ending the user input process.
 * @function
 * @example
 * const userInput = await I('What is your name?');
 * console.log('User input:', userInput);
 * 
 * // finally call C() to end the session.
 * C();
 */
function C() {
    rl.close();
}

module.exports = { I, C }

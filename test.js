const index = require("./index")

const { I, C } = index;

// Example usage
async function run() {

    // Test 1 : Placeholder testing 
    const a = await I("What is your name? ");
    const b = await I("What is your age? ") 

    console.log( `My name is ${a}. I am ${b} years old` )

    const x = await I('First number: ')
    const y = await I('Second number: ')

    console.log( `Sum is ${+x + +y}` )

    // Test : thenables
    await I("What is your hobbby? ")
        .then(val => console.log(`My hobby is ${val}.`))

    // with options
    const p = await I('Change marker color: ', {mc: 'magenta', pc: 'green', mod:'italic', bg: 'bgWhite', c: 'cyan' })
    console.log( p )
    // Close the input interface
    C();
}

run();
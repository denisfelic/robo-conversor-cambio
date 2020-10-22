
const exchange_converter = require('./exchange_converter.js');
const user_input = require('./user_input');

const robots = {
    user_input,
    exchange_converter,
}

console.log("Running bot conversor  =)");

async function start() {
    const cambio = get_input();
    await robots.exchange_converter(cambio)
}

start();


function get_input() {
    console.log('Quanto vale: ');
    const base = robots.user_input();
    if (base == null){
        process.exit(0);
    }
        
    console.log('Em: ')
    const final = robots.user_input();
    if (final == null){
        process.exit(0);
    }

    const cambio = {
        base,
        final
    }
    return cambio;
}
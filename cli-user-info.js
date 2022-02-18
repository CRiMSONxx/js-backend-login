
const JSONdb = require('simple-json-db');
const db = new JSONdb('db/database.json');

// import the readline module for work with stdin, or stdout.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter Email/"all" (enter "exit" to close app) : '
});

rl.prompt();

rl.on('line', (line) => {
    if (line.toLowerCase() === "exit") {
        console.log('\nExiting!\n');
        process.exit(0);        
    }else if (line.toLowerCase() === "all") {
        console.log(db.JSON());
    }else if (db.get(line.toLocaleLowerCase())) {
        console.log(db.get(line.toLocaleLowerCase()));
    } else {
        console.log("Email '" + line.toLocaleLowerCase() + "' tidak ditemukan");
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});

const JSONdb = require('simple-json-db');
const db = new JSONdb('db/database.json');
// You can also push directly objects
db.set('1','{test:"test", json: {test:["test"]}')
// Basic Knex setup
const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

// Get first name, last name, and date of famous people input from user
const firstName = process.argv[2];
const lastName = process.argv[3];
const birthdate = process.argv[4];

// Select famous people function
knex('famous_people').select('first_name', 'last_name', 'birthdate')
  .where('first_name', '=', firstName).orWhere('last_name', '=', lastName).orWhere('birthdate', '=', birthdate)
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
});
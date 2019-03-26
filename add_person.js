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

// Insert famous people function
knex('famous_people').insert([{'first_name': firstName, 'last_name': lastName, 'birthdate': birthdate}])
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
});
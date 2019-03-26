// Basic PostgreSQL setup
const pg = require("pg");
const settings = require("./settings");

// Connect client information
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

/* Get famous people input from user */
const name = process.argv[2];

// Get famous people function
console.log("Searching ...");
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE first_name = '${name}' OR last_name = '${name}'`, [], function(err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`Found ${result.rows.length} person(s) by the name '${name}':`);
    for (let i = 0; i < result.rows.length; i++) {
      console.log(`- ${i + 1}: ${result.rows[i].first_name} ${result.rows[i].last_name}, born '${result.rows[i].birthdate}'`);
    }
    client.end();
  });
});
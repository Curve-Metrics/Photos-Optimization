const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "realestatelistings",
  password: "password",
  port: 5432
});

client.connect()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

module.exports.connection = client;

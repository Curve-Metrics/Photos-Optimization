const { Client } = require("pg");
const client = new Client({
  user: "",
  host: "localhost",
  database: "real_estate_listings",
  password: "password",
  port: 5432
});

client.connect()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

module.exports = client;

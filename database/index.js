const { Client } = require("pg");
const client = new Client({
  user: "ubuntu",
  host: "3.141.107.99",
  database: "ubuntu",
  password: "password"
});

client.connect()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

module.exports = client;

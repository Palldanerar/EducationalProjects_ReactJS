const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2314",
  host: "localhost",
  port: 5432,
  database: "node_test",
});

module.exports = pool;

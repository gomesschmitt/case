const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: 'WW',
  port: 5432, // Porta padrão do PostgreSQL
});

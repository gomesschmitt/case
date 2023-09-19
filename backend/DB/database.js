const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: 'wolf123456',
  port: 5432, // Porta padrão do PostgreSQL
});
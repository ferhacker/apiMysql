const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Configurações da conexão com o banco de dados
const pool = mysql.createPool({
  host: 'db4free.net',
  user: 'usuariofhacker',
  password: 'Bombanco515',
  database: 'meubanco_mysql'
});

// Rota para buscar todos os dados
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');

    console.log(rows); // Exibe os dados no console

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

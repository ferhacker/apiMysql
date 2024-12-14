const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações da conexão com o banco de dados
const pool = mysql.createPool({
  host: 'db4free.net',
  user: 'usuariofhacker',
  password: 'Bombanco515',
  database: 'meubanco_mysql'
});

// Rota para buscar os dados
app.get('/usuarios', (req, res) => {
  pool.query('SELECT id, name, phone, email FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      res.status(500).send('Erro ao buscar dados');
    } else {
      console.log('Dados recebidos:', results);
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


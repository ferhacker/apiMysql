// index.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
});

// Rota para inserir um novo usuário
app.post('/users', (req, res) => {
  const { name, email, phone, address } = req.body;

  connection.query('INSERT INTO users (name, email, phone, address) VALUES (?, ?, ?, ?)',
    [name, email, phone, address],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Erro ao inserir usuário');
      } else {
        res.send('Usuário inserido com sucesso');
      }
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

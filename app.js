const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

//app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5749597',
  password: 'hdzfmLLeg7',
  database: 'sql5749597'
});

//connecting
connection.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySql connected...');
});

// Rota para inserir um novo usuário
app.post('/dados_usuario', (req, res) => {
  const { name} = req.body;

  connection.query('INSERT INTO dados_usuario (nome) VALUES (?)',
    [name],
    (error, results) => {
      if (error) {
        console.error(error);
        
        res.status(500).send('Erro ao inserir usuário');
      } else {
        res.send('Usuário inserido com sucesso');
      }
    });
   console.log(`tentei enviar`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


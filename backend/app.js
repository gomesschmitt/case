const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./DB/database');
const userRouter = require ('./routes/userRoutes')

app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


// permitir CORS policy erro (nao recomendado por causa da segurança, em teoria estou a aceitar receber pedidos de qualquer lado)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint para retornar dados da tabela
// Temporario para visualizar alguma coisa

/*
app.get('/api/toDos', (req, res) => {
  const data = [
    { id: 1, title: "titulo1", priority: "high",createdat: Date(), completed: false },
    { id: 2, title: "titulo2", priority: "high",createdat: Date(), completed: false },
  ];
  res.json(data);
});

*/

app.use('/api', userRouter);

/*
  app.get('/api', (req, res) => {
    console.log('cheguei1')
    const data = [
      { id: null, title: "", priority: "", completed: false },
      { id: null, title: "", priority: "", completed: false },
    ];
    res.json(data);
  });



  app.post('/api', (req, res) => {
    console.log('cheguei2')
    const data = [
      { id: null, title: "", priority: "", completed: false },
      { id: null, title: "", priority: "", completed: false },
    ];
    res.json(data);
  });
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

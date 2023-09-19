const express = require('express');
const app = express();


// permitir CORS policy erro (nao recomendado por causa da segurança, em teoria estou a aceitar receber pedidos de qualquer lado)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Permite qualquer origem
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint para retornar dados da tabela
app.get('/api/toDos', (req, res) => {
  const data = [
    { id: 1, title: "titulo1", priority: "high",createdat: Date(), completed: false },
    { id: 2, title: "titulo2", priority: "high",createdat: Date(), completed: false },
  ];
  res.json(data);
});

app.post('/api/toDos', (req, res) => {
  console.log('cheguei')
  const data = [
    { id: null, title: "", priority: "", completed: false },
    { id: null, title: "", priority: "", completed: false },
  ];
  res.json(data);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

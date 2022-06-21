const express = require('express'); //importa o Express
const cors = require('cors'); //importa o CORS
const port = 3000; //seta a porta 3000
const app = express(); //executa o Express via a const App
app.use(express.json()); //reconheça o formato JSON nas requisições
app.use(cors());

/*
app.get('/', function (req, res) {
  res.send('Testando 1, 2, 3...');
});
*/

const paletas = [
    {
      id: 1,
      sabor: 'Açaí com Leite Condensado',
      descricao:
        'Açaí muito gostoso.',
      foto: 'assets/images/acai-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Banana com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/banana-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Chocolate Belga',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/chocolate-belga.png',
      preco: 7.0,
    },    
  ];

  app.get('/paletas/find-paletas', (req, res) => {
    res.send(paletas);
  });

  app.get('/paletas/find-paleta/:id', (req, res) => {
    const idParam = req.params.id;
    const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
    res.send(chosenPaleta);
  });  

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

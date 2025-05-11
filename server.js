const express = require('express');
const app = express();
const path = require('path');

// Middleware para interpretar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (imagens e CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para exibir o formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para calcular a média e exibir o resultado
app.post('/calcular', (req, res) => {
  const nota1 = parseFloat(req.body.nota1);
  const nota2 = parseFloat(req.body.nota2);
  const nota3 = parseFloat(req.body.nota3);

  const media = (nota1 + nota2 + nota3) / 3;

  let resultado;
  let imagem;

  if (media >= 6) {
    resultado = `Aprovado! Sua média foi ${media.toFixed(2)}`;
    imagem = '/aprovado.png';
  } else {
    resultado = `Reprovado! Sua média foi ${media.toFixed(2)}`;
    imagem = '/reprovado.png';
  }

  // Enviar o resultado para o cliente
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Resultado da Média</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Resultado da Média</h1>
        <p>${resultado}</p>
        <img src="${imagem}" alt="Resultado" width="300">
        <br>
        <a href="/">Voltar</a>
      </body>
    </html>
  `);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

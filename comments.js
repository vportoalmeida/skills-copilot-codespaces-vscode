const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Define o status HTTP como 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo como texto simples
  res.end('Olá, mundo!'); // Responde com "Olá, mundo!"
});

// Define a porta e inicia o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});


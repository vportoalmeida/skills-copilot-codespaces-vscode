const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Olá, mundo!'); 
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});


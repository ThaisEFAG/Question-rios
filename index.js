//"type": "module",
//CommomJS = require
//ESmodule = import {} from ''
//type no package define o formato de imporação

// Inicializando o servidor
//node --watch arquivodoserver -> escuta automática de atualizações

// var usuarios = [
//   {
//     id: 1,
//     nome: "Aurora",
//     sobrenome: "Lobo",
//     email: "aurora@email.com.br",
//     senha: "aurora",
//     createdAt: "2024-08-20",
//   },
//   {
//     id: 2,
//     nome: "Amora",
//     sobrenome: "lence",
//     email: "amora@lab.com.br",
//     senha: "amora",
//     createdAt: "2024-08-20",
//   },
// ];

// const http = require("node:http");

// const server = http.createServer((request, response) => {
//   const { method, url } = request;

//   if (method === "GET" && url === "/usuarios") {
//     response.setHeader("Content-type", "application/json"); //spacification header: when return for user will be whith header json
//     return response.end(JSON.stringify(usuarios)); //JSON.stringify convert content for json: send response json
//   }
//   if (method === "POST" && url) {
//     response.statusCode = 401;
//     return response.end("sem permissão");
//   }

//   return response.end("Hello API");
// });

// const port = 3333;
// const hostname = "localhost";

// server.listen(port, hostname, () => {
//   console.log(
//     `Servidor está rodando na porta ${port}: http://${hostname}:${port}`
//   );
// });

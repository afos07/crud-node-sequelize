const fs = require('fs');
const path = require('path');

// criar uma pasta
// fs.mkdir(path.join(__dirname, '/teste'), {}, (error) => {
//  // callback
// });

// // criar arquivo
// fs.writeFile(path.join(__dirname, '/teste', 'teste.html'), '<h1>Hello node!<h1>', (error)=>{
//     // callback
// })


// Adicionar a um arquivo
fs.appendFile(path.join(__dirname, '/test', 'teste.html'), '<h2>Adicinado ao arquivo com node</h2>', (error)=>{
    // callback
})

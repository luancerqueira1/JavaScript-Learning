const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
   const items = [
     {
       title: 'D',
       message: 'esenvolver aplicaçoes/serviços de forma facil',
     },
     {
       title: 'E',
       message: 'js usa js para rendenizar o HTML',
     },
     {
       title: 'M',
       message: 'uito facil de usar',
      },
     {
       title: 'A',
       message: 'morzinho?',
     },
     {
       title: 'I',
       message: 'ncrivel',
     },
     {
       title: 'S',
       message: 'ensacional',
     },
   ];
   const subtitle = "uma linguagem de modelagem para a criaçao de paginas html utilizando javascript"
   res.render('pages/index', {
      qualitys: items,
      subtitle: subtitle,
   });
})
app.get("/sobre", function (req, res) {
   res.render('pages/about');
})

app.listen(8080);
console.log('rodando');
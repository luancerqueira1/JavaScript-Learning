
/*=============== Video 6 ===============*/

// let numero = 5;
// console.log(typeof numero)

// let float = 5.6
// console.log(typeof float)

// let textoComNumero = '455'
// console.log(typeof textoComNumero)

// let soma = float + textoComNumero
// console.log(soma)


/*=============== Video 7 ===============*/

// let nome = 'luan';
// let sobrenome = 'gama';

// let nomeCompleto = nome + ' ' + sobrenome;
// console.log(nomeCompleto)


/*=============== Video 8 ===============*/
// boolean = true or false


/*=============== Video 10 ===============*/
//OBJETOS

// let obj = {
//     nome: 'matheus ',
//     idade: 29,
//     profissao: 'programador',
//     trabalhando: true,
// };

// console.log( obj)
// console.log(typeof obj)

// //acessar o objeto
// console.log(obj.nome);

// console.log(obj.idade)
// console.log(obj.profissao)

// console.log('0 meu nome é' + ' ' + obj.nome)

// obj.graduacao = true
// console.log(obj)


/*=============== Video 11 ===============*/

// let arr = [5, 'luan', true,10]

// console.log(arr)
// console.count(arr[3])


/*=============== Video 12 ===============*/

// == IGUALDADE
// != DIFERENTE

// let idade = 18
// let idadeMinima = 18

// if (idade >= idadeMinima) {
//     console.log('pode dirigir')
// }
// else {
//     console.log('nao pode dirigir')
// }


/*=============== Video 14 ===============*/

// let nome = 'luan'

// if (nome == 'luan') {
//     console.log('o meu nome é luan')
// } else if(true){
//     console.log('meu nome nao é luan')
// }


/*=============== Video 15 ===============*/

// let numero = 51

// if (numero === 5) {
//     console.log(`o numero é: ${numero}`)
// }

// if (numero !== 5) {
//     console.log(`o numero nao é: ${numero}`)
// }

/*=============== Video 16 && 17 && 18 ===============*/

//OPARADORES LÓGICOS =  "&&""    "||"     "!""

// let idade = 24
// let nome = 'luan'

// if (idade == 24 && nome == 'luan') {
//     console.log('vai passar de ano')
// }
// else if (3 > 1){
//     console.log('vai perder fila da puta')
// }
// else  if((1 == 1 && 4 > 3) || nome == 'luan') {
//   console.log("Passou");
// }
// else if (nome === 'luan' && idade >= 14) {
//   console.log("Aqui passa!");
// }

// if (!true) {
//     console.log('true')
// }

// let meunome = 'luan'

// if (!(meunome == 'luan')) {
//     console.log('ok')
// }
// else {
//     console.log('express')
// }


/*=============== Video 19 ===============*/

// let x = 0

// while (x < 5) {
    
//     console.log('textando repeticao ' + x)
    
//     //incrementador
//     x++;
// }

// let arr = ['teste', 'textando ', ' a', 'b']
// let y = 0

// while (y <= 3) {
//     console.log(arr[y])

//     y++
// }

// var palavra = "Matheus"
// var i = 0;

// while (i <= 6) {
//     console.log(palavra[i]);

//     i++
// }


/*=============== Video 20 ===============*/

// let x = 1
// let y = 2

// console.log(x = x + y)
// console.log(x += y)

// console.log(x -= y)

// console.log(x *= y)

// console.log(x /= y)

// //loops
// console.log(x++);
// console.log(x--);

// while (x <= 100) {
//     console.log(x)

//     x*=2
// }


/*=============== Video 21 ===============*/

// for (var i = 0; i < 10; i++) {
//     console.log("Repetindo for: " + i);
// }

// var arr = [1,2,3,4,5,1]

// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }
// console.log(arr.length);
 

/*=============== Video 22 ===============*/

// for (let i = 10; i > 0; i--){
//     console.log(i)

//     if (i == 5) {
//         break;
//     }
// }
// console.log('deu break')

// var x = 10;

// while (x < 100) {
//     x += 10;
    
//     if (x === 60 || x === 90) {
//         console.log("continue");
//         continue;
//     }
//     console.log('testando continue' + x);
// }

/*=============== Video 23 ===============*/

//  FUNÇOES

// primeirafuncao()

// function primeirafuncao() {
//     console.log('luan')
// }

// function sayName(name) {
//     console.log(`meu nome é ${name}`)
// }

// sayName('luan')
// sayName('pedro')
// sayName('xavier')

// let nameBancoDeDados = 'guaxinin'
// sayName(nameBancoDeDados)

// function soma(a, b) {
//     let soma = a * b
//     return soma
// }

// let soma1 = soma(5,5)
// console.log(soma1)
// console.log(soma(5,2))

/*=============== Video 24 ===============*/

// let lista = ['laranja', 'maçã', 'pera', 'manga']

// let listaUl = document.createElement('ul')

// let body = document.getElementsByTagName('body')

// // console.log(body[0])
// body[0].appendChild(listaUl)

// let listaNoBody = document.getElementsByTagName('ul')
// console.log(listaNoBody[0])

// for (let i = 0; i < lista.length; i++){

//     let liFor = document.createElement('li')

//     let textoLi = document.createTextNode(lista[i])

//     liFor.appendChild(textoLi)
    
//     listaNoBody[0].appendChild(liFor)
// }


/*=============== Video 25 ===============*/
// let x = 0
// let y = 1

// console.log(x)
// escopo()

// function escopo() {
//     let z = 3
    
//     console.log(z)
//     console.log(x)
// }

// // console.log(z)
// escopo2()

// function escopo2() {
//     let z = 10

//     console.log(z)
// }


/*=============== Video 27 ===============*/
//parsefloat 10.0

// console.log(Number.parseFloat('12.999'))
// console.log(parseFloat('12.999'))
// //parseInt
// console.log(parseInt('12.999')) //inteiro
// console.log(parseInt('12')) //inteiro
// //toFixed
// console.log(12.0987.toFixed(1)) //inteiro
// //isNaN
// console.log(isNaN('teste'))
// console.log(isNaN(12))
// console.log(isNaN('12'))
// // max value    min value
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


/*=============== Video 28 ===============*/
// //length
// let meuNome = 'luan   gama   cerqueira'
// console.log(meuNome.length);

// //indexof
// console.log(meuNome[5])
// console.log(meuNome.indexOf('gama'))

// //replace
// let meuNovoNome = meuNome.replace('luan', 'naul')
// /*-----------------------------------------------------*/
// console.log(meuNome.replace('luan','naul'))


/*=============== Video 29 ===============*/
// let frase = 'ESTA E A FRASE QUE VAMOS MANIPULAR'
// let frase2 = 'esta e a frase que vamos manipular'

// console.log(frase.toLowerCase())
// console.log(frase2.toUpperCase())

//trim
// let nome = '         luan        '
// console.log(nome.trim())

//slpit
// console.log(frase.split(" "));
// var tags = "PHP, Javascript, HTML, CSS";
// console.log(tags.split(", "));

//lastindexof
// let frase3 = "esta e a frase que vamos manipular";
// console.log(frase3.lastIndexOf('vamos'))


/*=============== Video 30 && 31===============*/
// // Array

// let arr = [1, 2, 3, 4, 5,2,'luan']

// // Length  = quantos tem
// console.log(arr.length)

// // push  = adiciona
// arr.push('gama')
// console.log(arr.length)

// // Pop = remove no fim do array
// arr.pop()
// console.log(arr)

// // unshift  =  adicionar no começo
// arr.unshift('cer')
// arr.unshift('teste')
// console.log(arr);

// //shift =
// arr.shift()
// console.log(arr)

// //acessar o ultimo elemento
// console.log(arr[arr.length - 1])

// //isArray
// console.log(Array.isArray(6))
// console.log(Array.isArray(arr))
 
// //splice = adiciona elemento no meio
// let arr = [1,2,3,4,5,6,'luan']

// arr.splice(2, 1,100)
// console.log(arr)

// //indexof = acha em que posiçao o elemento está
// console.log(arr.indexOf('luan'))

// //join = junta tudo
// let arr2 = ['o', 'rato', 'roeu','my','blouse']
// console.log(arr2.join(' '))

// //reverse = reverter a mísera
// console.log(arr2.reverse().join(' '))


/*=============== Video 32 ===============*/
// // Objects
// let pessoa = {
//     nome: 'luan',
//     idade: 24,

//     falar: function () {
//         console.log('ola meu caro friend')
//     },
//     soma: function (a, b) {
//         return a + b
//     }
// }

// console.log(pessoa)
// console.log(pessoa.nome)
// pessoa.falar()
// let soma = pessoa.soma(3, 3)
// console.log(soma)


/*=============== Video 33 ===============*/


//  let pessoa = {
//     nome: 'luan',
//     idade: 24,

//     falar: function () {
//         console.log('ola meu caro friend')
//      },
//      dizerNome: function() {
//         console.log('meu nome é' +  this.nome)
//      },
//      fazerAniversario: function () {
//         this.idade += 1
//     },
// }

// pessoa.dizerNome()
// console.log(pessoa.idade)
// pessoa.fazerAniversario()
// pessoa.fazerAniversario()
// console.log(pessoa.idade)


/*=============== Video 35 ===============*/
// //tag
// let titulo = document.getElementsByTagName('h1')[0]
// console.log(titulo)


// let lis = document.getElementsByTagName('li')
// console.log(lis[1])

// //id
// let paragrafo = document.getElementById('paragrafo')
// console.log(paragrafo)

// //class
// let itensDaLista = document.getElementsByClassName('item');
// console.log(itensDaLista);


/*=============== Video 36 ===============*/
//querySelector e querySelectorAll

// let itensquery = document.querySelectorAll('.lista2 li')
// console.log(itensquery)

// let itensquery2 = document.querySelectorAll('.lista2 .item')
// console.log(itensquery2)

// let itensquery3 = document.querySelector(".lista");
// console.log(itensquery3);

// let span = document.querySelector("#paragrafo span");
// console.log(span);


/*=============== Video 37 ===============*/

// let title = document.querySelector("#title")

// //innerHtml
// title.innerHTML = 'titulo de teste'

// //textContent
// let title2 = document.querySelector("#title2")
// title2.textContent = 'testando com o textcontent'
// /*------------------------------------------------- */
// let title3 = document.querySelector("#title3").textContent = 'funciona merda';


/*=============== Video 38 ===============*/

// let novoParagrafo = document.createElement('p')
// let texto = document.createTextNode('este é o conteudo para colocar dentro do paragrafo que criamos')
// let texto2 = document.createTextNode('este é o conteudo para colocar dentro do paragrafo que Luan criou da cabeça dele vê se pode isso')

// novoParagrafo.appendChild(texto)
// console.log(novoParagrafo)

// let vaiNessa = document.querySelector('#vaiNessa')
// vaiNessa.appendChild(texto2)

// let body = document.querySelector('body')
// body.appendChild(novoParagrafo)


/*=============== Video 39 ===============*/
// //remover filho do elemento
// let container = document.querySelector('#container')
// let p = document.querySelector('#container p')

// container.removeChild(p)

// //remover o elemento em sí
// let subtitle = document.querySelector(".subtitle");
// subtitle.remove()


/*=============== Video 39 ===============*/

// // Inserindo elementos = appendChild e insertBefore

// let elemento = document.createElement('div')
// elemento.classList = 'div-criada' //adiciona uma classe

// console.log(elemento)

// let container = document.querySelector('#container')
// container.appendChild(elemento)

// //inssertbefore
// //criando e adicionando a classe
// let elemento2 = document.createElement('div')
// elemento2.classList = 'div-before'

// let elemento3 = document.querySelector('#container .div-before')

// console.log(elemento2)



// container.insertBefore(elemento2,elemento3)


/*=============== Video 41 ===============*/

// let elemento = document.createElement('h3')

// elemento.classList = 'testando-classe';

// let texto = document.createTextNode('este é o texto')

// elemento.appendChild(texto)

// console.log(elemento)

// //selecionar o elemnto que quero trocar
// let title = document.querySelector('#title')
// console.log(title)

// //selecionar o pai do elemnto
// // let body = document.querySelector("body");
// /*------------------------------------------ */
// let pai = title.parentNode;

// //trocar ps elementos
// pai.replaceChild(elemento,title)


/*=============== Video 42 ===============*/
//Adicionando atributo (setAttribu

// let title = document.querySelector('#title')

// title.setAttribute('class', 'testando-atributo')
// console.log(title)

// let btn = document.querySelector('#btn')
// btn.setAttribute('disabled' ,'disabled')

// let subtitle = document.querySelector(".subtitle");
// subtitle.setAttribute('id', 'subtitulo')

// //remover atributo
// let lista = document.querySelector(".lista");
// lista.removeAttribute('class')


/*=============== Video 43 ===============*/

// let title = document.querySelector('#title');

// title.style.backgroundColor = 'lightblue';
// title.style.color = "crimson";

// let lista = document.querySelector("ul");
// lista.style.cssText = "color:blue; background-color:pink;font-family:Segoe UI";


/*=============== Video 44 ===============*/

// console.log(document.body);
// console.log(document.head);
// console.log(document.links[0]);
// document.links[0].textContent = "Twitter";
// console.log(document.URL);
// console.log(document.title);
// document.title = 'video 44'


/*=============== Video 45 ===============*/
//callback


// function exibir(num) {
// console.log(`a operacao é ${num}` )
// }

// function soma(a , b, callback) {
//     let op = a + b;
//     callback(op);
// }
// function multiplicacao(a , b, cb) {
//     let op = a * b
//     cb(op)
// }

// soma(2, 2, exibir);
// multiplicacao(2, 4,exibir);


/*=============== Video 46 ===============*/

// //setTimeout
// setTimeout(function () {
//     alert('testandooo....');
// }, 2000 + 2000); // uma vez e acabou

// //setInterval
// setInterval(function () {
//     alert('elertando')
// },1000) //LOOOOOOOP Infinitooo

/*=============== Video 47 ===============*/
//clearTimeout

// let x = 0

// let myTimer = setTimeout(function () {
//     console.log('o x é 0')
// }, 1500)

// x = 5
// console.log(x)

// if (x > 0) {
//     clearTimeout(myTimer)
//     console.log('o x passou de 0')
// }

// //clearInterval
// let myInterval = setInterval(function () {
//     console.log('imprimindo interval')
// }, 1000)

// setTimeout(function () {
//     console.log('parrando de imprimir por')
//     clearInterval(myInterval)
// },3000)


/*=============== Video 48 ===============*/
//onload
// window.onload = function () {
//     console.log('carregou o DOM')
// }
// console.log('carregou o Js')


/*=============== Video 49 ===============*/
//click
// let btn = document.querySelector('#btn')
// console.log(btn)

// btn.addEventListener("click", function () {
//     console.log('clicou')
//     this.style.backgroundColor='blue'
// });

// let title = document.querySelector("#title");

// title.addEventListener("click", function () {
//   console.log("clicou");
//   this.style.backgroundColor = "blue";
// });

// var clique = document.querySelector("#clique");

// clique.addEventListener("click", function () {
//   var subtitle = document.querySelector(".subtitle");

//   subtitle.style.backgroundColor = "lightblue";
// });

// //bouble click = DBL
// let clique2 = document.querySelector('#clique2')
// clique2.style.backgroundColor='red'

// clique2.addEventListener('dblclick', function () {
//   let titulo = document.querySelector("#title");

//   titulo.style.backgroundColor="blue"
// })


/*=============== Video 50 ===============*/
// //Mouseover &&❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// let titulo = document.querySelector("#title");
  
// titulo.addEventListener('mouseover',function () {
//   this.style.backgroundColor='yellow'
// })

// // mouseout
// titulo.addEventListener("mouseout", function () {
//   this.style.backgroundColor = "purple";
// });

// // afetar outro elemento com mouseover
// let titulo2 = document.querySelector("#title2");

// titulo2.addEventListener("mouseover", function () {
//   let legenda = document.querySelector('#legenda')

//   legenda.classList.remove('hide')
// });
// titulo2.addEventListener("mouseout", function () {
//   let legenda = document.querySelector('#legenda')

//   legenda.classList.add('hide')
// });
// //❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️


/*=============== Video 51 ===============*/
//keydown
// document.addEventListener('keydown', function (event) {
//   console.log(event.key)

//   if (event.key === 'Enter') {
//     console.log('pertei enter')
//   }
// })

// //keyup
// document.addEventListener("keyup", function (e) {

//   if (e.key === "Enter") {
//     console.log('soltei o  enter');
//   }
// });

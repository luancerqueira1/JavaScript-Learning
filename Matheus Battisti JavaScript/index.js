
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


/*=============== Video 28 ===============*/
let frase = 'ESTA E A FRASE QUE VAMOS MANIPULAR'
let frase2 = 'esta e a frase que vamos manipular'

console.log(frase.toLowerCase())
console.log(frase2.toUpperCase())

//trim
// let nome = '         luan        '
// console.log(nome.trim())

//slpit
// console.log(frase.split(" "));
// var tags = "PHP, Javascript, HTML, CSS";
// console.log(tags.split(", "));

//lastindexof
let frase3 = "esta e a frase que vamos manipular";
console.log(frase3.lastIndexOf('vamos'))


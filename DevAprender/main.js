// let nome = "luan"; //string literal
// let idade = 25; // number literal
// let estaAprovado = true; //boolean
// let sobrenome = undefined; // Undefined
// let corSelecionado = null; // Redefinir um valor

// //objeto
// let pessoa = {
// 	name: "luan",
// 	lastName: "cerqueira",
// 	age: "24",
// 	city: "euclides",
// 	estaAprovado: "nao"
// }
// console.log(pessoa.name)

// //arrays
// let cores = ['azul', 'rosa', 'preto',
// 	{
// 	fruta:"maça",
// 	cor:"vermelho"

// }]
// console.log(cores[3].fruta)

// //functions
// let colorSite ="blue"
// function resetColor(cor,tom){
// 	colorSite = cor + tom
// }

// console.log(colorSite)
// resetColor("red"," light");
// console.log(colorSite);

// //Realizar um tarefa, não devolve nada
// function dizerNome () {
// console.log('jhonatan');
// }
// dizerNome ();
// function MultiplicarPorDois (valor){
// return valor* 2;
// }
// //console.log(Multiplicar Por Dois (5));
// let resultado = MultiplicarPorDois (5);
// console.log(resultado);


// // Operadores matematicos
// let salario = 100

// console.log(salario + salario)
// console.log(salario - salario)
// console.log(salario * salario)
// console.log(salario / salario)
// console.log(5 ** 5)

// // ++ -- operadores de incremento
// let idade = 18
// console.log(++idade)
// console.log(--idade)

// //operadores de atribuiçao =
// let valordetu = 100
// //valordetu = valordetu + valordetu
// valordetu += valordetu

// console.log(valordetu)

// //operadores de igualdade
// console.log(1 === 1)

// //operador ternario
// let pontos = 100
// let tipo = pontos > 100 ? "premium" : "comum"
// console.log(tipo)

// //oparadores logicos &&
// console.log(true && false)
// let maiorDeIdade = true
// let possue = false
// let podeAplicar = maiorDeIdade && possue
// console.log(podeAplicar)

// //oparadores logicos &&
// let maiorDeIdaden = true;
// let possuen = false;
// let podeAplicarn = maiorDeIdaden || possuen;
// console.log("pode aplicar " + podeAplicarn);

// //oparadores logicos (!)
// let candidato = !podeAplicarn
// console.log("candidato rescusado " + candidato)


 					/*FALSY*/
// undefined
// null
// 0
// false
// ''
// NaN

//           /*TROCAR VALORES DE UMA VARIAVEL*/
// let a = "vermelho"
// let b = "azul"

// let c = a
// a = b
// b = c
// console.log(a)
// console.log(b)

// //if else
// let hora = 10
// if (hora >= 6 && hora < 12 ) {
// 	console.log('bom dia')
// } else if (hora >= 12 && hora < 18) {
// 	console.log('boa tarde')
// } else {
// 	console.log('boa noite')
// }

// // Switch case
// let permissao;

// switch (permissao) {
// 	case 'comum':
// 		console.log("usuario comum")
// 		break
// 	case 'premium':
// 		console.log("usuario premium")
// 		break
// 	case 'vip':
// 		console.log("usuario vip")
// 		break
// 	default:
// 		console.log('usuario nao encontrado')
// }

// // FOR
// for (let i = 0; i < 10; i++){
// 	if (i % 2 !== 0) {
// 		console.log(i)
// 	}
// }

// // While loop
// let i = 5

// while (i >= 1) {
// 	if (1 % 2 !== 0) {
// 		console.log(i)
// 	}
// 	--i
// }

// // DO WHILE
// let i = 0
// do {
// 	console.log("digitando")
// 	i++
// }while(i < 10)

// // For In
// let pessoa = {
// 	nome: "luan",
// 	idade : 24
// }

// for (let chave in pessoa){
// 	console.log(pessoa)
// }

// const cores = ["red", "blue", "green"]

// for (let indice in cores) {
// 	console.log(cores[indice])
// }

// // For-of
// const cores = ["red", "blue", "green"]
// for (cor of cores) {
// 	console.log(cor)
// }

// //Escreva uma funçao que usa dois numeros e retorna o maior numero entre eles
// let num1 = 9
// let num2 = 9

// function maiorNumero() {
// 	if (num1 > num2) {
// 		return num1
// 	} else {
// 		return num2
// 	}
// 	// return num1 > num2 ? num1 : num2
// }
// console.log(maiorNumero())

//divisivel por 3 -> fizz
//divisivel por 5 -> buzz
//divivisivel por 3 e 5 -> fizzbuzz
//nao divisivel por 3 ou 5 -> o proprio numero
// nao é um numero -> nao é um numero

// const resultado = fizzBuzz(15)
// console.log(resultado)

// function fizzBuzz(entrada) {
// 	if (typeof entrada !== "number") {
// 		return "nao é um numero"
// 	}
// 	if (entrada % 3 === 0 && entrada % 5 === 0) {
//       return "fizzbuzz";
//    }
// 	if (entrada % 3 === 0) {
// 		return 'fizz'
// 	}
// 	if (entrada % 5 === 0) {
// 		return'buzz'
// 	}

// 	return entrada
// }

// //velocidade maxima de ate 70
// //a cada 5km acima do limite voce ganha 1 ponto
// //math.floor
// //caso pontos maior que 12 -> carteira suspendida

// verificarVelocidade(1)

// function verificarVelocidade(velocidade) {
// 	const velocidadeMaxima = 70
// 	const kmPorPonto = 5
// 	if (velocidade <= velocidadeMaxima) {
// 		console.log('ok')
// 	} else {
// 		const kmPorPonto = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
// 		if (pontos >= 12) {
// 			console.log('carteira suspensa')
// 		} else {
// 			console.log(`${kmPorPonto} na carteira`)
// 		}
// 	}
// }

// exibirTipo("oi")

// function exibirTipo(limite) {
// 	if (typeof limite !== 'number' )  {
// 		console.log(`${limite} nao é um numero `)
// 	}
// 	else if (limite % 2 === 0) {
// 		console.log(`${limite} é par`)
// 	 }
// 	else if (limite % 2 !== 0) {
// 		console.log(`${limite} é impar`)
// 	}
// }


// let filme = {
// 	titulo: 'vingadores',
// 	ano: 2018,
// 	personagem: 'thor'
// }
// exibirPropriedades(filme)
// function exibirPropriedades(obj){
// 	for (prop in obj)
// 		if (typeof obj[prop] === 'string') {
// 			console.log(prop, obj[prop])
// 		}
// }


// somar(10);
// function somar(limite) {
// 	let multiplos3 = 0;
// 	let multiplos5 = 0;
// 	for (i = 0; i <= limite; i++){
// 		if (i % 3 === 0)
// 			multiplos3 += i;
// 			if (i % 5 === 0)
// 			multiplos5 += i;
// 	}
// 	console.log(multiplos3 + multiplos5)
// }

// //media de nota escolar

// const array = [70, 10, 80]

// console.log(mediaDoAluno(array))
// function mediaDoAluno(notas) {
// 	const media = calcularMedia(notas)

// 	if (media < 59)
// 		return 'F'
// 	if (media < 69)
// 		return 'D'
// 	if (media < 79)
// 		return 'C'
// 	if (media < 89)
// 	return 'A'
// }


// function calcularMedia(arr) {
// 	let soma = 0;
//     for (let valor of arr) {
//       soma += valor;
//     }
//    return soma / arr.length;
// }


// exibir(10)
// function exibir(linhas) {
// 	for (let linha = 1; linha <= linhas; linha++) {
// 		let padrao = ''
// 		for (let i = 0; i < linha; i++){
// 			padrao += "*";
// 		}
// 		console.log(padrao)
// 	}
// }


// exibirprimo(15)
// function exibirprimo(limite) {
// 	for (let numero = 2; numero <= limite; numero++){
// 		if (numeroPrimo(numero)) console.log(numero);
// 	}
// }

// function numeroPrimo(numero) {
// 		for (let divisor = 2; divisor < numero; divisor++) {
//       if (numero % divisor === 0) {
//         return false
//       }
// 	}
// 	return true
// }

// //camel case
// function criarCelular(marcaCelular, tamanhoTela, CapacidadeBateria) {
// 	return {
// 		marcaCelular,
// 		tamanhoTela,
// 		CapacidadeBateria,
// 		ligar() {
// 			console.log("fazendo ligaçao")
// 		}
// 	}
// }

// const celular1 = criarCelular('motorola', 5.2, 5000)
// console.log(celular1)

// //pascal case
// function Celular(marcaCelular,tamanhoTela,CapacidadeBateria) {
// 	this.marcaCelular = marcaCelular,
// 	this.tamanhoTela = tamanhoTela,
// 	this.CapacidadeBateria = CapacidadeBateria
// 	this.ligar = function () {
// 		console.log('ligar')
// 	}
// }

// const celular = new Celular('moto g', 5.5, 4500)
// console.log(celular)

// //made by me
// function Pessoa(nome, idade, altura,estaVivo) {
// 	this.nome = nome,
// 	this.idade = idade,
// 	this.altura = altura
// 	this.estaVivo = estaVivo
// }

// const pessoa1 = new Pessoa("luan", 24, 1.75, true)
// console.log(pessoa1)

// const mouse = {
//   cor: "red",
//   marcar: "dazz",
// };
// mouse.velocidade = 5000;
// mouse.trocarDPI = function () {
//   console.log("mudando DPI ");
// };
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse);

// const celular = {
//       marcacelular:'ASUS',
//       tamanhoTela:{
//              vertical: 155,
//              horizontal: 75
//       },
//       ligar: function (){
//              console.log("Fazendo Ligação...");
//       }
// }

// const novoObjeto = Object.assign({
// 	bateria : 5000 // Adicoona mais coisas no objeto
// }, celular) // Clona objeto
// console.log(novoObjeto)


// // 	MATH
// console.log(Math.random())
// console.log(Math.max(2,3,7,9))
// console.log(Math.min(9,4,3,1))
// console.log(Math.floor(2.99))

// const mensagem = '   minha primeira mensagem'
// console.log(mensagem.includes ('primeira'))
// console.log(mensagem.includes('vermelho'))
// console.log(mensagem.startsWith('verde'))
// console.log(mensagem.endsWith('mensagem'))
// console.log(mensagem.indexOf ('primeira'))
// console.log(mensagem.replace('minha','sua'))
// console.log(mensagem.trim())
// console.log(mensagem.split(' '))


// const mensagem = `minha 'vigessima' mensagem`
// console.log(mensagem)


// //  DATE
// const data1 = new Date()
// let anoatual = data1.getFullYear()
// console.log(anoatual)
// console.log(data1)


// let endereco = {
// 	rua: 'mestre campos',
// 	cidade: 'euclides da cunha',
// 	cep: 48500000,
// }
// exibirEndereco(endereco)
// function exibirEndereco(endereco) {
// 	for (let chave in endereco) {
// 		console.log(chave, endereco[chave])
// 	}
// }


// function Endereco(rua, cidade, cep) {
// 	this.rua = rua,
// 	this.cidade = cidade,
// 	this.cep = cep
// }

// let endereco1 = new Endereco('mestre campos','euclides',48500000)
// let endereco2 = new Endereco('mestre campos','euclides',48500000)

// console.log(saoIguais(endereco1, endereco2))
// console.log(temMemoriaIgual())

// function saoIguais(endereco1, endereco2) {
// 	return endereco1.rua === endereco2.rua &&
// 			 endereco1.cidade === endereco2.cidade &&
// 			 endereco1.cep === endereco2.cep
// }
// function temMemoriaIgual() {
//   //ver se vem do mesmo lugar // const ou let
//   return endereco1 === endereco2;
// }

// let postagem = {
// 	titulo: 'bem vinds',
// 	mensagem: 'muito feliz por te ver aqui',
// 	autor: 'android',
// 	visualizacoes: 1200,
// 	comentarios: [{ autor: 'luan', mensagem: 'aff' },
// 					  { autor: 'zé', mensagem: 'bom dia' }],
// 	estaoAoVivo: true
// }

// console.log(postagem)

// //constructor function
// function Postagem(titulo, mensagem, autor) {
// 	this.titulo = titulo
// 	this.mensagem = mensagem
// 	this.autor = autor
// 	this.visualizacoes = 0
// 	this.comentarios = []
// 	this.estaoAoVivo = false
// }
// let mensagem1 = new Postagem('boas vindas','ahauhsuaush','luan')
// console.log(mensagem1)

//						faixa de preço
// //opcao 1
// let faixas = [
// 	{toolTip:'ate 700 ',minimo: 0, maximo: 700},
// 	{toolTip:'de 700 ate 1000',minimo: 700, maximo: 1000},
// 	{toolTip:'de 1000 ate 1200 ',minimo: 1000, maximo: 1200}
// ]

// //opçao 2 factory function
// function criarFaixaPreco(toolTip,minimo,maximo) {
// 	return {
// 		toolTip,
// 		minimo,
// 		maximo
// 	}
// }

// let faixa1 = [
//   criarFaixaPreco("ate 700", 1, 100),
//   criarFaixaPreco("de 700 ate 1000", 100, 1000),
//   criarFaixaPreco("de 1000 ate 1200", 1000, 2000),
// ];

// console.log(faixas)
// console.log(faixa1)

// ARRAYS Adicionando

// const arr = [1, 2, 3, 4, 5,4]
// // No inicio
// arr.unshift(0)
// console.log(arr);
// // meio
// arr.splice(2, 0,'A')
// console.log(arr);
// // Final
// arr.push('B')
// console.log(arr)

// // ARRAYS Removendo
// const arr2 = [1, 2, 3, 4, 5, 6];
// // No inicio
// arr2.shift()
// console.log(arr2);
// // No final
// arr2.pop()
// console.log(arr2);

// const numeros = [1, 2, 3, 4]
// console.log(numeros.indexOf(2));


// const marcas = [
//   { id: 1, nome: "a" },
//   { id: 2, nome: "b" },
// ];
// const marca = marcas.find(function (marca) {
//   return marca.nome === "a";
// });
// console.log(marca);

// // JAVASCRIPT AULA 58 ESVAZIANDO UM ARRAY
// let numeros=[1,2,3,4,5,6];
// let outros=numeros;
// // Solução1
// // numeros = []
// // console.log(outros);
 
// // Solução2
// // numeros.length=0;
// // console.log(numeros);
// // console.log(outros);
          
// // Solução3
// numeros.splice(0, numeros.length);
// console.log(numeros);
// console.log(outros);

// // Combinando arrays
// const primeiro = [1, 2, 3, 4, 5]
// const segundo = [6, 7, 8, 9]
// // Combinar
// // const combinando = primeiro.concat(segundo)
// /*--------------------------------------------- */
// const combinando = [...primeiro,...segundo];
// console.log(combinando)
// // Dividir
// const cortado = combinando.slice(1,3)
// console.log(cortado);

// const numeros = [1,2,3,4,5];
// const combinado = numeros.join('.');
// console.log(combinado);
// const frase="olá bem vindo ao curso";
// const resultado = frase.split(' ');
// console.log(resultado);
// console.log(resultado.join('-'));













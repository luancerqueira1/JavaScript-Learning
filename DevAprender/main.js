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

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

//oparadores logicos &&
let maiorDeIdaden = true;
let possuen = false;
let podeAplicarn = maiorDeIdaden || possuen;
console.log("pode aplicar " + podeAplicarn);

//oparadores logicos (!)
let candidato = !podeAplicarn
console.log("candidato rescusado " + candidato)
const objs = [
  {
    nome: "luan",
    idade: 24,
    esta_trabalhando: true,
    detalhes: {
      profissao: "programador",
      empresa: "empresa x",
    },
    hobbies: ["nada", 1, true, "correr"],
  },
  {
    nome: "joao",
    idade: 30,
    esta_trabalhando: true,
    detalhes: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["academia"],
  },
];

//converter objeto para json
const jsonData = JSON.stringify(objs);
console.log(jsonData);

//converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});

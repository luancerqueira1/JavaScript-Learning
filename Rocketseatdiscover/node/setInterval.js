// setinterval ia rodar uma funçao a cada segundo varias  vezes 
//depois de x milissegundos
const timeOut = 1000;
const checking = () => {
  console.log('checking');
};
let interval =  setInterval(checking, timeOut);
console.log('mostrar');
clearInterval(interval)

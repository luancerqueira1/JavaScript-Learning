// Rodar uma fonçao depois de x segundos
const timeOut = 3000;
const finished = () => {
   console.log('done');
};
setTimeout(finished, timeOut);
console.log('mostrar');
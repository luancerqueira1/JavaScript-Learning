let hole = document.querySelector('#hole');
let game = document.querySelector('#game');
let result = document.querySelector('#result');
let text = document.querySelector('#text');
let score = 0;
let jumping = 0;


hole.addEventListener('animationiteration', ranHole);

function ranHole() {
   let random = -((Math.random() * 350 )+ 150);
   hole.style.top = random + "px";
   score++;
}

let fall =  setInterval(() => {
   let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
   if (jumping == 0) {
      bird.style.top = (birdTop + 2) + 'px';
   }
   let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
   let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('holeTop'));
   let hTop = (500 + holeTop);
   if ((birdTop > 450) || ((blockLeft < 50) && (blockLeft>- 50)&&(birdTop< hTop) || (birdTop > hTop+100))) {
      result.style.display = 'block';
      text.innerText = `you final iscore is : ${score} `;
      game.style.display = 'none';
      score = 0;
   }
}, 10);

window.addEventListener('keydown', hop);
function hop() {
   jumping = 1;

   let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
   if (birdTop > 6) {
      bird.style.top = (birdTop - 40) + 'px';
   }
   setTimeout(() => {
      jumping = 0
   }, 100);

}

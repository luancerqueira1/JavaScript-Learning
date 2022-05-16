const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

const newYears = "13, aug ,2022";
console.log(newYears);

function countDwon() {
	
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

	const totalseconds = new Date(newYearsDate - currentDate) / 1000	
	const days = Math.floor(totalseconds / 3600 / 24);
	const hours = Math.floor(totalseconds / 3600) % 24;
	const minutes = Math.floor(totalseconds / 60) % 60;
	const seconds = Math.floor(totalseconds % 60);
	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML =  formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);
	
}
function formatTime(time) {
	return time < 10 ? `0${time}` : time
}

setInterval(countDwon, 1000);
countDwon();

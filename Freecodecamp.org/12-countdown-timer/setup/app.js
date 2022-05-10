const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2022,4,10,18,15,0)
const futureDate = new Date(tempYear,tempMonth, tempDay + 10,11,30,0)
const year = futureDate.getFullYear() 
const hours = futureDate.getHours()
const minuts = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]; 

giveaway.textContent = `ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minuts}`

// Future time in ms
const futureTime = futureDate.getTime()


function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today
  // 1s = 100ms
  // 1m = 60s
  // 1h = 60min
  // 1D - 24h

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const ondeHour = 60 * 60 *1000
  const oneMinute = 60 * 1000
  
  // Calculate all values
  let days = t / oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay)/ ondeHour)
  let minutes = Math.floor((t % ondeHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  // Set values array 
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    } else {
      return item;
    }
    
  }

  items.forEach(function (item , index) {
    item.innerHTML = format(values[index]); 
  })
  if (t < 0) {
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">Sorry ended</h4>`
  }
}
// countdown
let countDown = setInterval(getRemainingTime,1000)
getRemainingTime()
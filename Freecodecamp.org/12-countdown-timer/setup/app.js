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

let futureDate = new Date(2022, 4, 24, 11, 30, 0)

const year = futureDate.getFullYear() 
const hours = futureDate.getHours()
const minuts = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()
giveaway.textContent = `ends on ${date} ${month} ${year} ${hours}:${minuts}`


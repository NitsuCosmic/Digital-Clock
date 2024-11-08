const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function showTime() {
  const date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  hours.textContent = String(hour)
  minutes.textContent = String(min)
  seconds.textContent = String(sec)
}

setInterval(showTime, 1000)

showTime()
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function showTime() {
	const date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	hours.textContent = String(hour).padStart(2, "0");
	minutes.textContent = String(min).padStart(2, "0");
	seconds.textContent = String(sec).padStart(2, "0");
}

setInterval(showTime, 1000);

showTime();

const clock = document.querySelector("#clock");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const formatInput = document.querySelector("#format-input");
const format = document.querySelector("#format")
let isAm_pm = false;

function showTime() {
	const date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	if (isAm_pm) {
		const am_pm = hour >= 12 ? "PM" : "AM";
		hour = hour % 12 || 12;
		hours.textContent = String(hour).padStart(2, "0");
		format.textContent = am_pm;
		format.style.display = "flex"
	} else {
		format.style.display = "none"
	}
	hours.textContent = String(hour).padStart(2, "0");
	minutes.textContent = String(min).padStart(2, "0");
	seconds.textContent = String(sec).padStart(2, "0");
}

setInterval(showTime, 1000);

showTime();

formatInput.addEventListener("click", () => {
	isAm_pm = !isAm_pm;
});

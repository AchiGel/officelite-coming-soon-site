const btns = document.querySelectorAll(".btn");

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("sign-up.html");
  });
});

const days = document.querySelector(".time-days h2");
const hours = document.querySelector(".time-hours h2");
const minutes = document.querySelector(".time-minutes h2");
const seconds = document.querySelector(".time-seconds h2");

function countDown() {
  const finalTime = new Date("Nov 4, 2024");
  const currentTime = new Date().getTime();
  const distance = finalTime - currentTime;
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((distance % (1000 * 60)) / 1000);
  days.textContent = day;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
}

setInterval(countDown, 1000);

const formField = document.querySelector("#formField");
const formFieldInputs = formField.querySelectorAll("input");
const formFieldButton = formField.querySelector(".btn");

formField.addEventListener("submit", (e) => {
  e.preventDefault();
  formFieldInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.placeholder = "Text Field Error";
    } else {
      input.classList.remove("error");
    }
  });
});

formField.addEventListener("change", (e) => {
  e.preventDefault();
  formFieldInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.placeholder = "Text Field Error";
    } else {
      input.classList.remove("error");
    }
  });
});

//----------- Timer ----------------//

const days = document.querySelector(".time-days h2");
const hours = document.querySelector(".time-hours h2");
const minutes = document.querySelector(".time-minutes h2");
const seconds = document.querySelector(".time-seconds h2");

const dateTillOpen = new Date("Nov 4, 2024");

function setCounterDown() {
  const now = new Date().getTime();

  const distance = dateTillOpen - now;

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

setInterval(setCounterDown, 1000);

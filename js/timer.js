import { day, monthFormBD, year } from "./variables";

const months = {
  январь: 1,
  февраль: 2,
  март: 3,
  апрель: 4,
  май: 5,
  июнь: 6,
  июль: 7,
  август: 8,
  сентябрь: 9,
  октябрь: 10,
  ноябрь: 11,
  декабрь: 12,
};

const month = monthToNumber(`${monthFormBD}`);

//Преобразование месяца строки в число
function monthToNumber(monthName) {
  monthName = monthName.toLowerCase();
  const monthNumber = months[monthName];
  if (monthNumber) {
    return monthNumber;
  } else {
    return "Некорректное название месяца";
  }
}

//Таймер
const countDownDate = new Date(`${month} ${day}, ${year} 00:00:00`).getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").style.display = "none";
    document.getElementById("timer-info").style.display = "none";
    document.querySelector(".order__timer").innerHTML = "Акция истекла!";
    document.querySelector(".order__timer").style.fontWeight = "bold";
  }
}, 1000);

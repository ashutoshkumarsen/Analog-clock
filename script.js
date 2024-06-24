const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const day2 = document.querySelector(".date");
const time = document.querySelector(".digital");

setInterval(() => {
  let day = new Date();

  let ms = day.getMilliseconds() * deg;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg + ms / 1000;
  let month = day.getMonth() + 1;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  day2.innerHTML =
    day.getDate() +
    "/" +
    month +
    "/" +
    day.getFullYear() +
    "<br>" +
    +day.getHours() +
    ":" +
    day.getMinutes() +
    ":" +
    day.getSeconds();
}, 1);

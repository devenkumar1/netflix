const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const btn1 = document.querySelector(".add-btn-1");
const btn2 = document.querySelector(".add-btn-2");
const btn3 = document.querySelector(".add-btn-3");
const btn4 = document.querySelector(".add-btn-4");
const btn5 = document.querySelector(".add-btn-5");
const btn6 = document.querySelector(".add-btn-6");

btn1.addEventListener("click", () => {
  if (answer1.style.display == "none") {
    btn1.src = "ot_close.svg";
    answer1.style.display = "block";
  } else {
    btn1.src = "download.png";
    answer1.style.display = "none";
  }
});

btn2.addEventListener("click", () => {
  if (answer2.style.display == "none") {
    btn2.src = "ot_close.svg";
    answer2.style.display = "block";
  } else {
    btn2.src = "download.png";
    answer2.style.display = "none";
  }
});

btn3.addEventListener("click", () => {
  if (answer3.style.display == "none") {
    btn3.src = "ot_close.svg";
    answer3.style.display = "block";
  } else {
    btn3.src = "download.png";
    answer3.style.display = "none";
  }
});

btn4.addEventListener("click", () => {
  if (answer4.style.display == "none") {
    btn4.src = "ot_close.svg";
    answer4.style.display = "block";
  } else {
    btn4.src = "download.png";
    answer4.style.display = "none";
  }
});

btn6.addEventListener("click", () => {
  if (answer6.style.display == "none") {
    btn6.src = "ot_close.svg";
    answer6.style.display = "block";
  } else {
    btn6.src = "download.png";
    answer6.style.display = "none";
  }
});

btn5.addEventListener("click", () => {
  if (answer5.style.display == "none") {
    btn5.src = "ot_close.svg";
    answer5.style.display = "block";
  } else {
    btn5.src = "download.png";
    answer5.style.display = "none";
  }
});

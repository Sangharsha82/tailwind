let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

let div1 = document.querySelector(".bt1");
let div2 = document.querySelector(".bt2");
let div3 = document.querySelector(".bt3");
let div4 = document.querySelector(".bt4");

const show1 = () => {
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
  div3.classList.add("hidden");
  div4.classList.add("hidden");

  console.log("btn pressed");
};
const show2 = () => {
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
  div3.classList.add("hidden");
  div4.classList.add("hidden");
  console.log("btn pressed2");
};
const show3 = () => {
  div2.classList.add("hidden");
  div1.classList.add("hidden");
  div3.classList.remove("hidden");
  div4.classList.add("hidden");
  console.log("btn pressed3");
};

const show4 = () => {
  div2.classList.add("hidden");
  div1.classList.add("hidden");
  div3.classList.add("hidden");
  div4.classList.remove("hidden");
};

btn1.addEventListener("click", show1);
btn2.addEventListener("click", show2);
btn3.addEventListener("click", show3);
btn4.addEventListener("click", show4);

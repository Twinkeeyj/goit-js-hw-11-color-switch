const  colors  =  [ 
  '#FFFFFF' , 
  '#2196F3' , 
  '#4CAF50' , 
  '#FF9800' , 
  '#009688' , 
  '#795548' , 
];

const start = document.body.querySelector('[data-action="start"]');
const stop = document.body.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let intervalId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomCol = randomIntegerFromInterval(0, colors.length - 1);
const changeColor = function () {
    start.setAttribute('disabled', true)
  intervalId = setInterval(() => {
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomCol = randomIntegerFromInterval(0, colors.length-1)
      body.style.backgroundColor = `${colors[randomCol]}`
        console.log(colors[randomCol]);
    }, 1000);
};

const stopColor = function () {
    clearInterval(intervalId);
    start.removeAttribute('disabled');
    
};


start.addEventListener('click', changeColor);
stop.addEventListener('click', stopColor);



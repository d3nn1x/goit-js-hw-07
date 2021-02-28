// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего
// рендерится коллекция. При нажатии на кнопку Очистить, коллекция
// элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число. Функция создает столько div, сколько указано в
// amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputValue = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const divBoxEl = document.querySelector('#boxes');


const createBoxes = function(amount) {
for(let i =1; i<=amount; i+=1){
  let width =30;
  let height=30;
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  divBoxEl.insertAdjacentHTML("beforeend",
  `<div style='width:${width +i*10}px; height:${height +i*10}px;
  background-color: rgb(${red}, ${green}, ${blue});
  text-align: center;'>${i}</div>`)
}
}

const destroyBoxes = function () {
  divBoxEl.innerHTML=''
  inputValue.value=''
}

const render = ()=>{
  createBoxes(inputValue.value)
}

renderBtnEl.addEventListener('click', render);
destroyBtnEl.addEventListener('click', destroyBoxes )
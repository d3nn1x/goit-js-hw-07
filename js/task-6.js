// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data-length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и
// invalid.

const input = document.querySelector("#validation-input");
console.log(input.getAttribute("data-length"));


input.addEventListener("blur", (e) => {
  console.log(input.value.length);
  console.log(input.getAttribute("data-length"));
  if (input.getAttribute("data-length") == input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});


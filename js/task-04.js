

// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const startValue = document.querySelector("#value");
let  counterValue = 0;
buttonDecrement.addEventListener("click", () => {
     counterValue -=1;
     startValue.textContent = counterValue;
});
buttonIncrement.addEventListener("click", () => {
     counterValue +=1;
     startValue.textContent = counterValue;
});



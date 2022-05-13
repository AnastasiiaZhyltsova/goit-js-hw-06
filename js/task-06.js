
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("input", () => {
    if (textInput.value.length >= textInput.dataset.length) {
        textInput.classList.add("valid");
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove('valid');
    }        
});

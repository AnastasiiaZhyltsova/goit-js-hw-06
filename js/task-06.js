
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.
const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
       textInput.classList.add("invalid");
    if (textInput.value.length === +textInput.dataset.length) {
        textInput.classList.replace("invalid", 'valid' );
        // textInput.classList.remove();    
    }    
});

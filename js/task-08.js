
const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    const dataBase = {};
    if (email.value === "" || password.value === "") {
        alert(`Please fill in all fields`);
    } else {
        dataBase.email = email.value;
        dataBase.password = password.value;
        event.currentTarget.reset(); 
    }

        console.log(dataBase); 
    
        // очистит поля от заполненной информации - reset()
}


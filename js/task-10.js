function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    controls: document.querySelector('div#controls'),
    input: document.querySelector('input'),
    buttonBoxesCreate: document.querySelector('[data-create]'),
    buttonBoxesDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('div#boxes'),
}  

refs.buttonBoxesCreate.addEventListener('click', createBoxes)
function createBoxes(amount) {
    const elementDiv = document.createElement('div');
    elementDiv.style.width = '30px';
    elementDiv.style.height = '30px';
    elementDiv.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(elementDiv);  
}

refs.buttonBoxesDestroy.addEventListener('click', destroyBoxes)

function destroyBoxes() { 
    boxes.innerHTML = '';

}

console.log(refs.createBoxes);
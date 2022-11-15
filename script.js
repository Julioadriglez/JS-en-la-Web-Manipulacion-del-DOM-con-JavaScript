const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    const input = document.querySelector('[data-form-input]');
    evento.preventDefault();
    console.log("Crear tarea");
    console.log(input.value);
}
console.log(btn);

//Arrow functions o funciones anonimas
btn.addEventListener("click",createTask);


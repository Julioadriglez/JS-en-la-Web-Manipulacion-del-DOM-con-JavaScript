( () => {
    const btn = document.querySelector('[data-form-btn]');
    const createTask = (evento) => { 
        evento.preventDefault(); //Para que no se reinicie la pagina cuando apriente el boton agregar
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li");
        task.classList.add('card')
        input.value = ""; //para limpiar el input despues de enviar el texto
        //backticks 
        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");       
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        //task.innerHTML = content;//manda el contenido al formulario
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };

    //Arrow functions o funciones anonimas
    btn.addEventListener("click",createTask);
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    };

    //Immediately invoked function expression IIFE
    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas"); //agrega fas la clase 
        element.classList.toggle("completeIcon"); //togle verifica si exixte la clase si existe la quita y sino la pone
        element.classList.toggle("far"); //elinima la clase 
    };
    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
        i.addEventListener('click',delateTask);
        return i;
    };
    const delateTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();//remove() elmina todo lo que se le paso en parent
    };
})();


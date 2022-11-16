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
export default checkComplete;
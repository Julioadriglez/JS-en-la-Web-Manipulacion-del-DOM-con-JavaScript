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

export default deleteIcon;
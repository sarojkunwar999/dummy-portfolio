let button = document.getElementById("openmodalbutton");
let closebutton = document.getElementById("closebutton");
let modalcontainer = document.getElementById("modalcontainer");

function openModal() {
    // OPEN THE MODAL
    modalcontainer.style.display = 'block';
}

function closeModal() {
    // CLOSE THE MODAL
    modalcontainer.style.display = 'none';
}

button.addEventListener("click", openModal);
closebutton.addEventListener("click", closeModal);
const categoryModal = new bootstrap.Modal(document.getElementById('category-modal'));
const categoryButton = document.querySelector('#category-button');
const categoryForm = document.querySelector('.category-form');

function showModal(){
    categoryModal.show();
}

function hideModal(){
    categoryModal.hide();
}

categoryButton.addEventListener('click', showModal);
// categoryForm.addEventListener('submit', loginFormHandler);

console.log("anything")
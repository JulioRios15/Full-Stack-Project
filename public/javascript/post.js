const postModal = new bootstrap.Modal(document.getElementById('post-modal'));
const postButton = document.querySelector('#post-button');
const postForm = document.querySelector('.post-form');

function showModal(){
    postModal.show();
}

function hideModal(){
    postModal.hide();
}

postButton.addEventListener('click', showModal);
// postForm.addEventListener('submit', loginFormHandler);
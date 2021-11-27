const modal = new bootstrap.Modal(document.getElementById('login-modal'));
const loginButton = document.querySelector('#login-button');
const loginForm = document.querySelector('.login-form');

async function loginFormHandler(event){
    event.preventDefault();
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if(email && password){
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            hideModal();
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

function showModal(){
    modal.show();
}

function hideModal(){
    modal.hide();
}


loginButton.addEventListener('click', showModal);
loginForm.addEventListener('submit', loginFormHandler);
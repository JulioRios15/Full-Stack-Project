async function signupFormHandler(event){
    event.preventDefault();
    const email = document.querySelector('#signup-email').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if(email && username && password){
        const response = await fetch('api/users', {
            method: 'post',
            body: JSON.stringify({email, username, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            //TODO:
            // repalce dashboard page with categories option selections page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
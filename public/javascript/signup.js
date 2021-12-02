let signupModal = new bootstrap.Modal(document.getElementById('signup-modal'));
const signupButton = document.querySelector("#signup-button");
const categoryItems = document.getElementsByClassName('category-item');

async function signupFormHandler(event){
    event.preventDefault();
    const email = document.querySelector('#signup-email').value.trim();
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const categories = getSelectedCategories();

    if(email && username && password){
        const response = await fetch('api/users', {
            method: 'post',
            body: JSON.stringify({email, username, password, categories}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

//Modal Functions
function showModal(){
    signupModal.show()
}
function hideModal(){
    signupModal.hide();
}

function getSelectedCategories(){
    //string array of selected categories
    let data = [];

    for (let i = 0; i < categoryItems.length; i++) {
        const checkbox = categoryItems[i].querySelector('input');
        const label = categoryItems[i].querySelector('label');

        if(checkbox.checked){
            data.push(label.innerHTML);
        }
    }

    return data;
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
signupButton.addEventListener('click', showModal);
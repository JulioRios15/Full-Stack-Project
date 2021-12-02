const postModal = new bootstrap.Modal(document.getElementById('post-modal'));
const postButton = document.querySelector('#post-button');
const postForm = document.querySelector('.post-form');
const postTitle = document.querySelector('#post-title');
const postCategory = document.querySelector('#post-category');
const postImage = document.querySelector('#post-image');
const imageForm = document.querySelector(`#image-form`);



async function addPostHandler(event){
    event.preventDefault();
    console.log("Add Post");

    const title = postTitle.value.trim();
    const categoryName = postCategory.value.trim();
    const imageFile = postImage.files[0];

    console.log(imageFile);

    const formData = new FormData();
    formData.append("image", imageFile, imageFile.name);

    const url = `/api/posts/?category_name=${categoryName}&title=${title}`;
    const response =  await fetch(url, {
        method: 'post',
        data: formData,  
        headers: {
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM"
        }    
    });

    console.log(response);

}
function showModal(){
    postModal.show();
}

function hideModal(){
    postModal.hide();
}

postButton.addEventListener('click', showModal);
postForm.addEventListener('submit', addPostHandler);
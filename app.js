function previewImage(event) {
    console.log('previewImage');
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('preview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}

window.addEventListener('DOMContentLoaded', (event) => {

document.getElementById('form').addEventListener('submit', function(event) {
    console.log('llega');
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById('name').value;
    var photo = document.getElementById('photo').files[0]; // This is a File object
    var instagram = document.getElementById('instagram').value;
    var facebook = document.getElementById('facebook').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var phone = document.getElementById('phone').value;

    console.log(name, photo, instagram, facebook, whatsapp, phone);
})
})
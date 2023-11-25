function previewImage(event) {
    var fileInput = event.target;
    var files = fileInput.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function (e) {
            var imagePreview = document.getElementById('imgList');
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = "300px";
            img.style.maxHeight = "300px";
            var li = document.createElement('li');
            li.appendChild(img);
            imagePreview.appendChild(li);
        }

        reader.readAsDataURL(file);
    }
}
function uploadImage() {
  const input = document.getElementById('imageInput');
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const image = document.getElementById('uploadedImage');
    image.src = e.target.result;
  }
  reader.readAsDataURL(file);
}

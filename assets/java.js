function upload() {
    var file = document.querySelector('[type=file]').files[0];
    var formData = new FormData();
    formData.append('file', file);

    // 使用fetch或axios将文件发送到后端
    fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // 处理后端的响应
        console.log(data);
        alert("文件上传成功");
        document.getElementById("message").innerText = "文件上传成功";
    })
    .catch(error => {
        // 处理请求过程中出现的任何错误
        console.error('文件上传失败', error);
        alert("文件上传失败");
        document.getElementById("message").innerText = "文件上传失败";
    });
}


function upload () {
    var file = document.querySelector('[type=file]')
    var fileReader = new FileReader()
    // file.files[0]是值第一个文件，这里调用readAsArrayBuffer是读成二进制流数组
    fileReader.readAsArrayBuffer(file.files[0])
    // fileReader读取文件并转化二进制流需要时间，在读取结束后就可以调用filereader实例的result属性查看读取的二进制流数组
    fileReader.onload = function () {
    // 直接使用axios上传
    axios.post('http://localhost:4000/uploadFile?fileName=' + file.files[0].name, fileReader.result).then(res => {
        //上传成功
            console.log(res.data);
            alert("文件上传成功");
            document.getElementById("message").innerText = "文件上传成功"; // 在界面上显示上传成功的消息
        }).catch(error => {
            //上传失败
            console.error('文件上传失败', error);
            alert("文件上传失败");
            document.getElementById("message").innerText = "文件上传失败"; // 在界面上显示上传失败的消息
        });
    }
  }
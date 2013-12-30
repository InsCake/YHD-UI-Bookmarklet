var getImg_box = document.getElementById('getImg_box'),
    imgs,
    upload_btn = $('.upload_btn'),
    imgUrlInput = $('.getImgUrl'),
    imgUrl;

getImg_box.addEventListener('dragenter', function(e) {
    e.preventDefault();
}, false);
getImg_box.addEventListener('dragleave', function(e) {
    e.preventDefault();
}, false);
getImg_box.addEventListener('dragover', function(e) {
    e.preventDefault();
}, false);

getImg_box.addEventListener('drop', function(e) { //拖拽放下，执行上传操作

    e.preventDefault();
    imgs = e.dataTransfer.files;

    /*var WINURL = window.URL || window.webkitURL;
    var src = WINURL.createObjectURL(imgs[0]);*/

    postImg(imgs[0], function() {
        var src = imgUrl;
        getImg_box.innerHTML = '<img src="' + src + '">';
        imgUrlInput.attr('value', src).show();
        WINURL.revokeObjectURL(src);
    }); //调用上传函数

    $('#getImg_box').animate({
        'height': '465px',
        'line-height': '465px'
    }, 300);

    /*upload_btn.animate({
        'top': '490px',
        'box-shadow': '0 1px 4px #aaa',
        'border': 'none'
    }, 300).css('z-index', '3000');*/

}, false);


function postImg(file) { //上传图片函数
    var formdata = new FormData();
    formdata.append('file', file);

    var xhr = new XMLHttpRequest();
    var upload = xhr.upload;

    //上传进度
    upload.addEventListener("progress", function(ev) {
        if (ev.lengthComputable) {
            console.log(ev.loaded / ev.total);
        }
    }, false);

    //完成事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            //do somthing width your respose.
            imgUrl = xhr.responseText;
        }
    };

    xhr.open('POST', "http://10.161.164.222:8070/tsmm-trunk/cmsPutting/imageUpload.do"); //url 是表单的提交地址。
    xhr.send(formdata);

}


imgUrlInput.on('focus', function() { //返回地址框focus后，自动全选
    //全选
});

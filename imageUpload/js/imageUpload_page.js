var getImg_box = document.getElementById('getImg_box'),
    imgs,
    upload_btn = $('.upload_btn'),
    imgUrlInput = $('.getImgUrl');

getImg_box.addEventListener('dragenter', function(e) {
    e.preventDefault();
}, false);
getImg_box.addEventListener('dragleave', function(e) {
    e.preventDefault();
}, false);
getImg_box.addEventListener('dragover', function(e) {
    e.preventDefault();
}, false);
getImg_box.addEventListener('drop', function(e) {
    e.preventDefault();
    imgs = e.dataTransfer.files;

    var WINURL = window.URL || window.webkitURL;
    var src = WINURL.createObjectURL(imgs[0]);
    setTimeout(function() {
        getImg_box.innerHTML = '<img src="' + src + '">';
        imgUrlInput.attr('value', src).show();
        WINURL.revokeObjectURL(src);
    }, 300);

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

imgUrlInput.on('focus', function() {
    //全选
});

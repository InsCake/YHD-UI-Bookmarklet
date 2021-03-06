;
(function (window) {
	var d, i, c, clickHandler;
	if (window.imageUpdate) {
		return false;
	}
	if (!window.FormData) {
		return false;
	}

	clickHandler = function () {
		d.parentNode && document.body.removeChild(d);
		c.removeEventListener('click', clickHandler);
		d = i = c = null;
		delete window.weibotuchuangbyzythum;
	}

	i = document.createElement('iframe');
	i.setAttribute('width', '320');
	i.setAttribute('height', '550');
	i.setAttribute('autofocus', 'autofocus');
	i.style.cssText = [
		''
		, 'border:none'
		, 'position:absolute'
		, 'z-index:999999'
		, 'background-color:#fff;'
	].join(';');
	i.src = 'http://inscake.github.io/YHD-UI-Bookmarklet/imageUpload/imageUpload_page.html';
	i.onload = function () {
		i.focus();
	};

	c = document.createElement('div');
	c.innerHTML = '&#x5173;&#x95ED'; //关闭
	c.style.cssText = [
		 ''
		, 'width:40px'
		, 'box-shadow:0 1px 4px #999'
		, 'position:absolute'
		, 'top:0'
		, 'left:-40px'
		, 'line-height:26px'
		, 'padding:0'
		, 'margin:0'
		, 'border-radius:0'
		, 'border:none'
		, 'background:#f6f6f6'
		, 'z-index:99999'
		, 'text-align:center'
		, 'color:#aaa'
		, 'cursor:pointer'
		, 'font-size:12px'
		, ''
	].join(';');
	c.addEventListener('click', clickHandler);

	d = document.createElement('div');
	d.style.cssText = [
		 ''
		 , 'width:320px'
		 , 'height:550px'
		 , 'box-shadow:0 1px 4px #999'
		 , 'position:fixed'
		 , 'top:0'
		 , 'right:0'
		 , 'z-index:1000000'
		 , 'font-family:arial,sans-serif'
		 , 'padding:0'
		 , 'margin:0'
		 , 'border-radius:0'
		 , 'background:#515151'
		 , ''
	].join(';');
	d.appendChild(c);
	d.appendChild(i);
	document.body.appendChild(d);
	window.weibotuchuangbyzythum = d;
})(window);
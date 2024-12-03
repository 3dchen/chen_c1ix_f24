// 退出按钮功能
function exitPage() {
    window.location.href = "file:///Users/sandy/Desktop/chen_c1ix_f24/index.html";
}

// 拖动和调整大小功能
const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
    shape.addEventListener('mousedown', initiateDrag);
});

function initiateDrag(e) {
    e.preventDefault();
    const shape = e.target;
    shape.style.position = 'absolute';
    shape.style.zIndex = 1000;
    document.body.appendChild(shape);

    // 设置初始位置
    moveAt(e.pageX, e.pageY);

    function moveAt(pageX, pageY) {
        shape.style.left = pageX - shape.offsetWidth / 2 + 'px';
        shape.style.top = pageY - shape.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // 鼠标移动事件
    document.addEventListener('mousemove', onMouseMove);

    // 鼠标释放事件
    shape.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        shape.onmouseup = null;
    };

    // 添加调整大小功能
    shape.addEventListener('dblclick', function () {
        let width = parseInt(window.getComputedStyle(shape).width);
        let height = parseInt(window.getComputedStyle(shape).height);

        shape.style.width = width + 20 + 'px';
        shape.style.height = height + 20 + 'px';
    });
}

// 上传照片功能
function displayPhoto(event) {
    const photoDisplay = document.getElementById('photo-display');
    photoDisplay.innerHTML = ''; // 清空之前的图片
    const img = document.createElement('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    photoDisplay.appendChild(img);
}

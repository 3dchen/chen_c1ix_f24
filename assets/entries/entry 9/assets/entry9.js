// 获取所有图片元素
const images = document.querySelectorAll('#slideshow img');
let currentIndex = 0;

// 切换到下一张图片的逻辑
function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// 每3秒切换一张图片
setInterval(showNextImage, 3000);

// Exit按钮逻辑
const exitButton = document.getElementById('exit-button');
exitButton.addEventListener('click', () => {
    console.log('Exit button clicked!'); // 调试信息
    window.location.href = 'file:///Users/sandy/Desktop/chen_c1ix_f24/index.html'; // 跳转到index.html
});

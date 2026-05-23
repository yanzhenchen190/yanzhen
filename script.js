// 點擊圖片放大
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    lb.style.display = 'block';
    document.getElementById('lightbox-img').src = src;
}

// 縮放與滾輪移動
const gallery = document.getElementById('gallery');
let scale = 1;

document.getElementById('viewport').addEventListener('wheel', (e) => {
    // 如果按住 Ctrl 則縮放，否則滾動畫面
    if (e.ctrlKey) {
        e.preventDefault();
        scale += e.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.min(Math.max(1, scale), 5);
        gallery.style.transform = `scale(${scale})`;
    }
});
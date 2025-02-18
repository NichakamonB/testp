// script.js
window.addEventListener('load', () => {
    const envelope = document.querySelector('.envelope');

    // ใช้เวลา 2 วินาทีให้ซองเปิดเมื่อโหลดเพจเสร็จ
    setTimeout(() => {
        envelope.classList.add('open');
    }, 500);
});

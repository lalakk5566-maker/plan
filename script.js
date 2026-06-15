const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const clickArea = document.getElementById('click-area');

let score = 0;

// 使用你上傳的這張圖片
const imageUrl = './meme.jpg';   // ← 請把圖片存成 meme.jpg 放在同一資料夾

function createPopupImage(x, y) {
    const img = document.createElement('img');
    img.className = 'popup-image';
    img.src = imageUrl;
    
    const offsetX = (Math.random() - 0.5) * 120;
    const offsetY = (Math.random() - 0.5) * 80;
    img.style.left = `${x + offsetX - 40}px`;
    img.style.top = `${y + offsetY}px`;
    
    const rotation = (Math.random() - 0.5) * 40;
    img.style.transform = `rotate(${rotation}deg)`;
    
    gameContainer.appendChild(img);
    
    setTimeout(() => img.remove(), 1600);
}

// 點擊事件
clickArea.addEventListener('click', (e) => {
    const rect = gameContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    score += 1;
    scoreElement.textContent = `分數: ${score}`;
    
    createPopupImage(clickX, clickY);
    
    // 點擊閃光反饋
    gameContainer.style.boxShadow = '0 0 40px #ff0';
    setTimeout(() => gameContainer.style.boxShadow = 'none', 120);
});

// 支援空格鍵
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        const rect = gameContainer.getBoundingClientRect();
        score += 1;
        scoreElement.textContent = `分數: ${score}`;
        createPopupImage(rect.width / 2, rect.height / 2);
    }
});

const loveBtn = document.getElementById("loveBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

// Play music after first touch
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

loveBtn.addEventListener("click", () => {
    message.innerHTML = "Abhi ❤️ You are my dream come true. I love you forever 💖💍";
    startHearts();
});

// Floating hearts animation
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.innerHTML = "💖";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

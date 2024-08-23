const texts = [
    "Procesadores SnapBulls",
    "Somos Rendimiento, Innovación, somos...",
    "Lo mejor que sea creado."
];
const image = document.getElementById('follow-image');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let imageX = mouseX;
let imageY = mouseY;
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 40;
const pauseTime = 1000;

function type() {
    const textElement = document.getElementById("typing-text");
    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentCharIndex < currentText.length) {
        textElement.textContent += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
        if (currentTextIndex < texts.length - 1) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        }
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex++;
        if (currentTextIndex < texts.length) {
            setTimeout(type, typingSpeed);
        }
    }
}

type();

// Movimiento de imagen



document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    imageX += (mouseX - imageX) * 0.1;
    imageY += (mouseY - imageY) * 0.1;
    const moveX = (mouseX - imageX) * -0.2;
    const moveY = (mouseY - imageY) * -0.2;

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;

    requestAnimationFrame(animate);
}

animate();

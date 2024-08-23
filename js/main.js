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

// Particulas
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00bfff", "#ff007f", "#ffbf00"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 10,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
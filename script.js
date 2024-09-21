// Konami Code Easter Egg
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            activateEasterEgg();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateEasterEgg() {
    alert("You've discovered a secret! Here's a fun fact about neuroscience: The human brain contains approximately 86 billion neurons!");
    document.body.style.backgroundColor = '#FF69B4';  // Change background to hot pink
    setTimeout(() => document.body.style.backgroundColor = '#E0FFFF', 3000);  // Change back after 3 seconds
}

// Cursor Trail Easter Egg
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) {  // 10% chance to create a trail element on mouse move
        createTrailElement(e.clientX, e.clientY);
    }
});

function createTrailElement(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
}



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
    document.body.style.backgroundColor = '#FF69B4';
    setTimeout(() => document.body.style.backgroundColor = '#E0FFFF', 3000);
}
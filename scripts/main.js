document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    tl.to(".green-section", {
        duration: 2,
        xPercent: -20,
        yPercent: -20,
        ease: "power2.inOut"
    })
    .to(".white-section", {
        duration: 2,
        xPercent: 20,
        yPercent: 20,
        ease: "power2.inOut"
    }, "<")
    .to(".logo", {
        duration: 2,
        opacity: 1,
        scale: 1.05,  // subtly scales up the logo to give a feeling of coming forward without much drama
        ease: "power3.easeOut"  
    }, "-=1.5")
    .to(".typing-container", {
        duration: 2,
        opacity: 1,
        maxHeight: "1000px",
        ease: "power2.inOut"
    }, "-=1.5");

    function typeText() {
        
        const text = "Hello and welcome! Booting up the latest in data tech for you. Please stand by — Your data analytics journey will start soon!"
        let index = 0;
        const typingSpeed = 50;
        const textElement = document.getElementById("typing-text");
        const cursorElement = document.getElementById("cursor");
        cursorElement.style.opacity = 0; // Ensure cursor is initially hidden

        function addCharacter() {
            const keystrokeSound = new Audio('keystroke.mp3'); // Ensure the path to sound file is correct
            if (index < text.length) {
                const span = document.createElement('span');
                span.textContent = text.charAt(index);
                span.className = 'visible';
                textElement.appendChild(span);
                keystrokeSound.play();
                index++;
                setTimeout(addCharacter, typingSpeed);
            } else {
                // Start blinking cursor after typing is done
                cursorElement.style.opacity = 1;
                blinkCursor();
            }
        }

        function blinkCursor() {
            setInterval(() => {
                cursorElement.style.opacity = (cursorElement.style.opacity == 0 ? 1 : 0);
            }, 500);
        }

        setTimeout(addCharacter, 2500);
    }

    setTimeout(() => {
        document.body.style.transition = 'background-color 2s';
        document.body.style.backgroundColor = '#072c71'; // Example color, change as needed
    }, 1000);

    typeText();
});

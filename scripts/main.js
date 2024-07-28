document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    
    const animateSection = (selector, xPercent, yPercent) => {
        return {
            duration: 2,
            xPercent,
            yPercent,
            ease: "power2.inOut"
        };
    };

    tl.to(".green-section", animateSection(null, -20, -20))
      .to(".white-section", animateSection(null, 20, 20), "<")
      .to(".logo", {
          duration: 2,
          opacity: 1,
          scale: 1.05,
          ease: "power3.easeOut"  
      }, "-=1.5")
      .to(".typing-container", {
          duration: 2,
          opacity: 1,
          maxHeight: "1000px",
          ease: "power2.inOut"
      }, "-=1.5");
      function typeText() {
        const text = "Hello and welcome! Booting up the latest in data tech for you. Please stand by — Your data analytics journey will start soon!";
        const typingSpeed = 50;
        const textElement = document.getElementById("typing-text");
        const cursorElement = document.getElementById("cursor");
        let index = 0;

        const addCharacter = () => {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(addCharacter, typingSpeed);
            } else {
                cursorElement.style.opacity = 1;
                blinkCursor();
            }
        };

        const blinkCursor = () => {
            setInterval(() => {
                cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
            }, 500);
        };

        setTimeout(addCharacter, 2500);
    }

    const changeBackgroundColor = () => {
        document.body.style.transition = 'background-color 2s';
        document.body.style.backgroundColor = '#072c71';
    };

    setTimeout(changeBackgroundColor, 1000);
    typeText();
});
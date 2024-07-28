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
      const languageButton = document.getElementById('language-button');
    const languageDropdown = document.getElementById('language-dropdown');
    const selectedFlag = document.getElementById('selected-flag');
    const typingText = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    
    const prefix = "🚀 [databryan]:~$ ";
    const translations = {
        en: "Greetings traveler!  💂\nYou have embarked on a journey through the universe of data.\nInitializing cutting-edge solutions tailored for your quest...\nHold on tight - our adventure to unlock your data's potential is about to begin! ✨",
        zh: "问候旅行者！🀄\n您已经踏上了一段穿越数据宇宙的旅程。\n正在初始化为您的任务量身定制的尖端解决方案...\n抓紧 - 我们的冒险即将开始，解锁您的数据潜力！✨",
        de: "Grüße Reisender! 🍻\nSie haben sich auf eine Reise durch das Universum der Daten begeben.\nWir starten maßgeschneiderte, hochmoderne Lösungen für Ihre Mission...\nHalten Sie sich fest – unser Abenteuer zur Entschlüsselung des Potenzials Ihrer Daten beginnt bald! ✨",
        es: "¡Saludos viajero! 🥘\nHas emprendido un viaje por el universo de los datos.\nIniciando soluciones de vanguardia adaptadas a tu misión...\nAguanta fuerte – nuestra aventura para desbloquear el potencial de tus datos está a punto de comenzar! ✨",
        it: "Saluti viaggiatore! 🍝\nHai intrapreso un viaggio attraverso l'universo dei dati.\nInizializzando soluzioni all'avanguardia su misura per la tua missione...\nTieni duro – la nostra avventura per sbloccare il potenziale dei tuoi dati sta per iniziare! ✨",
        ru: "Приветствую, путешественник! 🪆\nВы отправились в путешествие по вселенной данных.\nИнициализация передовых решений, адаптированных для вашей миссии...\nДержитесь крепче – наше приключение по раскрытию потенциала ваших данных вот-вот начнется! ✨",
        hi: "नमस्ते यात्री! 🪔\nआप डेटा के ब्रह्मांड के माध्यम से एक यात्रा पर निकल पड़े हैं।\nआपके मिशन के लिए अनुकूलित अत्याधुनिक समाधानों को प्रारंभ किया जा रहा है...\nकस कर पकड़ें – आपके डेटा की क्षमता को अनलॉक करने के लिए हमारा साहसिक कार्य शुरू होने वाला है! ✨",
        fr: "Salutations voyageur ! 🥖\nVous avez entrepris un voyage à travers l'univers des données.\nInitialisation des solutions de pointe adaptées à votre quête...\nTenez bon – notre aventure pour libérer le potentiel de vos données est sur le point de commencer ! ✨",
        ch: "Grüezi, Reisender! 🧀\nDu bisch uf ere epische Reise dür d'Universum vo de Date.\nMir si grad am ultra-moderni Lösige für dini Missioun initialisiere...\nHeb di fescht – üsi Abentüür, s'volle Potenzial vo dine Date freizgäh, fanged bald a! ✨",
        th: "สวัสดีนักเดินทาง! 🐘\nคุณได้เริ่มการเดินทางผ่านจักรวาลของข้อมูลแล้ว\nกำลังเริ่มโซลูชั่นล้ำสมัยที่ปรับแต่งตามภารกิจของคุณ...\nจับให้แน่น - การผจญภัยของเราเพื่อปลดล็อกศักยภาพของข้อมูลของคุณกำลังจะเริ่มขึ้น! ✨",
        va: "Rytsas traveler! 🐉\nAo līr jaelza iā rinot dāria daor.\nInitialized arlīnari gēlio valonquar āttravesse ossi!\nĀeksio sagon tolvā - īlon rholagon iā embēssiot āsagon raqirot issa! ✨"
    };
    
    
    
    
    let typingInterval;

    function typeText(text, element, cursor) {
        clearInterval(typingInterval);
        let i = 0;
        const speed = 45;
        element.textContent = prefix;

        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typingInterval = setTimeout(typeWriter, speed);
            } else {
                cursor.style.opacity = 1;
                blinkCursor();
            }
        }

        function blinkCursor() {
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }

        typeWriter();
    }

    languageButton.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
    });

    languageDropdown.addEventListener('click', (e) => {
        if (e.target.closest('.language-option')) {
            const lang = e.target.closest('.language-option').getAttribute('data-lang');
            selectedFlag.src = e.target.closest('.language-option').querySelector('img').src;
            typeText(translations[lang], typingText, cursor);
            languageDropdown.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.add('hidden');
        }
    });

    // Initial typing animation for default language
    const changeBackgroundColor = () => {
        document.body.style.transition = 'background-color 2s';
        document.body.style.backgroundColor = '#072c71';
    };

    setTimeout(changeBackgroundColor, 1000);
    typeText(translations['en'], typingText, cursor);
});
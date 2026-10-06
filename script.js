// =====================================================
// GET HTML ELEMENTS
// =====================================================

const bgMusic = document.getElementById("bgMusic");

const voiceNote = document.getElementById("voiceAudio");

const playButton = document.getElementById("playButton");
const voiceStatus = document.getElementById("voiceStatus");

const wave = document.getElementById("voiceWave");

const letterText = document.getElementById("letterText");

const mainContent = document.getElementById("mainContent");
const intro = document.getElementById("intro");


// =====================================================
// START SURPRISE
// =====================================================

function startSurprise() {

    // Hide intro
    intro.style.display = "none";

    // Show main content
    mainContent.style.display = "block";

    // Background music volume
    bgMusic.volume = 0.35;

    // Start background music
    bgMusic.play().catch(() => {

        console.log("Music waiting for user interaction");

    });

    // Start love letter
    typeLetter();

    // Start floating hearts
    createHearts();

}


// =====================================================
// SCROLL TO SECTION
// =====================================================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =====================================================
// VOICE NOTE
// =====================================================

function toggleVoice() {

    // Make sure voice audio exists
    if (!voiceNote) {

        console.error("Voice audio not found!");

        return;

    }


    // If voice is currently paused
    if (voiceNote.paused) {

        voiceNote.play()
            .then(() => {

                // Change button to pause
                playButton.innerHTML = "❚❚";

                // Change status
                voiceStatus.innerHTML =
                    "Playing my voice for you ❤️";

                // Start waveform animation
                wave.classList.add("playing");

                // Lower background music
                bgMusic.volume = 0.08;

            })
            .catch((error) => {

                console.error("Voice could not play:", error);

            });

    }

    // If voice is currently playing
    else {

        voiceNote.pause();

        // Change button to play
        playButton.innerHTML = "▶";

        // Change status
        voiceStatus.innerHTML =
            "Press play and listen ❤️";

        // Stop waveform
        wave.classList.remove("playing");

        // Restore background music
        bgMusic.volume = 0.35;

    }

}


// =====================================================
// VOICE NOTE ENDED
// =====================================================

voiceNote.addEventListener("ended", function () {

    playButton.innerHTML = "▶";

    voiceStatus.innerHTML =
        "I hope you felt my words ❤️";

    wave.classList.remove("playing");

    // Restore background music
    bgMusic.volume = 0.35;

});


// =====================================================
// LOVE LETTER
// =====================================================

const message = `
Thangooo,

En life la ne vanthathula irunthu than en ulagame mariduchu 🌍💕.

Ne enaku just oru person ila da Chlww 🥰 Ne life ku oru key mahh 😊.

Enaku mrng start agumpothu un face pathutu unaku txt pannitu tha start aguthu night thungum pothu unaku txt pannitu un face pathutu tha thookam varthu thangoo 😘🤗.

unkooda pesura ovvoru moment um and un kooda iruntha ovvoru moment um enaku precious da mailu atha varthaigalal solla mudila thangoo 🥹.

Thangoo namakulla evlo sanda vanthalum evlo misunderstanding analum na unna eppothume vittu kuduka mattan mahh 💌

Ne enaku kidacha tressure mahh 💎 na eppothume unkoodave un manasula irunthutu than ma irupan 💗.

Enaku un koodave irunthu unna pathirama pathukanum tha ma yen asai athu ipova vena mudiyama irukalam thangoo ana future kandipa athu nadakm thangoo💯.

Thangooo unnoda antha alagana siripoda epothum happy ahh irukanum mailu 😊💕 Mama unkitta vara varaikum yen thanga pulla olunga saptu pathirama irukanum enna da mahh 🤗😘💋.

Once Again Happy Birthday My Dear Wifey 💞🫂
`;


let letterIndex = 0;


// =====================================================
// TYPE LOVE LETTER
// =====================================================

function typeLetter() {

    if (letterIndex < message.length) {

        letterText.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}


// =====================================================
// MAKE A WISH
// =====================================================

function makeWish() {

    const flame = document.querySelector(".flame");

    // Hide candle flame
    if (flame) {

        flame.style.display = "none";

    }

    // Confetti
    createConfetti();

    // Message
    setTimeout(() => {

        alert("Your wish is on its way Chlm... ✨💞");

    }, 500);

}


// =====================================================
// OPEN GIFT
// =====================================================

function openGift() {

    const gift = document.getElementById("gift");

    const finalMessage =
        document.getElementById("finalMessage");


    // Change gift
    gift.innerHTML = "💖";

    // Heartbeat animation
    gift.style.animation =
        "heartbeat 1s infinite";


    // Show final message
    finalMessage.style.display = "block";


    // Confetti
    createConfetti();

    // Floating hearts
    createHearts();

}


// =====================================================
// FLOATING HEARTS
// =====================================================

function createHearts() {

    const container =
        document.getElementById("hearts");


    // Prevent multiple intervals
    if (window.heartInterval) {

        return;

    }


    window.heartInterval = setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML =
            ["❤️", "💕", "💖", "💗", "💓"]
            [
                Math.floor(Math.random() * 5)
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";


        heart.style.animationDuration =
            Math.random() * 5 + 5 + "s";


        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 10000);


    }, 700);

}


// =====================================================
// CONFETTI
// =====================================================

function createConfetti() {

    const container =
        document.getElementById("confetti");


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        // Position
        piece.style.position = "fixed";

        piece.style.width = "8px";

        piece.style.height = "8px";


        // Random colors
        piece.style.background =
            [
                "#ff4d91",
                "#ffd166",
                "#06d6a0",
                "#ffffff",
                "#c77dff"
            ][
                Math.floor(Math.random() * 5)
            ];


        // Random position
        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top = "-10px";


        // Layer
        piece.style.zIndex = "999";


        // Shape
        piece.style.borderRadius = "2px";


        // Rotation
        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        // Add to page
        container.appendChild(piece);


        // Random animation duration
        const duration =
            Math.random() * 3 + 2;


        // Animate
        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",

                    opacity: 0
                }
            ],

            {
                duration: duration * 1000,

                easing: "linear"
            }

        );


        // Remove after animation
        setTimeout(() => {

            piece.remove();

        }, duration * 1000);

    }

}
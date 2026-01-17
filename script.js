// Countdown
const countdownDate = new Date("Jan 8, 2026 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    if(distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-section").innerHTML = "<h1>🎉 Happy Birthday Suhichi! 🎉</h1>";
    }
}, 1000);

// Blow button
document.getElementById("blow-button").addEventListener("click", () => {
    const music = document.getElementById("birthday-music");
    music.play();
    alert("Make a wish! 🎂✨");
});

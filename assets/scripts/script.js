const audioIcon = document.querySelector("#sound-icon");
const audioPlayer = document.querySelector("audio");

function rain() {
    let rainDrop = 180;
    document.querySelector("#rain").innerText = "";

    for (let i = 0; i <= rainDrop; i++) {
        let height = Math.floor(Math.random() * (25 - 20 + 1) + 20); // Between 20 - 25.
        let xPosition = Math.floor(Math.random() * window.innerWidth);
        let rainDelay = Math.random() * -10;
        let rainDuration = Math.random() * (0.35 - 0.25 + 1) + 0.25;
        let rainOpacity = Math.random() + 0.1;

        let droplet = document.createElement("span");
        
        droplet.classList.add("__droplet");
        droplet.style.height = `${height}px`;
        droplet.style.left = `${xPosition}px`;
        droplet.style.animationDelay = `${rainDelay}s`;
        droplet.style.animationDuration = `${rainDuration}s`;
        droplet.style.opacity = rainOpacity;

        document.querySelector("#rain").append(droplet);
    };
};

audioIcon.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioIcon.style.setProperty("--icon-opacity", "0.8");
        audioIcon.style.setProperty("--icon-background", "url('../Images/volume-2.svg')");
        
        audioPlayer.play();
    } else {
        audioIcon.style.setProperty("--icon-opacity", "0.6");
        audioIcon.style.setProperty("--icon-background", "url('../Images/volume-x.svg')");
    
        audioPlayer.pause();
    };
});

audioPlayer.addEventListener("timeupdate", () => {

    // To make the loop perfect (the loop still isn't perfect, but it's good enough).
    let buffer = 11;
    
    if (audioPlayer.currentTime > audioPlayer.duration - buffer) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    };
});

window.addEventListener("resize", rain);
document.addEventListener("DOMContentLoaded", rain);
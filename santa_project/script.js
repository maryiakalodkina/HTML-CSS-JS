function christmasCountdown() {
    const christmasDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    
    const diff = christmasDate - now;  // in milliseconds

    const msInSeconds = 1000;   //milliseconds in a second  - 1,000
    const msInMinute = 60 * 1000;   //milliseconds in a minute  - 60,000
    const msInHours = 60 * 60 * 1000;   //milliseconds in an hour   - 3,600,000
    const msInDays = 24 * 60 * 60 * 1000;   //milliseconds in a day    - 86,400,000

    const displayDay = Math.floor(diff / msInDays);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDays) / msInHours);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHours) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSeconds);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }
}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!';
    heading.classList.add('red');
}

const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    const music = document.querySelector('#myAudio');
    if (music.paused) {
        music.play();
    }
    else {
        music.pause();
    }
})


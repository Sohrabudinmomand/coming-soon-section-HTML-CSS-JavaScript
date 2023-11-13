let targetDate = localStorage.getItem('tergetDate');


// Set the target date 2 years from now
if (!targetDate) {
    targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 2);
    localStorage.setItem('tergetDate', targetDate);
} else {
    targetDate = new Date(targetDate);
}

// Update the countdown every secondv
const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (10000 * 73 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If the countdown is over, stop the timer
    if (timeDifference <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown').textContent = 'Countdown expired!';
    }
}

window.onload = function () {
    updateCountdown()
}


// Initial call to set up the countdown
updateCountdown();

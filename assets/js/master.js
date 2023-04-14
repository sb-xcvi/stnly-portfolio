// Preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 1000)
});

// Skillset animation
function animateProgressBar(barId, percentId, value) {
    let progressBar = document.getElementById(barId);
    let progressPercent = document.getElementById(percentId);
    let percent = 0;
    let intervalId = setInterval(function() {
        percent++;
        progressBar.style.width = percent + "%";
        progressPercent.innerHTML = percent + "%";
        if (percent === value) {
            clearInterval(intervalId);
        }
    }, 10);
}

animateProgressBar("skillbar-bar1", "skill-bar-percent1", 80);
animateProgressBar("skillbar-bar2", "skill-bar-percent2", 50);
animateProgressBar("skillbar-bar3", "skill-bar-percent3", 20);
animateProgressBar("skillbar-bar4", "skill-bar-percent4", 50);
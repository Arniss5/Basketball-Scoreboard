//grab home-score, guest-score and timer
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const timer = document.getElementById("timer")


//initialise score values and timer
let homecount = 0
let guestcount = 0
let timerCount = 0;

//start timer on load
window.addEventListener('load', startTimer())

//START TIMER
function startTimer() {
    setInterval(function () {
        timerCount += 1
        timer.textContent = timerCount
    }, 60000);
}


//ADD SCORE
function addScore(event) {
    //check id of the clicked button and add respective points
    if(event.target.id === "home1") {
        homecount += 1
    } else if(event.target.id === "home2")  {
        homecount += 2
    } else if (event.target.id === "home3") {
        homecount += 3
    } else if (event.target.id === "guest1") {
        guestcount += 1
    } else if (event.target.id === "guest2") {
        guestcount += 2
    } else if (event.target.id === "guest3") {
        guestcount += 3
    }
    //display the new score
    homeScore.textContent = homecount
    guestScore.textContent = guestcount

    highlightLeader()
}

//NEW GAME
function newGame() {
    //reset counts, set displayed scores to 0
    homecount = 0
    guestcount = 0
    homeScore.textContent = homecount
    guestScore.textContent = guestcount
    //reset timer
    timerCount = 0
    timer.textContent = timerCount
}

//HIGHLIGHT LEADER
function highlightLeader() {
    //compare scores
    if(homecount > guestcount) {
        //change homeScore color to green
        homeScore.style.color = "#10B981"
        guestScore.style.color = "#F43F5E"
    } else if (homecount < guestcount) {
        //change guestScore color to green
        guestScore.style.color = "#10B981"
        homeScore.style.color = "#F43F5E"
    } else {
        // draw - both colors red
        guestScore.style.color = "#F43F5E"
        homeScore.style.color = "#F43F5E"
    }
}

const UI = {
   second: document.querySelector(".hand__second"),
   minute: document.querySelector(".hand__minute"),
   hour: document.querySelector(".hand__hour")
}

function timer(callback) {
   window.setTimeout(callback, 1000 / 60);
};

function updateClock() {
   const now = new Date()
   const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360
   const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360
   const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360

   UI.second.style.transform = `rotate(${seconds}deg)`
   UI.minute.style.transform = `rotate(${minutes}deg)`
   UI.hour.style.transform = `rotate(${hours}deg)`
   timer(updateClock)
}

timer(updateClock)
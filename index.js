function updateClock() {
    const clock = document.getElementById("clock");
    let time = new Date();

    let h = String(time.getHours()).padStart(2, "0");
    let m = String(time.getMinutes()).padStart(2, "0");
    let s = String(time.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();

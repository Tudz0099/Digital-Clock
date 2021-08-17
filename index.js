function showTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const session = h < 12 ? "AM" : "PM";

    const hours = h < 10 ? '0'+h : h;
    const minutes = m < 10 ? '0'+m : m;
    const seconds = s < 10 ? '0'+s : s;

    const time = `${hours} : ${minutes} : ${seconds} ${session}`
    document.getElementById("clock").innerText = time;

    setTimeout(showTime, 1000)
}

showTime()
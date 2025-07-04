let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let amPm = document.getElementById("amPm")
let cTime = document.getElementById("cTime")

setInterval(() => {
    let now = new Date()
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
    let todayDay = days[now.getDay()]

    let months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    let todayMonth = months[now.getMonth()]

    let d2 = now.getDate()
    let year = now.getFullYear()

    if (h == 0) {
        h = 12
    }
    else if (h > 12) {
        h -= 12
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hour.innerText = h
    minute.innerText = m
    second.innerText = s
    
    if (now.getHours() < 12) {
        amPm.innerText = `AM`
    }
    else {
        amPm.innerText = `PM`
    }

    cTime.innerHTML = `<span>${todayDay}</span>,<span>${todayMonth}</span>-<span>${d2}</span>,<span>${year}</span>`
});
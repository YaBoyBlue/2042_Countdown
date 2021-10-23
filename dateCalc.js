const timeZone = new Date().getTimezoneOffset()

const elementT = document.getElementById("ctimezone")
const elementA = document.getElementById("diffRelease")
const elementB = document.getElementById("diffOrdered")
const elementC = document.getElementById("diffPreLoad")

const dateA = new Date("Novemeber 19, 2021 17:00:00")
const dateB = new Date("Novemeber 12, 2021 17:00:00")
const dateC = new Date("Novemeber 10, 2021 17:00:00")

if (timeZone > 0) {
    elementT.innerHTML = " UTC " + ((-timeZone) / 60)
} else {
    elementT.innerHTML = " UTC +" + ((-timeZone) / 60)
}

function getDateDiff(date, timezone) {

    let dateDifference = date - (new Date().getTime() + (-timezone * 1000 * 60))

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)

    // if (timeZone > 0) {
    //     elementT.innerHTML = timeZone + " UTC " + ((-timeZone) / 60) + " " + ((-timeZone) * (1000 * 60)) + " " + hours
    // } else {
    //     elementT.innerHTML = timeZone + " UTC +" + ((-timeZone) / 60) + " " + ((-timeZone) * (1000 * 60)) + " " + hours
    // }

    return [days, hours, minutes, seconds]
}

setInterval(() => {

    let diffA = getDateDiff(dateA, timeZone)
    let diffB = getDateDiff(dateB, timeZone)
    let diffC = getDateDiff(dateC, timeZone)

    elementA.innerHTML = `${diffA[0]} Days, ${diffA[1]} Hours, ${diffA[2]} Minutes, ${diffA[3]} Seconds.`
    elementB.innerHTML = `${diffB[0]} Days, ${diffB[1]} Hours, ${diffB[2]} Minutes, ${diffB[3]} Seconds.`
    elementC.innerHTML = `${diffC[0]} Days, ${diffC[1]} Hours, ${diffC[2]} Minutes, ${diffC[3]} Seconds.`
}, 1000)
function getDateDiff(date, timezone) {

    let dateDifference = date - new Date().getTime()

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
}

setInterval(() => {

    const timeZone = new Date().getTimezoneOffset()

    document.getElementById("ctimezone").innerHTML = "UTC" + -1 * timeZone / 60

    const elementA = document.getElementById("diffRelease")
    const elementB = document.getElementById("diffOrdered")
    const elementC = document.getElementById("diffPreLoad")

    const dateA = new Date("Novemeber 19, 2021 12:00:00")
    const dateB = new Date("Novemeber 12, 2021 12:00:00")
    const dateC = new Date("Novemeber 10, 2021 12:00:00")

    let diffA = getDateDiff(dateA)
    let diffB = getDateDiff(dateB)
    let diffC = getDateDiff(dateC)

    elementA.innerHTML = `${diffA[0]} Days, ${diffA[1]} Hours, ${diffA[2]} Minutes, ${diffA[3]} Seconds.`
    elementB.innerHTML = `${diffB[0]} Days, ${diffB[1]} Hours, ${diffB[2]} Minutes, ${diffB[3]} Seconds.`
    elementC.innerHTML = `${diffC[0]} Days, ${diffC[1]} Hours, ${diffC[2]} Minutes, ${diffC[3]} Seconds.`
}, 1000)
//Clock setting function
const setClockTime = () => {

    //Array of arrows
    const clockArrows = document.querySelectorAll(`.clock__arrow`)

    //Array of digitals
    const clockDigitals = document.querySelectorAll(`.clock__digital`)

    //Day Arrow
    const dayArrow = document.querySelector(`.dayArrow`)

    //Day digital
    const dayDigital = document.querySelector(`.date`)

    //Month Arrow
    const monthArrow = document.querySelector(`.monthArrow`)

    //New Date object
    let now = new Date()

    //Getting and formatting hours, minutes and seconds
    let hours = now.getHours() < 10
        ? `0${now.getHours()}`
        : now.getHours().toString()
    let minutes = now.getMinutes() < 10
        ? `0${now.getMinutes()}`
        : now.getMinutes().toString()
    let seconds = now.getSeconds() < 10
        ? `0${now.getSeconds()}`
        : now.getSeconds().toString()

    //Setting degrees for arrows
    clockArrows[0].style.transform = `rotate(${hours * 30}deg)`
    clockArrows[1].style.transform = `rotate(${minutes * 6}deg)`
    clockArrows[2].style.transform = `rotate(${seconds * 6}deg)`

    //Setting digital time
    clockDigitals[0].innerHTML = hours
    clockDigitals[1].innerHTML = minutes
    clockDigitals[2].innerHTML = seconds

    //Getting and formatting day
    let day = now.getDay() - 1
    dayArrow.style.transform = `rotate(${day * 51}deg)`

    //Getting and formatting month
    let month = now.getMonth()
    monthArrow.style.transform = `rotate(${month * 30}deg)`

    let date = now.getDate()
    dayDigital.innerHTML = date.toString()
}

//Clock updating function
const clockUpdate = () => {
    //Setting interval for clock update
    setInterval(setClockTime, 1000)
    //Calling function directly (otherwise user will have to wait 1 second before clock starts working)
    setClockTime()
}

//Calling update function to start clock
clockUpdate()
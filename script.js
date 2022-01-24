// timeMode - переключение дня и ночи
// mode -> true - день, false - ночь

let timeMode = document.querySelector('#timeMode')
let mode = true;

timeMode.addEventListener('click', () => {
    if (mode) {
        document.querySelector('body').style.background = 'white'
        timeMode.style.background = 'url(./png/sun.png)'
        timeMode.style.backgroundSize = 'cover'

        mode = false;
        return;
    }

    document.querySelector('body').style.background = '#091921'
    timeMode.style.background = 'url(./png/moon.png)'
    timeMode.style.backgroundSize = 'cover'

    mode = true;
    return;
})


// Часы

const deg = 6
const hr = document.querySelector('#hr')
const sc = document.querySelector('#sc')

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})
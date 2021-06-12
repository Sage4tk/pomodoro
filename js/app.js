minuteConverter = (number) => {
    const hours = ~~(number / 3600);
    const mins = ~~((number % 3600) / 60);
    const secs = ~~number % 60;

    let figure = "";

    if (hours > 0) {
        figure += "" + hours + ":" + (mins < 10 ? "0":"");
    }

    figure += "" + mins + ":" + (secs < 10 ? "0":"");
    figure += "" + secs;
    return figure;
}

pomodoroTimer = (timeMinute, restMinute) => {
    let currentTime = timeMinute * 60 + 1;
    let work = true;
    document.querySelector('h1').innerHTML = "WORK!"
    const timer = setInterval(() => {
        if (currentTime <= 0) {
            if (work === true) {
                document.querySelector('h1').innerHTML = "Rest!"
                currentTime = restMinute * 60 + 1;
            } else {
                document.querySelector('h1').innerHTML = "WORK!"
                currentTime = timeMinute * 60 + 1;
            }
            work = !work;
        }
        document.querySelector('h2').innerHTML = minuteConverter(currentTime - 1)
        currentTime -= 1;
    }, 1000)
}

const inputs = document.querySelectorAll('input');

document.querySelector('button').onclick = () => {
    const convert0 = parseInt(inputs[0].value);
    const convert1 = parseInt(inputs[1].value);
    
    if ((isNaN(convert0) || convert0 < 1) || (isNaN(convert1) || convert1 < 1)) {
        console.log('test')
    } else {
        pomodoroTimer(convert0, convert1)
    }
}

pomodoroTimer(0.25, 0.25)
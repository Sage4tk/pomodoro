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

pomodorTimer = (timeMinute, restMinute) => {
    let currentTime = timeMinute * 60 + 1;
    let work = true;
    document.querySelector('h1').innerHTML = "WORK!"
    const timer = setInterval(() => {
        if (currentTime <= 1) {
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

pomodorTimer(80, 5)
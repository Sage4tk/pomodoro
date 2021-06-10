pomodorTimer = (timeMinute, restMinute) => {
    let currentTime = timeMinute * 60 + 1;
    let work = true;

    const timer = setInterval(() => {
        if (currentTime <= 1) {
            if (work === true) {
                currentTime = restMinute * 60 + 1;
            } else {
                currentTime = timeMinute * 60 + 1;
            }
            work = !work;
        }
        
        currentTime -= 1;
    }, 1000)
}
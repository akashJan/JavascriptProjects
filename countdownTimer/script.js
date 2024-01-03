const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}
const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //millseconds

    //calculate days, mins, hours, secs from timeDifference
    let calSecs = Math.floor(timeDifference / 1000) % 60;
    let calMins = Math.floor(timeDifference / 1000 / 60) % 60;
    let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    days.textContent = formatTime(calDays);
    mins.textContent = formatTime(calMins);
    hours.textContent = formatTime(calHours);
    secs.textContent = formatTime(calSecs);
    // console.log(days);


}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("November 25 2023");
countDown(targetDate);

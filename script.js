document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[now.getUTCDay()];

        document.getElementById("utc-time").textContent = utcTime;
        document.getElementById("day-of-week").textContent = currentDay;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});

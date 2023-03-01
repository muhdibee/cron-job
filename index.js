const schedule = require('node-schedule');

const job = schedule.scheduleJob('* * * * *', function() {
    console.log("My first cron job.");
    // console.log("The time is: ", Date.now().toLocaleString())
})
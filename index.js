const schedule = require("node-schedule");

const LogSec = shedule('*/1***', ()=> {{
    console.log("The time is: ", Date.now().toLocaleString())
}})
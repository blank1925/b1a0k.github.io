var start_time = new Date('2017-04-20 14:20:06').getTime()
var end_time = new Date('2020-04-20 22:20:06').getTime()

function flushTime() {
    var time_view = document.getElementsByClassName("end-time")[0]
    if (!time_view) return

    var current_timestamp = getNow()
    let left_time = end_time - current_timestamp

    if (left_time <= 0) time_view.parentElement.innerHTML = "End now."
    else time_view.innerHTML = left_time

    return left_time
}

// function flushProgress() {
//     var progress_view = document.getElementsByClassName("progress")[0];
//     if (!progress_view) return;
//     var remaining = 1 - ((end_time - getNow()) / (end_time - start_time));

//     progress_view.setAttribute("value", remaining);
// }

function getNow() {
    return new Date().getTime()
}

// function flushProgressTip() {
//     var tip_view = document.getElementsByClassName("progress-value")[0];

//     var remaining = +document.getElementsByClassName("progress")[0]?.getAttribute("value");

//     tip_view.innerHTML = remaining >= 1 ? 100 : (remaining * 100).toFixed(7);
// }

var interval = setInterval(() => {
    flushTime()
    // flushProgress();
    // flushProgressTip();
}, 17);

setTimeout(() => {
    if (end_time - getNow() <= 0) clearInterval(interval)
}, 100)
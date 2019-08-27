/* Script to exercise timer
 * Author: HartCode programmer
 * Date: 08/26/2019
 */
"Use Strict";
// $(function() {
let countDownDate = new Date("Sep 27, 2019 18:00:00").getTime();
let timer = $("#timer");
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    timer.val(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    if (distance < 0) {
        clearInterval(x);
        timer.val("Expired");
    }
}, 2000);
// })
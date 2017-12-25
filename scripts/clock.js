var timerID = null
function update()
{
    var time = new Date();

    document.getElementById("H1").src = "img/clock/dg" + parseInt(time.getHours()/10) + ".gif";
    document.getElementById("H2").src = "img/clock/dg" + time.getHours()%10 + ".gif";

    document.getElementById("M1").src = "img/clock/dg" + parseInt(time.getMinutes()/10) + ".gif";
    document.getElementById("M2").src = "img/clock/dg" + time.getMinutes()%10 + ".gif";

    document.getElementById("S1").src = "img/clock/dg" + parseInt(time.getSeconds()/10) + ".gif";
    document.getElementById("S2").src = "img/clock/dg" + time.getSeconds()%10 + ".gif";
        
    document.getElementById("d1").src = "img/clock/dg" + parseInt(time.getDate()/10) + ".gif";
    document.getElementById("d2").src = "img/clock/dg" + time.getDate()%10 + ".gif";

    document.getElementById("m1").src = "img/clock/dg" + parseInt((time.getMonth() + 1)/10) + ".gif";
    document.getElementById("m2").src = "img/clock/dg" + (time.getMonth() + 1)%10 + ".gif";

    document.getElementById("y1").src = "img/clock/dg" + parseInt((time.getFullYear()/10)%10) + ".gif";
    document.getElementById("y2").src = "img/clock/dg" + time.getFullYear()%10 + ".gif";
    
    timerID = setTimeout('update()', 1000);
}
window.addEventListener("load", update); 
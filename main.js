
const timeElement = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let elapsed = 0;
let setIntervalid = null

function updatetime(){
const ms = Math.floor (elapsed % 1000) 
const sec = Math.floor(elapsed /(1000)%60)
const min = Math.floor(elapsed /(1000*60))%60
const hor = Math.floor(elapsed /(1000*60*60))%60

const msStr = ms.toString().slice(0,1)
const secStr = sec.toString().padStart(1,'0')
const minStr = min.toString().padStart(1,'0')
const horStr = hor.toString().padStart(1,'0')

timeElement.innerHTML = `${horStr}:${minStr}:${secStr}:${msStr}`

}

start.addEventListener('click',function(){
    let pre = new Date()
    setintervalid = setInterval (function(){
    const now = new Date()
    elapsed += now - pre
    pre = now
    updatetime()
    },100)
    start.setAttribute("disabled", true);
    stop.removeAttribute("disabled", false);
    reset.removeAttribute("disabled", false);
})

stop.addEventListener('click',function(){
clearInterval(setintervalid)
stop.setAttribute("disabled", true);
start.removeAttribute("disabled", false);

})

reset.addEventListener('click',function(){
    elapsed = 0; 
    clearInterval(setintervalid)
    timeElement.innerHTML = `${0}:${0}:${0}:${0}`
    start.removeAttribute("disabled", false);
    stop.setAttribute("disabled", true);
    reset.setAttribute("disabled", true);
})


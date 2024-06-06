let runnable=false;
let startTime;
let timer;

function displayTime()
{
    
    let currentTime=new Date().getTime();
    let elapsedTime=currentTime-startTime;
    let milliseconds=Math.floor((elapsedTime%1000)/10);
    let seconds=Math.floor((elapsedTime/1000)%60);
    let minutes=Math.floor(elapsedTime/(1000*60))

    document.getElementById('minutes').innerHTML=(minutes<10?"0":"")+minutes;
    document.getElementById('seconds').innerHTML=(seconds<10?"0":"")+seconds;
    document.getElementById('milliseconds').innerHTML=(milliseconds<10?"0":"")+milliseconds;
}
function startTimer()
{
    if(!runnable)
    { 
          let stopTime=new Date().getTime();
          let ellapsedTimeSinceStop=stopTime-(startTime || stopTime);
          startTime=stopTime-ellapsedTimeSinceStop;

          timer=setInterval(displayTime,10)
          runnable=true;
    }

    

}

function stopTimer()
{
    clearInterval(timer);
    runnable=false;
}

function resetTimer()
{
    clearInterval(timer)
    runnable=false;

    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '000';
}
document.getElementById('start').addEventListener('click',startTimer);
document.getElementById('stop').addEventListener('click',stopTimer);
document.getElementById('Reset').addEventListener('click',resetTimer)
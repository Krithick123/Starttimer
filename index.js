const btnStart=document.querySelector('.Start');
const btnStop=document.querySelector('.Stop');
const btnReset=document.querySelector('.Reset');
const clock=document.querySelector('.clock');

let hrs=min=sec=msec=0,startTimer;

btnStart.addEventListener('click',()=>{
btnStart.classList.add('start-active');
btnStop.classList.remove('stop-active');
clock.classList.add('start-animation');

startTimer=setInterval(()=>{
msec++;
if(msec==100)
{
    sec++;
    msec=0;
}
if(sec==60)
{
    min++;
    sec=0;
}
if(min==60)
{
    hrs++;
    min=0;
}
updateDisplay();
},10);


});

btnStop.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
    clock.classList.remove('start-animation');
    clearInterval(startTimer);
    });

btnReset.addEventListener('click',()=>{
    hrs=min=sec=msec=0
        btnStart.classList.remove('start-active');
        btnStop.classList.remove('stop-active');
        clock.classList.remove('start-animation');
        clearInterval(startTimer);
        updateDisplay();
});

function updateDisplay(){

    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+ sec: sec;
    pmsec=msec<10?'0'+msec:msec;


    // Converting to string beacuse we accesing value ny index value 

    phrs=phrs.toString();
    pmin=pmin.toString();
    psec=psec.toString();
    pmsec=pmsec.toString();


   document.querySelectorAll('.hrs')[0].innerText=phrs[0];
   document.querySelectorAll('.hrs')[1].innerText=phrs[1];

   document.querySelectorAll('.min')[0].innerText=pmin[0];
   document.querySelectorAll('.min')[1].innerText=pmin[1];

   document.querySelectorAll('.sec')[0].innerText=psec[0];
   document.querySelectorAll('.sec')[1].innerText=psec[1];
   
   document.querySelectorAll('.msec')[0].innerText=pmsec[0];
   document.querySelectorAll('.msec')[1].innerText=pmsec[1];

}
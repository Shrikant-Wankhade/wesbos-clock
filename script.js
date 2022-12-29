
 const secondHand = document.querySelector('.clock__hand--seconds');
 const minuteHand = document.querySelector('.clock__hand--minute');
 const hourHand = document.querySelector('.clock__hand--hour');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360)+90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minuteDegree = ((minutes/60) * 360)+90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getMinutes();
    const hourDegree = ((minutes/12) * 360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate,1000);
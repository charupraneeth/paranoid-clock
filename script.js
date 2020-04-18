    const secondHand = document.querySelector(".secondHand");
    const minuteHand = document.querySelector(".minuteHand");
    const hourHand = document.querySelector(".hourHand");
    const display = document.querySelector(".display");

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes()
    const hour = now.getHours();
    
    
    secondHand.style.transform = `rotate(${((sec/60)*360)+90}deg)`;

    minuteHand.style.transform = `rotate(${((min/60)*360)+90}deg) scaleX(0.7)` ;

    hourHand.style.transform = `rotate(${((hour/12)*360)+90}deg) scaleX(.4)`;
    
    const text = document.createTextNode(now);

    display.appendChild(text);
 


}
setInterval(setDate,1000)
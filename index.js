const clock = document.getElementsByClassName('clockFace')[0];

var ticks = (rotation,width)=> {
    let el = document.createElement('div');
    el.style.width = `${width}px`;
    el.style.height = '20px';
    el.style.backgroundColor = 'black';
    el.style.position = 'absolute';
    el.style.transformOrigin= 'center -140px';
    el.style.transform = `translate(0px, 150px) rotate(${rotation}deg)`;
    return el;
}
var numsContainer = (rotation) => {
    let el = document.createElement('div');
    el.style.width = '30px';
    el.style.height = '20px';
    el.style.position = 'absolute';
    el.style.transformOrigin= 'center 180px';
    el.style.transform = `translate(0px, -170px) rotate(${rotation}deg)`;
    el.style.textAlign = 'center';
    el.style.alignItems = 'center';
    el.style.alignContent = 'center';
    return el;
}
var nums = (num,rotation,size,margin) => {
    let el = document.createElement('p');
    var text = document.createTextNode(num);
    el.style.fontSize = `${size}px`;
    el.style.transform = 'rotate()'
    el.style.textAlign = 'center';
    el.style.position = 'relative';
    el.style.bottom = `${margin}px`
    el.style.transform = `rotate(${rotation}deg)`;
    el.appendChild(text);
    return el;
}

for(let i = 1; i <= 60; i++) {
    if(i%5===0) {
        clock.appendChild(ticks(i*-6,10));
        var parentN = numsContainer(i*6);
        parentN.appendChild(nums(i/5,i*-6,30,-10));
        clock.appendChild(parentN);
       
    } else {
        
        clock.appendChild(ticks(i*6,1));
    
    }
    var parentN = numsContainer(i*6);
        parentN.appendChild(nums(i,i*-6,10,3));
        clock.appendChild(parentN);
    
   
}

var secondHand = () => {
    let el = document.createElement('div');
    el.id = 'seconds';
    el.style.width = '2px';
    el.style.height = '160px';
    el.style.backgroundColor = 'red';
    el.style.position = 'absolute';
    el.style.bottom = '153px'
    el.style.transformOrigin = "bottom center";
    return el;
}
var minuteHand = () => {
    let el = document.createElement('div');
    el.id = 'minutes';
    el.style.width = '5px';
    el.style.height = '160px';
    el.style.backgroundColor = 'black';
    el.style.position = 'absolute';
    el.style.bottom = '153px'
    el.style.transformOrigin = "bottom center";
    return el;
}
var hourHand = () => {
    let el = document.createElement('div');
    el.id = 'hours';
    el.style.width = '5px';
    el.style.height = '100px';
    el.style.backgroundColor = 'black';
    el.style.position = 'absolute';
    el.style.bottom = '153px'
    el.style.transformOrigin = "bottom center";
    return el;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function draw() {
   
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
   
    const hHand = hourHand();
    const mHand = minuteHand();
    const sHand = secondHand();
    

  
    //console.log(seconds);
    //console.log(hours);
    //console.log(minutes);

    
    sHand.style.transform = `rotate(${Math.PI/30 * seconds}rad)`; 
    mHand.style.transform = `rotate(${Math.PI/30 * minutes}rad)`;
    hHand.style.transform = `rotate(${Math.PI/30 * hours * 5}rad)`;
    
    clock.appendChild(mHand);
    clock.appendChild(sHand);
    clock.appendChild(hHand);
  
    
    var secondsID = document.getElementById('seconds');
    var minutesID = document.getElementById('minutes');
    var hoursID = document.getElementById('hours');

    await sleep(1000)
    secondsID.remove();
    minutesID.remove();
    hoursID.remove();
    
   requestAnimationFrame(draw);
}   
requestAnimationFrame(draw);




function randomText(){
    var text = ("❤");
    letters = text[Math.floor(Math.random() * text.length)];
    return letters; 
}


function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

let left = Math.floor(Math.random() *320)-180;
let size = Math.random()* 1.5;
let duration = Math.random()* 1;

e.innerText = randomText()
e.style.left = left + 'px';
e.style.fontSize = 0.5+size+'em';
e.style.animationDuration= 1+duration+'s';


    setTimeout(function(){
        cloud.removeChild(e)
    },4000)
    
    
}

var NameList = ['MANGAL','KOYEL','SUJAY','ANKANA','AHANA','SUKANYA','ABHIJIT','KAUSHIK','SUDIP','ARIDRO','SANDIP','RIMPA','RIYA','RAJ','SAYAN','AKASH','ANIRBAN','BARNALI','NIKHIL','PUJA','PRITAM','RIKU','RUPSA','SHILPA','SOMAPTI','SOUMIK','SUBHRA','SUJAY','SURYA','SUSOVAN','SWEETY','UDAY','MANGAL']

function randomName(){
    
    var Name = NameList[Math.floor( Math.random() * NameList.length )];
    return Name;
}




function name(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('name-drop');
    cloud.appendChild(e);

let left = Math.floor(Math.random() *1)-50;
 
let duration = Math.random()* 2;

e.innerText =randomName()
e.style.left = left + 'px';
e.style.fontSize = 2+'em';
e.style.animationDuration= 2+duration+'s';


    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
    
    console.log(randomName())
    
}




setInterval(function(){
    rain() },100)


setInterval(function(){
    name() },1000)


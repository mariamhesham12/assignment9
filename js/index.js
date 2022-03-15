let btnEASY = document.querySelector('#primary');
let btnUNLIMITED = document.querySelector('#btnn2');
let btnFEATURES = document.querySelector('#btnn3');
let btnUNIQUE = document.querySelector('#btnn4');
btnEASY.addEventListener('click',()=>btnEASY.style.backgroundImage='-webkit-linear-gradient(0deg,#4dabff 0%,#62ddff 100%)' )
btnUNLIMITED.addEventListener('click',()=>btnUNLIMITED.style.backgroundImage='-webkit-linear-gradient(0deg,#4dabff 0%,#62ddff 100%)')
btnFEATURES.addEventListener('click',()=>btnFEATURES.style.backgroundImage='-webkit-linear-gradient(0deg,#4dabff 0%,#62ddff 100%)')
btnUNIQUE.addEventListener('click',()=>btnUNIQUE.style.backgroundImage='-webkit-linear-gradient(0deg,#4dabff 0%,#62ddff 100%)')
btnEASY.addEventListener('click',()=>btnEASY.style.color='white' )
btnUNLIMITED.addEventListener('click',()=>btnUNLIMITED.style.color='white')
btnFEATURES.addEventListener('click',()=>btnFEATURES.style.color='white')
btnUNIQUE.addEventListener('click',()=>btnUNIQUE.style.color='white')

document.querySelector('.fa-bars').addEventListener('click',()=>{document.querySelector('.ul1').classList.toggle('active');});
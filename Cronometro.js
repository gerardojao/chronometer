    
    
    play = document.getElementById("play");
    reset = document.getElementById("reset");

    const containerHour=document.getElementById("contenedor")
       
   
    const seconds = document.getElementById("seconds")
    const centiseconds =document.getElementById("centiseconds")

    let minutes = document.createElement('P')
    

    let hours = document.createElement('P')
    hours.classList.add("hours")

   
      h = 0; m = 0; s = 0; cs = 0; chronometer=0;
function updateDate(){
    
    cs++;
    
    if(cs > 99){
           s++ ; cs= 0; 
      }
    if(s > 59){
           m++; 
           s= 0;
      }
    if(m > 59){
           h++;
           m= 0;
      }
    if(m!=0){
      minutes.textContent = ms+":";
      containerHour.insertBefore(minutes,containerHour.children[0])
      minutes.classList.add("minutesDef")
      seconds.classList.replace("second","minutesDef")
      centiseconds.classList.replace("centisecond","centisecond-minutes")

     }
      
    if(h > 24){
           h=0
      }
    if(h!=0){
      hours.textContent = hs+":";
      containerHour.insertBefore(hours,containerHour.children[0]) 
      hours.classList.add("hoursDef")
      minutes.classList.replace("minutesDef","hoursDef")
      seconds.classList.replace("minutesDef","hoursDef")
      centiseconds.classList.replace("centisecond-minutes","centisecond-hours")
    }
    
   css = ('0' + cs).slice(-2);
    ss = ('0' + s).slice(-2);
    ms = ('0' + m).slice(-2);
    hs = ('0' + h).slice(-2); 

    seconds.textContent = ss;
    centiseconds.textContent = css;
}

play.addEventListener("click", start); 


function start(){
      chronometer=setInterval(updateDate, 10);
      play.removeEventListener("click", start);
      play.classList.replace("play","stop")
      play.addEventListener("click", ()=>{ 
            clearInterval(chronometer);
            play.addEventListener("click", start);
            play.classList.replace("stop","play");
            
      })
};

 
reset.addEventListener("click", ()=>{ 
  if (h) {
    console.log((containerHour.children));
     containerHour.removeChild(containerHour.children[0]);
    
     containerHour.removeChild(containerHour.children[0])};

    seconds.classList.replace("hoursDef","second")
    centiseconds.classList.replace("centisecond-hours","centisecond") 
  if(m) {
     containerHour.removeChild(containerHour.children[0]);
     seconds.classList.replace("minutesDef","second")
     centiseconds.classList.replace("centisecond-minutes","centisecond") 
  }
        
      seconds.innerHTML = "00";   
      centiseconds.innerHTML = "00";
      h= 0; m= 0 ; s= 0; mls= 0;


      play.addEventListener("click", start);   
       
       
});


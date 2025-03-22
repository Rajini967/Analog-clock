let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");


setInterval(()=>{
    let day = new Date();
    //how many steps to move one value to one value
    let hh = day.getHours() * 30;//deg 
    let mm = day.getMinutes() * 6;//30/5
    let ss = day.getSeconds() * 6;//30/5
    
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    
    //Digital clock

    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let apm = document.getElementById("apm");
    
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let am = h >= 12 ? "PM" : "AM";  
    //convert 24hr clock to 12hr clock
     if(h > 12){
         h = h-12;
     }


    //add before zero before single digit number

    //  h=(h<10 ? "0" : "") + h;
    //  m=(m<10 ? "0" : "") + m;
    //  s=(s<10 ? "0" : "") + s;

     h=(h<10) ? "0" + h : h; 
     m=(m<10) ? "0" + m : m; 
     s=(s<10) ? "0" + s : s; 

    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    apm.innerHTML = am;
    


})

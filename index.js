const clock=()=>{
  let ampm=""
  let d= new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  let s=d.getSeconds();
  
  if(h<12){
      ampm="AM"
  }
  
  
  if(h>=12){
           h=h-12
      ampm="PM"
  }
  if(h<10){
      h='0'+h;
  }
  if(m<10){
      m='0'+m;
  }
  if(s<10){
      s='0'+s;
  }
  document.getElementById('hour').innerHTML=h;
  document.getElementById('min').innerHTML=m
  document.getElementById('sec').innerHTML=s
  document.getElementById('ampm').innerHTML= ampm




}

setInterval(()=>{
  clock()
},1000)

function toonDatum(){
  let d = new Date();
  let n = d.getDate()

  let dag = document.getElementById("Dag");
  dag.innerHTML= n;
  console.log(dag);
  
  let m = d.getMonth();
  let maand = document.getElementById("Maand");
  maand.innerHTML=m+1;
  console.log(m);
    
   
  let y = d.getFullYear();
  let jaar = document.getElementById("Jaar");
  jaar.innerHTML=y;
  console.log(y); 
}


window.addEventListener('DOMContentLoaded', toonDatum);

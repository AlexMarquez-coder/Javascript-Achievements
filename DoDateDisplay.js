
function toonDatum(){
    var d = new Date();
  var n = d.getDay()
  var dag = document.getElementById("Dag")
  dag.innerHTML= n
  console.log(dag)
    // Schrijf hier jouw code    
}

window.addEventListener('DOMContentLoaded', toonDatum);

function toonDatum(){
  var d = new Date();
var n = d.getMonth()
var maand = document.getElementById("Maand")
maand.innerHTML= n
console.log(maand)
}


window.addEventListener('DOMContentLoaded', toonDatum);


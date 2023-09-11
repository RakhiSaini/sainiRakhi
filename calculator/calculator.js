function allclear(){
document.getElementById("display").value="";
}

function append(value){
    document.getElementById("display").value += value;
}

function equal(){
    let d = document.getElementById("display");
   let result= eval(document.getElementById("display").value);
  d.value=result;
}
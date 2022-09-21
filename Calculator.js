function dis(value){
    document.getElementById("Answer").value += value;
}
function clr(){
    document.getElementById("Answer").value = '';
}
function solve(){
    var x = document.getElementById("Answer").value;
    document.getElementById("Answer").value = eval(x);
}
function backSpace(){
    var result = document.getElementById("Answer").value;   
    document.getElementById("Answer").value = result.substring(0, result.length-1);
}
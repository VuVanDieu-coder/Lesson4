// Tính toán dành cho form REC
function sumREC(){
    let heightREC=document.getElementById("heightREC").value;
    let widthREC=document.getElementById("widthREC").value;
    let resultREC="";

    resultREC=widthREC*heightREC;
    document.getElementById("resultREC").value=resultREC;
}
function reset_REC(){
    heightREC.value="";
    widthREC.value="";
    resultREC.value="";
}
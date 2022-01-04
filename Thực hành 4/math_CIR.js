 // Tính toán dành cho form CIRCLE
 function sumCIR(){
    const pi = 3.14195;
    let radiusCIR = document.getElementById("radiusCIR").value;
    let resultCIR="";

    // resultCIR= pi*math.pow(radiusCIR,2);
    resultCIR = pi * radiusCIR * radiusCIR;
    document.getElementById("resultCIR").innerHTML=resultCIR;
}
function reset_CIR(){
    radiusCIR.value="";
    resultCIR.value="";
}
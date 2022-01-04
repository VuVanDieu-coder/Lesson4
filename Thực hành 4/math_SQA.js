 // Tính toán dành cho form Square
 function sumSQA(){
    let heightSQA = document.getElementById("heightSQA").value;
    let resultSQA="";

    // resultSQA=math.pow(heightSQA,2);
    reset_SQA = heightSQA * heightSQA;
    document.getElementById("resultSQA").value=resultSQA;
}
function reset_SQA(){
    heightSQA.value="";
    resultSQA.value="";
}
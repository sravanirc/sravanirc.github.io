
function checkOperationFlag(){
    if(parseInt(document.getElementById('operationFlag').value)){
        // alert("Test");
        document.getElementById('operationFlag').value= 0;
        document.getElementById('result').value = 0;
    }
}
function input(x){
    // alert(document.getElementById('operationFlag').value);
   checkOperationFlag();
  let y = parseFloat( document.getElementById('result').value);
    
    if(parseInt(document.getElementById('decimalFlag').value) == 0){
       x += y * 10;
        document.getElementById('result').value = x;
        }

    else{
        let deciCount = parseInt(document.getElementById('decimalFlag').value);

        if(deciCount==1){
        x *= 1/10;
        y += x;
        document.getElementById('result').value=parseFloat(y);
        } 
         else{  checkOperationFlag(); 
            if(document.getElementById('result').value==0){
                    document.getElementById('result').value=x;
                }     
         else {document.getElementById('result').value += x;}
         }
   deciCount++;
   document.getElementById('decimalFlag').value = deciCount;
    }


// if(document.getElementById('result').value==0){
//     document.getElementById('result').value=x;
// }
// else {
//     document.getElementById('result').value+=x;
// }
}



function decimalPoint(){
    if(parseInt(document.getElementById('decimalFlag').value)==0){
document.getElementById('decimalFlag').value=1; 
       
    }

    if(parseInt(document.getElementById('operator').value)){
        document.getElementById('result').value=0;
    }
    
}

function allClear(){
    document.getElementById('result').value=0;
    document.getElementById('operator').value=0;
    document.getElementById('operand').value="";
    document.getElementById('operationFlag').value=0;
    document.getElementById('decimalFlag').value=0;
}

function plusMinus(){
  
    document.getElementById('result').value *= -1;
  
}

function percent(){
    let x = parseFloat(document.getElementById('result').value) ;
    x *= 0.01;
    document.getElementById('result').value=x;
}

function square(){
    let x = parseFloat(document.getElementById('result').value) ;
    x *= x;
    document.getElementById('result').value=x;
}


function checkOperand(){
    if(document.getElementById('operand').value == "" )
    {
        document.getElementById('operand').value = parseFloat(document.getElementById('result').value);
       // document.getElementById('result').value= 0; //temp
        document.getElementById('operationFlag').value=1;
  
    }

    else{ 
        checkOperation();
    }
} 

function checkOperation(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch(parseInt(document.getElementById('operator').value)){
        case 1: a+=b;
        break;
        case 2: a-=b;
        break;
        case 3: a*=b;
        break;
        case 4: a/=b;
        break;
        default:; 
    } 

document.getElementById('operand').value= a;
document.getElementById('result').value= a;
document.getElementById('operationFlag').value=1;  
}

function operators(x){

    switch (x){
        case 1: document.getElementById('operator').value= 1;
        break;
        case 2: document.getElementById('operator').value= 2;
        break;
        case 3: document.getElementById('operator').value= 3;
        break;
        case 4: document.getElementById('operator').value= 4;
        break;
        default:;
    }
    checkOperand();
}

function equals(){
    operators(parseInt(document.getElementById('operator').value));
    document.getElementById('result').value=parseFloat(document.getElementById('operand').value);
    document.getElementById('operand').value="";
    document.getElementById('operationFlag').value=1;  
}
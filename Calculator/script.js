function fn0(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+0;
}

function fn1(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+1;
}

function fn2(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+2;
}

function fn3(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+3;
}

function fn4(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+4;
}

function fn5(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+5;
}

function fn6(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+6;
}

function fn7(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+7;
}

function fn8(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+8;
}

function fn9(){
    let previous = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=previous+9;
}
function fnEr(){
    let previous = document.getElementById("Display").innerHTML;
    let EraPrevios= previous.slice(0,-1);
    document.getElementById("Display").innerHTML=EraPrevios;

}

let op;
let firstSave;

function fnAD(){
    firstSave = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=0;
     op = 1;

}

function fnMN(){
    firstSave = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=0;
    op=2;

}

function fnML(){
    firstSave = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=0;
    op=3;

}


function fnDV(){
    firstSave = document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=0;
    op=4;

}

function fnEQ(){
    let SecondSave = document.getElementById("Display").innerHTML;
    if(op == 1){
        document.getElementById("Display").innerHTML = parseInt(firstSave) + parseInt(SecondSave);
    }

    if(op == 2){
        document.getElementById("Display").innerHTML = parseInt(firstSave) - parseInt(SecondSave);
    }

    if(op == 3){
        document.getElementById("Display").innerHTML = parseInt(firstSave) * parseInt(SecondSave);
    }

    if(op == 4){
        document.getElementById("Display").innerHTML = parseInt(firstSave) / parseInt(SecondSave);
    }
    
    

}
function fnAC(){
    document.getElementById("Display").innerHTML = 0;
    op=0;
    firstSave=0;
}
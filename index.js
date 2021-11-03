


var inputEnergy = document.getElementById("inputEnergy").value;

function endRound(){
    inputEnergy = parseInt(inputEnergy) + 2 ;
    document.getElementById("inputEnergy").value = inputEnergy;
    console.log("initEnergy: ", inputEnergy);


}


function action(value){
    value == 1 ? inputEnergy++ : inputEnergy --;
    document.getElementById("inputEnergy").value = inputEnergy;
}


// This code is developed by Miguel Armenta 02/11/20021
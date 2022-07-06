
var currentNumberWrapper = document.getElementById('currentNumber'); //é o span do html. Pega o valor do id current number la do html.

var currentNumber = 0; //variavel que recebe o valor vindo do span.


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
} //incrementa 1 ao valor do current number ao clicar no botao especificado la no onclick do button do html.

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
} //faz a mesma coisa da anterior, só que decrementando 1 ao valor.


//LAÇOS DE REPETIÇÃO

//for- primeiro passa-se a variavel que vai passar pelos indices, depois passa a condição, e por ultimo o incremento ou decremento ao indice.

//repete a instrução para mostrar os elementos até quando o indice tiver um tamanho menor que o da lista.
var lista = [1,2,3,4,5,10];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
} 

var tam = lista.length; //traz o tamanho da lista.
console.log(tam);

//for/in- percorre uma lista a partir de um índice.
var list = [10,20,30,40];
var n = 50;
var val;

for (let i in list){
    if (list[i] == n){

        val = true; 
    }
}

if (val == true){

    console.log('Valor está na lista.');

} else{
    console.log('Valor não encontrado na lista.');

}

//for/of- percorre uma lista a partir de um valor.
var list = [10,20,30,40];
var n = 30;
var val;

for (i of list){
    if (i == n){

        val = true; 
    }
}

if (val == true){

    console.log('Valor está na lista.');

} else{
    console.log('Valor não encontrado na lista.');

}

//while- a verificação é feita antes da execução.
var a = 0;

while(a < 10){
    a++
}
console.log(a);

//do/while- a verificação é feita após a execução.
var b = 0;

do{
    b++;
    console.log(b);
} while(b < 10)




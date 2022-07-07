//VETORES (ARRAY)

/*
São listas ou matriz de variaveis, onde cada variavel (valor individual) possui um índice (que se inicia do 0), e os valores podem ser de vários tipos.
O array deve ser declarado entre colchetes '[]', e pode guardar qualquer valor dentro do indice, inclusive outros arrays.
*/

let notas = [['João', 8.5], ['Ana', 9]];

let valores = [8,9,10];

var array = [28,29,30];

console.log(notas[1][1]);

//MANIPULANDO ARRAYS

/*
forEach()- percorre o array, executando uma função para cada item.

push()- adiciona itens ao final de um array.

pop()- remove um item ao final do array.

shift()- remove um item no inicio de um array.

unshift()- adiciona um item no inicio do array.

indexOf()- retorna o índice de um valor no array.

for() - anda pela lista. for([expressaoInicial]; [condicao];[incremento]){
    declaração;
}

splice()- remove ou substitui um item atraves do indice.

slice()- retorna uma parte de um array existente.

*/
var valor;

for (i = 0; i <= 10; i ++){
    console.log(i);
}

var cores = ['Verde', 'Vermelho', 'Azul'];
//a função mostra os itens que forem passados dessa lista no forEach.
function mostrar(item){
    console.log(item);
}
cores.forEach(mostrar); //a função é executada dentro do forEach.

//adicionar item ao final.
array.push(31);
console.log(array);

//apagar o ultimo item.
array.pop();
console.log(array);

//apagar o primeiro item da lista.
array.shift();
console.log(array);

//adicionar um item no inicio.
array.unshift(10);
console.log(array);

//mostrar o indice de um valor da lista.
console.log(array.indexOf(30));

//remover ou substituir um item, passando o indice inicial e final, se passar um só ele apaga desse indice ate o final, se nao, ele apaga todos os itens nesse intervalo de indices.
array.splice(1, 1);
console.log(array);

//retornar uma parte do array, passando intervalo de indices.
console.log(array.slice(0,1));

let lista = [1,2,3];
var list = lista.slice(0,2);
console.log(list);






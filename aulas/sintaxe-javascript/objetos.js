//OBJETOS

/*
São dados que possuem propriedades e valores que definem suas características.
Deve ser declarado entre chaves '{}'. 
E assim como os arrays, objetos tbm podem guardar outros objetos.
*/

//Ex.:

var xicara = {
    cor: 'branca',
    tamanho: '50cm',
    funcao: tomarCarfe()
}

//Manipulando objetos

/*
Suas propriedades podem ser atribuidas à variaveis, facilitando sua manipulação. Isso é chamado de desestruturação.
*/

//Ex.:

var caneta = {cor: 'azul', tampa: 'azul', tamanho: '10cm', funcao: escrever()}

var cor = caneta.cor;
var tampa = caneta.tampa;
var tamanho = caneta.tamanho;
var funcao = caneta.escrever();

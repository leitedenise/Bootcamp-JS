/*
TIPAGEM

Declarar que tipo de dado a variavel recebe. (INT, FLOAT, STRING, ETC)

Mas ao declarar uma variavel com valor numerico inteiro o js ja reconhece como inteiro, se colocado qualquer valor entre aspas ele converte para string.

TIPOS PRIMITIVOS

Boolean- true ou false
null- nulo
undefined- não definido
number- número, inteiro ou decimal
string- conjunto de caracteres
array- lista de valores em uma única variavel
*/

//typeof- para verificar o tipo de uma variável

//esse comando mostrará no terminal, no console, que a variavel é do tipo number.
var v = 0;

console.log(typeof(v));

//EXISTEM 3 MODOS DE DECLARAR UMA VARIÁVEL

//var (local ou global, pode ser usada globalmente, em qualquer local do código, ou em somente em um bloco especifico)
var a = 5; //valor que pode variar.

//let (escopo local de bloco, só funciona dentro do bloco em que estiver)
let b = 3; //valor tbm pode ser alterado.

//const (escopo local de bloco)
const C = 6; //valor não pode ser alterado, e tbm não pode ser nulo inicialmente.

var global = 'Global';
console.log(global); //esse comando mostrara a mensagem, pois a variavel é visivel em qualquel lugar do codigo.

function escopolocal(){

    let local = 'Local'; 
   
}
console.log(local); //esse não mostrará, pois foi declarada dentro da função, como let, ficando disponivel para utilização somente dentro da função.

function escopolocal(){

    let local = 'Local'; 
    return local;
}
resp = escopolocal();
console.log(resp); //neste caso a variavel foi declarada dentro da função como let, mas ao retornar o valor dela, qdo chama a função dentro da variavel externa, ela recebe o valor da interna, sendo possivel printar esse valor, atraves da variavel externa.


function local(){
    let escopolocal = 'Escopo local';
    console.log(escopolocal);
}

local(); //agr ao chamar a função, mostrará a mensgame, pq ela foi utilizada dentro do bloco da função.

//REGRAS DE DECLARAÇÃO

//iniciar sempre com letras, underline ou cifrão, não iniciar com números e tbm não utilize espaços em branco.

//sempre declarar as variaveis no inicio do codigo.

//ATRIBUIÇÃO
//'=' sinal de igual, a variavel recebe um determinado valor.

//COMPARAÇÃO
//'==' dois sinais de igual, para comparar se uma variavel tem o mesmo valor de outra. Obs.: Ela pode considerar o numero 0 igual à string '0', por exemplo. Não diferencia tipo, só compara os valores.
var n1 = 0;
var n2 = '0';

if (n1 == n2){
    console.log('true');
} else{
    console.log('false');
}

//COMPARAÇÃO IDÊNTICA (compara não só os valores, mas os tipos tbm, diferenciando o número 0 de uma string '0', por exemplo)
//'===' usa-se tres sinais de igual.
var n3 = 0;
var n4 = '0';

if (n3 === n4){
    console.log('true');
} else{
    console.log('false')
}

//OPERADORES ARITMÉTICOS

/*
adição +
subtração -
multiplicação *
divisão inteira /
resto da divisão %
potenciação **
*/
var div = 6/2;
console.log(div); //mostra o valor inteiro.

var div2 = 5/2;
console.log(div2); //mostra o valor decimal, exatamente o quer na divisão.

var mod = 5%2;
console.log(mod); //retorna o resto da divisao de 5 por 2.

//OPERADORES RELACIONAIS

/*
> maior que
< menor que
>= maior ou igual
<= menor ou igual
*/

//OPERADORES LÓGICOS

/*
&& 'e' -> todos os valores sejam verdadeiros.
|| 'ou' -> um dos valores sejam verdadeiros.
! 'nao' -> inverte o valor de true p/ false ou de false p/ true.
*/



















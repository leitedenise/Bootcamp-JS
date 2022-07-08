//No javascript não precisa declarar qual o tipo de dado é, se é uma lista, um numero decimal ou inteiro, uma string, e pode-se modificar o tipo de dados ao longo do codigo.

let um = "um"; //string (do tipo texto)

um = 1; //altera o valor da variavel 'um' de uma string para o valor numerico '1'.

//TIPOS PRIMITIVOS
/*
numers
strings
boolean
*/

//TIPOS NÃO PRIMITIVOS
/*
objects
arrays
*/

//STRINGS (textos, caracteres)
/*
podem ser declaradas entre aspas ou crazes. Entre as crazes pode-se usar strings e variaveis juntas. Ex.:
*/

var nome = 'Denise';
var sobrenome = "Leite";

console.log(`O nome é ${nome} e o sobrenome é ${sobrenome}.`);

//para concatenar uma string com a outra.
let concat = nome.concat(sobrenome); //ele junta as duas strings, tornando uma só.

console.log(typeof(concat)); //para verificar o tipo de dado na variavel.

console.log(concat.length) //para trazer o tamanho da string.

let exemplo = new String('Oi'); //quando usa-se String com letra maiuscula para atribuir um dado, ele transforma a string em objeto.

//Concatenando string
var concatenando = nome + " " + sobrenome + '.'; //ele atribui pra esse variavel o valor das outras duas somado ao que for colocado como string diretamente nela.

console.log(concatenando);

//Pular linha
console.log(nome + '\n' + sobrenome);

//SPLIT 
let frase = 'Ola, mundo!';
console.log(frase.split("")); //passando uma string vazia (somenete aspas) ele separa os caracteres da frase em indices, como se fosse uma lista, cada caractere em um indice.

console.log(frase.split(" ")); //se der um espaço na string passada, ele separa as palavras, onde houver espaço, e joga tbm cada palavra em um indice.

//PARA VERIFICAR SE EXISTE UMA PALAVRA NA FRASE 
let exist = frase.includes("Denise");

if(exist){
    console.log(`A palavra existe na frase.`)
} else{
    console.log(`A palavra não existe na frase.`)
}

//frase.startswith() - verifica se a frase começa com determinado caractere.

//frase.endswith()- verifica se a frase termina com determinado caractere.

//frase.replace()- troca um caractere por um outro.
console.log(frase.replace('!', '.')); //troca o ponto de exclamação da frase por ponto.

//NÚMEROS (declarado sem aspas)
let num = 30;
let convert = num.toString() //converte o valor  numerico para string.
console.log(typeof(convert));

//MATH

/*
Math.floor() - arredonda um numero pra baixo.
Math.ceil() - arredonda um numero para cima.
Math.sqrt() - traz a raiz quadrada de um numero.
Math.max() - maior numero de uma lista.
Math.min() - menor numero de uma lista.
*/

//BOOLEANS (VERDADEIRO OU FALSO)
let validacao = 3 === 0; //retorna verdadeiro se a afirmação for correta (3 for igual a 0) ou falso se a afirmação nao for verdadeira (3 for diferente de 0).
console.log(validacao);

//ARRAYS (listas)

/*
DECLARAÇÃO
let array = [];

ADICIONAR VALORES AO FINAL
array.push();

REMOVER VALOR DO FINAL
array.pop();

REMOVE VALOR DO INICIO
array.shift();

ADICIONA VALOR AO INICIO
array.unshift();

PARA VERIFICAR SE EXISTE UM VALOR NO ARRAY
array.includes();

PARA VERIFICAR SE TODOS OS VALORES SÃO DETERMINADO VALOR
array.every().

PARA VERIFICAR SE ALGUM DOS ELEMENTOS DA LISTA É UM DETERMINADO VALOR
array.some();

PARA INVERTER OS VALORES DA LISTA
array.reverse();
*/

//OBJETOS (estrutura com chave e valor)
let pessoa = {
    nome: 'Denise',
    altura: 1.57
};

pessoa.nome = 'Ana'; //adiciona um valor à chave nome do objeto.

console.log(pessoa.altura);

//EMPTY, NULL E UNDEFINED

/*
EMPTY- a variavel foi declarada, mas com valor 0 ou string vazia "".
NULL - quando vc deseja que o valor nao exista, que seja nulo.
UNDEFINED- valor não foi declarado, não existe, ou nao foi definido.
*/














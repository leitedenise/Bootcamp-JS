//DECLARAÇÃO
function imprime(){
    console.log('Mensagem vinda de uma função.');
}
imprime();

//PARAMETROS
function soma(a, b){
    return a+b;
}
var sum = soma(5,3);
console.log(sum);

//TIPOS DE FUNÇÃO

//Funções declarativas- é a mais comum, e seve ser declarada usando a palavra function seguida do nome da função (obrigatório) e depois abre e fecha parenteses e abre e fecha chaves para passar a instrução.

//Expressões de Funções- são funções atribuidas à expressões, e pode ou não ter nome. Quando não passa o nome, atribui o nome da variavel à função.
var funcao = function(){
    console.log('Printar no console.');
}
funcao();

//Arrow Function- funções de espressão de sintaxe curta. São anônimas e não devem ser nomeadas.
var funções = () => {
    console.log('Função arrow function.');
}
funções();

//Funções aritméticas
/*
Number()- converte valores em números;
Prompt()- registra entradas de usuário;
Alert()- mostra mensagem ao usuário;
Template Strings- usa string junto com expressões.
*/

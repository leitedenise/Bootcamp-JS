/*
function verificaPalindromo(string){

    if(!string){
        return console.log('String inexistente.');

    } //verifica se a string é válida, se não está vazia.

    var stringRev = string.split("").reverse().join("") === string; //converte a string em lista, depois traz ela de tras pra frente e depois junta novamente em uma string.

    if(stringRev){
        console.log('A string é palindromo.')
    } else{
        console.log('A string não é palíndromo.')
    }
}
verificaPalindromo('lobo');
*/

function palindromo(string){
    if(!string){
        return console.log('String inexistente.');

    } //verifica se a string é válida.

    //anda pela string verificando se o primeiro caractere é igual ao ultimo, só precisando andar até metade da string.
    for(let i = 0; i < string.length / 2; i++){

        //verifica se o valor do indice em que esta na string é diferente do tamanho da string -1 e - o indice que esta, para verifica o valor oposto a esse indice.
        if(string[i] !== string[string.length - 1 - i]){
            return console.log('A string não é palíndromo.');        

        } else{
            return console.log('A string é palíndromo.')
        }
    }
       
}

palindromo('lobo');







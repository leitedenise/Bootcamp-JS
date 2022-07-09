//THROW
/*
Diferente do return, que trata o erro, devolve, como uma mensagem em string.
O throw trata, devolve, essa mensagem como um erro mesmo, exibindo a mensagem definida.
*/

//TRY...CATCH
/*
Dentro do bloco try verifica-se um pedaço de código e se algo estiver errado, ele é tratado na função catch. E pode-se manipular dentro do catch o erro, da maneira que preferir.
*/

/*
function palindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatch(string){
    try{
        palindromo(string)
    }
    catch(e){
        console.log(e)
    }
}
tryCatch('');
*/

//FINALLY
/*
Pode compor o bloco do try e catch. É uma instrução que será chamada independente do que pcprrer em try e catch, se houver erro ou não, ela tbm será executada. Ela aparece ao final, depois do cath. Não é obrigatório, podendo executar apenas o try e o catch.
 */



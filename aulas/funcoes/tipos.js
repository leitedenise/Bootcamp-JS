//Ao executar o return a função para e retorna o valor que obteve dela.

//Uma função pode ser declarada dentro de uma variavel.

//FUNÇÃO ANÔNIMA (quando não tem nome, não se da nome para a função)

const soma = function(a,b){
    return a+b;
}

soma(1,2);

//FUNÇÃO AUTOINVOCÁVEL (declara entre parenteses, sem nome, e logo em seguida a chama somente com '()')

(
    function(){
        let nome = 'Denise';
        return nome;
    }

)();

//CALLBACKS (função passada por argumento para outra função)







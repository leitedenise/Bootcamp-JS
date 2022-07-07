//ESTRUTURAS CONDICIONAIS

//if - se

//else if - se houver mais de uma condição

//else - se não (o contrario do if)

//if ternário (verificação em uma unica linha).
var a = 5;
var b = 2;
if(a != b? console.log(true): console.log(false));
//primeiro passa a condição, após o sinal de interrogação passa-se a instrução se a condição for verdadeira, e após os dois pontos passa-se a instrução se a condição passada no inicio nao for verdadeira.

//switch/case
var sexo = 'masculino';

switch(sexo){
    case 'masculino':
        console.log("Bem-vindo!");
        break;
    case false:
        console.log('Bem-vinda!');
        break;
}




/*
function comparaNumeros(n1, n2){
    const frase1 = criaFrase1(n1, n2);
    const frase2 = criaFrase2(n1, n2);

    return `${frase1} ${frase2}`
}

function criaFrase1(n1, n2){
    let iguais = '';

    if(n1 !== n2){
        iguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${iguais} são iguais.`

};

function criaFrase2(n1, n2){
    const soma = n1 + n2; 

    let result10 = 'menor';
    let result20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        result10 = 'maior';

    }
    if (compara20){
        result20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${result10}  que 10 e ${result20} que é 20.`
    
}

console.log(comparaNumeros(1,2));
*/

function comparaNumeros(n1, n2){
    let soma = n1 + n2;
    let iguais = '';
    let resul10 = '';
    let resul20 = '';

    if (n1 === n2 ){
        iguais = 'são iguais.';

    } else{
        iguais = 'não são iguais.';
    }

    if (soma > 10){
        resul10 = 'que é maior que 10 '

    } else{

        resul10 = 'que é menor que 10 '

    } 

    if (soma > 20){
        resul20 = 'e maior que 20.'

    } else{
        resul20 = 'e menor que 20.'
    }

    return alert(`Os números ${iguais} Sua soma é ${soma}, ${resul10} ${resul20}`)
}

var a = Number(prompt('Informe o primeiro número: '));
var b = Number(prompt('Informe o segundo número: '));

comparaNumeros(a, b);


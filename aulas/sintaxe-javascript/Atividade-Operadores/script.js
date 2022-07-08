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

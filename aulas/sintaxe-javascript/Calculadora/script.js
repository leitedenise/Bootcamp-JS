
function calculadora(){

    const operador = Number(prompt('Escolha uma operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão (/)\n 5- Resto da divisão (%)\n 6- Potenciação (**) '));

    if (!operador || operador >= 7 || operador <= 0){
        alert('ERRO- Operação inválida');
        calculadora();

    } else{

        let v1 = Number(prompt('Informe o primeiro valor: '));
        let v2 = Number(prompt('Informe o segundo valor: '));
        let result;

        if (!v1 || !v2){
            alert("ERRO- parâmetros inválidos!");
            calculadora();

        } else{
            
            function soma (){
                result = v1 + v2;
                alert(`${v1} + ${v2} = ${result}`);
                opcao();
            }
    
            function subtracao (){
                result = v1 - v2;
                alert(`${v1} - ${v2} = ${result}`);
                opcao();
            }
    
            function multiplicacao (){
                result = v1 * v2;
                alert(`${v1} * ${v2} = ${result}`);
                opcao();
            }
    
            function divisao (){
                result = v1 / v2;
                alert(`${v1} / ${v2} = ${result}`);
                opcao();
            }
    
            function resto (){
                result = v1 % v2;
                alert(`O resto da divisão de ${v1} por ${v2} é  ${result}`);
                opcao();
            }
    
            function potenciacao (){
                result = v1 ** v2;
                alert(`${v1} elevado a  ${v2} é ${result}`);
                opcao();
            }
    
            function opcao(){
                let opção = prompt('Deseja realizar mais uma operação?\n 1- Sim\n 2- Não');
    
                if (opção == 1){
                    calculadora();
                    
                } else if(opção == 2){
                    alert('Obrigado por usar nossa calculadora.');
                    
                    
                } else{
                    alert('Digite uma opção válida.');
                    opcao();
                }
            }

        }        

        if (operador == 1){
            soma();
        } else if(operador == 2){
            subtracao();
        } else if(operador == 3){
            multiplicacao();
        } else if(operador == 4){
            divisao();
        } else if(operador == 5){
            resto();
        } else{
            potenciacao();
        }
            
    } 

}    
calculadora();











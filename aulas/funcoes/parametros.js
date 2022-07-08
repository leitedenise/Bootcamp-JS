//VALORES PADRÃO

/* Quando não é enviado parametro vc pode definir um parametro padrão. */

//function exponenc(array, num = 1) -> define o valor padrao do numero, se ele nao for passado, definido.

//ARGUMENTS (array com todos os parametros passados quando a funcao é invocada.) 


//ARRAYS 

//spread- lida separadamente com cada elemento da lista, passando cada um deles como um parametro diferente.

function sum (x, y, z){
    return x + y + z;
}

const num = [1,2,3];
console.log(sum(...num)); //passa no parametro o nome da lista com tres pontos antes, que ele pega cada elemento separado e passa o valor de cada um para um parametro esperado da função.

//rest- combina os elementos individuais do parametro de uma função, em uma lista.

function tam(...args){
    console.log(args.length) //retorna o tamanho da lista criada com os argunmentos.

}//pega os argumentos passados e traz em uma lista.

tam(3,4,5); //neste caso o retorno da função será 3, por terem sido passados 3 argumentos, então o tamanho da lista criada é 3.





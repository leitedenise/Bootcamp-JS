//é uma referencia pro contexto em que se está.

//quando é colocado dentro de um metodo, ele vai se referir ao objeto no metodo.

//quando declarada sozinha se refere ao objeto global.

//dentro de uma função se refere ao objeto global da função.

//dentro de um evento, se refere ao elemento desse evento.

//MANIPULANDO O VALOR DE THIS

//Call 
const pessoas = {
    nome: 'Denise',
};

const animal = {
    nome: 'Spike',
};

function getSomething(){
    console.log(this.nome);

} //essa função retorna o valor do objeto que for passado por parametro.

getSomething.call(pessoas); //usa-se o nome da função.call e passa o objeto a qual quer o nome.

//Apply (funciona da mesma forma do call, porem os argumentos no apply são enviados dentro de um array.)

//Bind (clona a função e passa o valor que for passa para ela.)
const nomes = function (){
    return this.nome;
};

let denise = nomes.bind({nome: 'Denise' }); //essa variavel se torna o clone da função nomes, e passa pra função acima o nome passado aqui como argumento.

denise(); //chama-se o clone da função (que tbm se tornou uma funcao) e ele retorna o valor que foi passado e mandado pra função onde tem as instruções.






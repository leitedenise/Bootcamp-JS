//COMENTÁRIOS SÃO FEITOS COM DUAS BARRAS (PARA LINHA)

/* PARA COMENTÁRIOS ENTRE MAIS LINHAS(ABRE COM BARRA E ASTERISCO E FECHA COM ASTERISCO E BARRA) */

//Para declarar variáveis usa-se 'var' seguido do nome da variável, sempre fechando com ';'.

var preco = 2;

var desconto = 0.2;

var preco = preco - desconto;

//Para declarar constantes (valor que não muda) usa-se 'const' antes do nome, que preferencialmente deve ser escrito com letras maiúsculas, para diferenciar das variáveis, e fechando com ';' também.

const PRECO = 2 ;

var total = PRECO - desconto;
//neste caso já não pode subescrever a variavel do texto para receber o valor atualizado com o desconto. Deve-se cirar outra variavel para receber este valor.

//FUNÇÕES

function soma(a, b){
    console.log(a + b); //mostra o resultado no console.

    return a + b;//retorna o valor do resultado quando chamar a função em outro lugar do código.

}
//Para chamar a função.
soma(3, 5); //passando os valores dos parametros, na ordem em que foram declarados na função.

/*  PARA EXECUTAR UM ARQUIVO JS, PODE-SE USAR O TERMINAL OU CONSOLE

- CONSOLE: na pagina inicial da internet clica-se com o botao direito e vai em inspecionar, depois em console.
Pode-se declarar variaveis, fazer operações, testes, declarar funções, tudo no console.
Ou pode-se dar um ctrl + shift + i (atalho)

- TERMINAL: é necessário ter o node.js instalado, e pode-se usar o terminal do vscode (de onde estiver desenvolvendo) ou qualquer outro terminal.

Para listar as pastas que tem no local em que seu projeto está, usa-se o comando 'ls'.

Para ir a um local (pasta) usa-se 'cd' e o 'nome da pasta' e '/'.

Para abrir um arquivo dentro da pasta usa-se 'node' seguido do 'nome do arquivo' sempre com a extensao dele, ex.: 'node sintaxe.js'. 

Dessa forma irá exibir tudo o que vc colocou chamando em console.log no seu codigo neste arquivo.


*/

console.log('Hello World!');

//DOM são os elementos existentes na página.
/* 

No console coloca-se 
document.getElementsByTagName('h1') --> passa tudo o que tiver de h1 na página, e suas características.

Para usar o valor desse elemento.

var heading1 = document.getElementsByTagName('h1')[0]

Chamando essa variavel para conseguir modificar alguma característica desse elemento.

heading1.style.clor = 'red' (muda a cor do texto de h1 para vermelho, por exemplo)
*/















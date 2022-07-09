/*
Ação de um usuario em uma pagina web, quando tem interação com um elemento da pagina.

/TIPOS DE EVENTOS

Eventos de mouse

Mouseover
quando coloca o mouse em cima de um elemento ele tem ação mouse over.

Mouseout
quando sai do elemento.

Eventos de click

quando clica em um elemento.

dbclick- clique duplo em um elemento.

Eventos de atualização

quando atualiza a pagina, ou quando um pagina termina de carregar, para que algo aconteça.

ACIONANDO EVENTOS

Atraves da função addEventListener()

const botao = document.getElementById('meuBotao'); //seleção do elemento.

botao.addEventListener('click', outraFuncao); //coloca-se o tipo do evento e o que acontecerá qdo o evento for acionado.

ATRIBUTO HTML

especifica a função a ser chamada diretamente no elemento html.

<h1 onclick='mudaTexto(this)'Clique aqui>
</h1>

<script>
function mudaTexto(id){
    id.innerHTML = 'mudei';
}
</script>
quando clicar no h1 executa a função muda texto. Ele mudara o texto de 'clique aqui' para 'mudei'.

*/
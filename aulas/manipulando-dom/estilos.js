/*
ESTILIZANDO ELEMENTOS ATRAVÉS DE SUA CLASSE

Element.classList

No html:

<div id="meu-elemento" class="classe">

</div>

No arquivo:

const meuElemento = document.getElementById('meu-elemento');
cria uma constante para armazenar o elemento que vier do html, atraves do get. E atraves dela, é possivel manipular as classes.

meuElemento.classList.add('novo-estilo');
adiciona a classe 'meu estilo'

meuElemento.classList.remove('classe);
remove a classe 'classe'

meuElemento.classList.toggle('dark-mode');
adiciona a classe 'dark-mode' caso ela nao faça parte da lista e remove ela caso faça.


PARA ADICIONAR ESTILO CSS DIRETAMENTE

document.getElementsByName('p').style.color = 'blue'; //adiciona a cor azul a toda a fonte do paragrafo.
*/
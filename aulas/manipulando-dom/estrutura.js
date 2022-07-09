/*
Estrutura html

tag- representação da parte do código
body- corpo da pagina
html- indica que é uma pagina html
head- cabeça da pagina, com as configurações
h1- titulo principal da pagina
section- uma seção, indicando que o conteudo é diferente de outras seções
p- um paragrafo da pagina

Dentro de cada tag podemos colocar atributos diferentes

id- tem valor único
class= pode ter o mesmo indicador pra mais de um elemento

Métodos

document.getElementById('titulo'); isso retorna o que estiver no id titulo la do documento html.

documento.getElementsByTagName('li'); retorna os elementos que estiverem na tag 'li'

document.getElementByClassName('Textos'); faz a busca pelo nome de uma classe, retorna o conteudo que estiver com indentificador da classe textos.

Outro seletor (querySeletorAll)

Tambem retorna um array.

document.querySelectorAll('.primeira-classe.segunda-classe');
retorna os elementos dessas duas classes.

pode-se tbm fazer uma busca por uma classe com uma tag.

document.querySelectorAll('li.opcao'); retorna os elementos dentro dessa tag que tenham essa classe.

PARA ADICIONAR E DELETAR ELEMENTOS

document.createElement(element) cria um novo elemento html

document.removeChild(element) remove um elemento

document.appendChild(element) adiciona um elemento

document.replaceChild(new, old) substitui um elemento
*/
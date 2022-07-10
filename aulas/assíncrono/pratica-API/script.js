const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //url da api.


const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;

    } catch(e){
        console.log(e.message);
    }
   
}; //função para pegar a api das imagens.

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0]; //campo imagem do documento html

    img.src = await getCats(); //pega imagem que receber e coloca no campo de imagens do html.    
    
};//vai dar um await do getCats (função para pegar a api), e mostrar o resultado, no caso para carregar a imagem cada vez que clicar no botao.


loadImg(); //chamando a função que mostra o resultado.

const btn = document.getElementById('change-cat'); //campo botao do documento html.

btn.addEventListener('click', loadImg); //adicionando evento ao botao, para que toda vez que clicar mostre a imagem.
/*
Trocar todos os elementos pares e diferentes de 0, pelo numero 0. Se a lista for vazia retornar -1.
*/
var lista = [];

function trocaPares(lista){

    if (lista.length === 0){

        return -1;

        } else {

            for(let i = 0; i < lista.length; i++){
                if (lista[i] !== 0 && (lista[i] % 2) === 0){
        
                    lista[i] = 0; 
                    
                } 
            } 
        } return lista;
}
console.log(trocaPares(lista));


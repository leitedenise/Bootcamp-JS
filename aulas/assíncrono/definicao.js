/*
Assíncrono é algo que nao se efetiva, ou não ocorre ao mesmo tempo.

Um exemplo de assincronicidade seria:
- estudantes em um curso presencial, que devem todos ir e assistir o curso ao mesmo tempo, nos horários e datas marcadas, sem fazer outra coisa naquele momento.

Sincronicidade:
- aulas online ou até gravadas, que podem ser assistidas a qualquer momento e os estudantes podem fazer o curso no seu ritmo.

o JavaScript por padrão roda de maneira síncrona, começando um processo, ao terminar vai pra outro e quando termina começa outro processo, sempre na ordem de execução.

Se fosse assíncrono poderia realizar mais de um processo ao mesmo tempo.

Promises

Objeto de processamento assíncrono, que inicialmente tem valor desconhecido, podendo ser resolvida ou rejeitada, tendo o resultado só um tempo depois.

Ela tem 3 estados:
-Pendente (pending)
-Completado (fulfilled)
-Rejeitado (rejected)

Estrutura Promisse

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000);
});

Async/ await

Async é uma palavra pra indicar que, uma função por exemplo, é assincrona. 
É usada para poder usar a palavra await, pra retornar o resultado, pq ela é usada em promises. Ela para o código, resolve a promisse e só após isso o código continua rodando.









*/
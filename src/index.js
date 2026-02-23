export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafos)=>{ // -> ele junta varios arrays em um unico array -> ex: [[1,2],[3,4]] -> [1,2,3,4]
        if(!paragrafos) return [];
            return verificaPalavrasDuplicadas(paragrafos);
    })  
    return contagem;  
}

function extraiParagrafos(texto) {
     return texto.toLowerCase().split('\n');
}

//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com os resultados    

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; 
        }
    });
    return resultado;
}
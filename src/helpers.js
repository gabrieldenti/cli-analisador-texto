function filtraOcorrencias(paragrafos){
    return Object.keys(paragrafos)
    .filter(chave => paragrafos[chave] > 1)
    .map(chave => `\nPalavra: ${chave} - N° de ocorrências: ${paragrafos[chave]}`); //
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';

    listaPalavras.forEach((paragrafos, indice) => {
        const duplicadasArray = filtraOcorrencias(paragrafos);

        if (duplicadasArray.length > 0) {
            const duplicadas = duplicadasArray.join(', ');
            textoFinal += `Parágrafo ${indice + 1}: ${duplicadas}\n\n`;
        }
    });

    return textoFinal;
}

export { montaSaidaArquivo };
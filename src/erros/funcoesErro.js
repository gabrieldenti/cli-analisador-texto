export default function tratarErros(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Arquivo não encontrado. Verifique o caminho e tente novamente.');
    }else{
        return new Error('Ocorreu um erro ao ler o arquivo:', erro.message);
    }
}

//module.exports = tratarErros; //_> exporta a função tratarErros para ser utilizada em outros arquivos, como o index.js
//-> export default -> exporta a função tratarErros como padrão, ou seja, quando importarmos essa função em outro arquivo, não precisamos usar chaves para importar, basta usar o nome da função diretamente. Ex: import tratarErros from './erros/funcoesErro.js';
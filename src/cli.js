import fs from 'fs';
import path from 'path';
import tratarErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'Caminho do arquivo de texto a ser processado') //->flags para receber os caminhos dos arquivos de texto e destino
    .option('-d, --destino <string>', 'Caminho do arquivo de destino para salvar o resultado')
    .action((options) => {
        const { texto, destino } = options; //-> desestruturação do objeto options para obter os valores de texto e destino
        if (!texto || !destino) {
            console.error(chalk.yellowBright('Por favor, forneça os caminhos para o arquivo de texto e o arquivo de destino.'));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);  
        const caminhoDestino = path.resolve(destino);

        try{
            processaArquivo(caminhoTexto, caminhoDestino);
        }catch(erro){
            console.log(chalk.red('Ocorreu um erro ao processar o arquivo:', erro.message));
        }
    })

    program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf8', (erro, texto) => { //-> colocar Sync no final deixa o metodo sincrono.
        try{
            if(erro) throw erro; //-> se tiver um erro, ele vai lançar o erro para o catch e interromper a execução do código
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino)
        }catch(erro){
            tratarErros(erro);
        }
    });
}


// async function criaESalvaArquivo(listaPalavras, caminhoArquivo){
//     const arquivoNovo= `${caminhoArquivo} resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try{
//         await fs.promises.writeFile(arquivoNovo, textoPalavras);
//     }catch(erro){
//         throw erro;
//     }
// }

 function criaESalvaArquivo(listaPalavras, caminhoArquivo){
    const arquivoNovo = path.join(caminhoArquivo, 'resultado.txt');
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    
    fs.promises.writeFile(arquivoNovo, textoPalavras) //-> promisses 
    .then(() => {
        //processamento feito com o resultado da promessa.
        console.log(chalk.green('Arquivo salvo com sucesso!')); // ->
    })
    .catch(erro => {
        throw erro;
    })
    .finally(() => {
        console.log(chalk.green('Processo de criação e salvamento do arquivo concluído.')); //-> 
    });
}
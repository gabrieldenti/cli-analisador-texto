# 📝 CLI Analisador de Texto

Uma ferramenta de linha de comando (CLI) desenvolvida em **Node.js** para analisar arquivos de texto e identificar palavras repetidas em cada parágrafo. 

> **🎓 Sobre o Projeto:** Este projeto foi desenvolvido passo a passo através de um curso prático de programação da Alura. O foco principal do aprendizado foi a manipulação de arquivos do sistema (File System), o processamento de strings (arrays e objetos) e a criação de interfaces de terminal interativas.

## ✨ Funcionalidades

- **Leitura Assíncrona**: Processamento eficiente de arquivos de texto (`.txt`).
- **Extração Inteligente**: Separação e formatação automática de parágrafos.
- **Filtragem de Palavras**: Contagem de ocorrências, ignorando pontuações e palavras com menos de 3 letras.
- **Geração de Relatórios**: Criação automática de um arquivo `resultado.txt` com o relatório detalhado das palavras duplicadas por parágrafo.
- **Interface de Terminal**: Retorno visual amigável com tratamento de erros descritivo (usando `chalk`).

## 🛠️ Tecnologias e Bibliotecas Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[Commander.js](https://github.com/tj/commander.js)**: Para a criação da interface de linha de comando e recebimento de argumentos no terminal.
- **[Chalk](https://github.com/chalk/chalk)**: Para estilização e coloração das mensagens no terminal.

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

## 🚀 Como preparar e analisar seus próprios textos

Para que a ferramenta analise o texto que você quer, é preciso adicionar os arquivos manualmente no projeto:

1. Pegue o texto que você deseja analisar e salve-o em um arquivo com a extensão **`.txt`**.
2. Coloque esse arquivo manualmente dentro da pasta **`arquivos/`** na raiz do projeto.
3. Grave o nome do seu arquivo (ex: `meu-texto.txt`), pois você precisará digitá-lo no terminal.

## 💻 Passo a passo para executar o projeto

1. Faça o clone deste repositório:

    git clone https://github.com/gabrieldenti/cli-analisador-texto.git

2. Acesse a pasta do projeto:

    cd cli-analisador-texto(caso não esteja nela)

3. Instale as dependências necessárias (Chalk e Commander):

    npm install

4. Execute o programa passando o caminho do seu arquivo de texto (`-t`) e o diretório onde o relatório será salvo (`-d`):

    node src/cli.js -t arquivos/NOME_DO_SEU_ARQUIVO.txt -d resultados

> **Nota:** Após a execução com sucesso, um arquivo chamado `resultado.txt` será gerado automaticamente dentro da pasta informada no destino (`resultados`), contendo a análise do seu texto.

## 📂 Estrutura do Projeto

    ├── arquivos/             # Pasta onde você deve colocar manualmente seus arquivos .txt
    ├── resultados/           # Diretório onde os relatórios gerados são salvos
    ├── src/
    │   ├── erros/            # Tratamento de erros (ex: quando o txt não é encontrado)
    │   ├── cli.js            # Ponto de entrada da CLI
    │   ├── helpers.js        # Funções para montagem visual do relatório final
    │   └── index.js          # Lógica principal de contagem e validação das palavras
    ├── package.json          # Configurações e dependências do projeto
    └── README.md             # Documentação do projeto

## 👨‍💻 Autor

Desenvolvido por **Gabriel Denti**.

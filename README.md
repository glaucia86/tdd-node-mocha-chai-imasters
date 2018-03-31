# Artigo iMasters: Desenvolvendo TDD em Node.js com Mocha & Chai by Glaucia Lemos

Repositório responsável pelos códigos das demos desenvolvidos no artigo do iMasters.

## Recursos Utilizados no Desenvolvimento:

- Node.Js  v. 8.x
- Mocha.Js v. 5.0.2
- Chai.Js v. 4.1.2
- Visual Studio Code (IDE)
- Code Metrics; (análise de desenvolvimento do código)
- Conceitos de TDD (Test Drive Development);

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **Mocha.Js & Chai.Js**: após ter instalado o node na sua máquina, basta abrir o terminal na sua máquina e digitar o seguinte comando:

```
npm install -g mocha
```

Ao digitar esse comando, irá instalar de maneira global o 'Mocha' e 'Chai'

### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(qa-ladies)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

## Executando os Testes:

Basta executar o comando: **(dentro da pasta tdd-node-mocha-chai-imasters -> src)**

```
> mocha

```

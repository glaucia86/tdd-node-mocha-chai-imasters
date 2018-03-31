/**
 *
 * Arquivo: demo-test.js.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por executar as 4 operações: + - * /
 * Data: 07/03/2018
 *
 */

const assert = require('chai').assert;
const demo = require('../demo-2/demo');

// Resultados:
resultadoAdicionar = demo.adicionar(4, 4);
resultadoFrase = demo.frase();
resultadoNome = demo.apelido('Glau');

describe('Diferentes Tipos de Testes com Mocha & Chai:', () => {
  describe('Testando função: Frase', () => {
    it('Teste: Deve retornar a frase: Mocha & Chai são legais!"', () => {
      assert.equal(resultadoFrase, 'Mocha & Chai são legais!');
    });

    it('Teste: Deve retornar se o frase é do tipo "String"', () => {
      assert.typeOf(resultadoFrase, 'string');
    });
  });

  describe('Testando a função: Apelido', () => {
    it('Teste: Devo retornar o meu apelido "Glau"', () => {
      assert.equal(resultadoNome, 'Glau');
    });
  });

  describe('Testando função: Adicionar', () => {
    it('Teste: Devo retornar o valor abaixo de 4', () => {
      assert.isAbove(resultadoAdicionar, 4);
    });

    it('Teste: Deve retornar o tipo "Number"', () => {
      assert.typeOf(resultadoAdicionar, 'number');
    });
  });
});

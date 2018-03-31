/**
 * Arquivo: calculadora-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'calculadora.js'
 * Data: 30/03/2018
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

// Aqui estou usando a sintaxe: Assert (chai):
const chai = require('chai');
const calculadora = require('../demo-1/calculadora');

const assert = chai.assert;

// Primeiro Teste:
describe('TDD de Operações da Calculadora', () => {
  it('Teste: Deve Somar 2 Números', () => {
    assert.equal(calculadora.adicionar(5, 5), 10);
  });

  it('Teste: Deve Subtrair 2 Números', () => {
    assert.equal(calculadora.subtrair(10, 5), 5);
  });

  it('Teste: Deve Multiplicar 2 Números', () => {
    assert.equal(calculadora.multiplicar(10, 5), 50);
  });

  it('Teste: Deve dividir 2 Números', () => {
    assert.equal(calculadora.dividir(18, 2), 9);
  });
});

// Segundo teste:
describe('Outros tipos de testes com assertions - Chai', () => {
  it('Teste: Deve verificar se um determinado número é maior ou igual', () => {
    assert.isAtLeast(6, 2, '6 é maior do que 2');
    assert.isAtLeast(7, 7, '7 é igual a 7');
  });
});

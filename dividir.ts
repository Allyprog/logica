const tela = require('readline-sync')

const valorConta: number = 200
const quantidadePessoas: number = 4


const taxaServico: number = valorConta * 0.10
const valorTotalComTaxa: number = valorConta + taxaServico
const valorPorPessoa: number = valorTotalComTaxa / quantidadePessoas

console.log(`Valor da conta: R$ ${valorConta.toFixed(2)}`)
console.log(`Taxa de servico (10%): R$ ${taxaServico.toFixed(2)}`)
console.log(`Total com taxa: R$ ${valorTotalComTaxa.toFixed(2)}`)
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`)


const tela = require('readline-sync')

const m:number = Number(tela.question('informe um valor em metros(s): '))
const cm:number = m * 100
const mm:number = m * 1000

console.log(`Metro(s): ${m}\nCentimetros(s): ${cm}\nMilimetros(s) ${mm}`)


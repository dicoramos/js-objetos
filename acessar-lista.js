const cliente = {
  nome:"Andre",
  idade:36,
  cpf:"12543652266",
  email:"andre@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))
//Executa uma função em cada elemento do array de forma individual.	Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

console.log(cliente["nome"])
console.log(cliente["conta"])//underfine
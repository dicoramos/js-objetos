const cliente = {
  nome:"Andre",
  idade:36,
  cpf:"12543652266",
  email:"andre@email.com"
}

console.log(cliente);//antes de add fone

cliente.fone ="9242525252"//a chave ainda não existe então acrescenta fone

console.log(cliente);//depois de add fone

cliente.fone ="875254554"//a chave já existe então substitui fone

console.log(cliente)
class Cliente { //o nome da classe sempre começa com letra maiúscula
    constructor(nome,email,cpf,saldo){
     this.nome = nome
     this.email = email
     this.cpf = cpf
     this.saldo = saldo
    }

    depositar(valor){   //comportamento para classe cliente
        this.saldo += valor
    }

    exibirSaldo(){ //na classe não precisa escrever a palavra function
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre","andre@email.com","112233665544",100)

andre.exibirSaldo()

console.log(andre)
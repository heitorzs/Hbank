import { Clientes } from "./Clientes.js";
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _clientes;

     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    
set Clientes(novoValor){
    if(novoValor instanceof Clientes){
        this._clientes = novoValor;
    }
}

get clientes(){
    return this._clientes;
}

constructor (clientes, agencia){
    this.Clientes = clientes;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas +=1;
}

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}

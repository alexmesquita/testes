var conta = {
	saldo: 0,
	deposita: function(valor){
		this.saldo += valor;
	}
};

conta.deposita(25);

console.log(conta.saldo);
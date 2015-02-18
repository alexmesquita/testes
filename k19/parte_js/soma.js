var soma = function() {
	var soma = 0

	for(var i = 0; i < arguments.length; i++){
		soma += arguments[i]
	}

	return soma
}

var result = soma(1,2,3,4,5,6,7,8,9)

console.log(result)
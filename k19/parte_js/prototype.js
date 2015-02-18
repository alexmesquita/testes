var curso = {
	sigla: "K11",
	nome: "OO"
};

var novo_curso = Object.create(curso);

console.log(novo_curso.sigla);
console.log(novo_curso.nome);
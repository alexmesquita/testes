var curso = {
	sigla: "K11",
	nome: "OO"
}

var novo_curso = Object.create(curso);

novo_curso.carga_horaria = 36;

console.log(curso.sigla);
console.log(curso.nome);
console.log(curso.carga_horaria);
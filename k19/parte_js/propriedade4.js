var curso = {
	sigla: "K11",
	nome: "OO"
}

var novo_curso = Object.create(curso);

novo_curso.sigla = "K21";
novo_curso.nome = "JPA2";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);

curso.sigla = "K12";
curso.nome = "JSF";

console.log(novo_curso.sigla);
console.log(novo_curso.nome);
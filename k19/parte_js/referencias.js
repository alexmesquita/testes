var curso = {
	sigla: "K11",
	nome: "OO"
};

console.log(curso.sigla);
console.log(curso.nome);

var x = curso;

x.sigla = "K12";
x.nome = "JSF";

console.log(curso.sigla);
console.log(curso.nome);
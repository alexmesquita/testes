var cursos1 = [1,2,3,4]
var cursos2 = [5,6,7,8]

var cursos = cursos1.concat(cursos2)

cursos.push(6)

for (var i = 0; i < cursos.length; i++) {
	console.log(cursos[i])
};

console.log(cursos)

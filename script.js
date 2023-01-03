const students = [
  {
    name: "Paula",
    n1: 9,
    n2: 7,
  },
  {
    name: "Gustavo",
    n1: 4,
    n2: 6,
  },
  {
    name: "Gislaine",
    n1: 10,
    n2: 9,
  },
  {
    name: "Mateus",
    n1: 3,
    n2: 7,
  }
]

function average(n1, n2) {
  return ((n1 + n2) / 2)
}

function printResult(student) {
  const finalGrade = average(student.n1, student.n2)
  variavel = finalGrade >= 7 ?
             "\nParabéns, " + student.name + "! Você foi aprovado(a) no concurso!" : "\nNão foi dessa vez, " + student.name + "! Tente novamente"
  alert("A média do(a) aluno(a) " + student.name + " é: " + finalGrade + variavel)
}

for (let student of students) {
  printResult(student)
}


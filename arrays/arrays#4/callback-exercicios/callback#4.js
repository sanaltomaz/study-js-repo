/* 4° exercício.
------------------------------------------------------------------------------------
* Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
  Copiar código
  Utilize o método concat() para unir os arrays das turmas A e B em um único array 
  chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno 
  específico pelo nome no array todosAlunos. 
  Exiba no console uma mensagem informando o nome do aluno procurado; 
  caso não exista na lista, retorne uma mensagem de aviso, 
  por exemplo Aluno não encontrado.

------------------------------------------------------------------------------------
*/
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const nomeAluno = "João"
const buscarAluno = todasAsTurmas.find(aluno => aluno.split(" ")[0] === nomeAluno)

if (buscarAluno === undefined){
  console.log(`O Aluno ${nomeAluno} não foi encontrado na turmas.`);
}else{
  console.log(`O Aluno ${buscarAluno} foi encontrado nas turmas.`);
}


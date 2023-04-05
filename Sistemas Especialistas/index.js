// Definir a base de conhecimento
const conhecimento = {
  sem_combustivel: {
    sintomas: ["motor não pega"],
    solucao: "Abastecer o tanque",
  },
  bateria_descarregada: {
    sintomas: ["motor não pega", "faróis fracos"],
    solucao: "Recarregar ou substituir a bateria",
  },
  falha_vela_ignicao: {
    sintomas: ["motor falhando", "ruído metálico"],
    solucao: "Substituir a vela de ignição",
  },
  falha_motor_partida: {
    sintomas: ["motor não pega", "barulho metálico"],
    solucao: "Reparar ou substituir o motor de partida",
  },
};

// Obter informações do usuário
const sintomas = [];
let sintoma = prompt("Qual o sintoma observado na ignição do veículo?");
while (sintoma !== "") {
  sintomas.push(sintoma);
  sintoma = prompt("Qual o próximo sintoma observado na ignição do veículo?");
}

// Realizar o diagnóstico com base nas informações do usuário e na base de conhecimento
const diagnostico = [];
for (const falha in conhecimento) {
  if (
    conhecimento[falha].sintomas.every((sintoma) => sintomas.includes(sintoma))
  ) {
    diagnostico.push(conhecimento[falha].solucao);
  }
}

// Apresentar o resultado do diagnóstico
if (diagnostico.length > 0) {
  alert("O problema pode ser resolvido com as seguintes soluções: ");
  for (const solucao of diagnostico) {
    alert(solucao);
  }
} else {
  alert("Não foi possível determinar a causa do problema na ignição.");
}

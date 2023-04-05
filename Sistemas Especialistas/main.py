# Definir a base de conhecimento
conhecimento = {
    'sem_combustivel': {
        'sintomas': ['motor não pega'],
        'solucao': 'abastecer o tanque'
    },
    'bateria_descarregada': {
        'sintomas': ['motor não pega', 'faróis fracos'],
        'solucao': 'recarregar ou substituir a bateria'
    },
    'falha_vela_ignicao': {
        'sintomas': ['motor falhando', 'ruído metálico'],
        'solucao': 'substituir a vela de ignição'
    },
    'falha_motor_partida': {
        'sintomas': ['motor não pega', 'barulho metálico'],
        'solucao': 'reparar ou substituir o motor de partida'
    }
}

# Obter informações do usuário
sintomas = []
sintoma = input('Qual o sintoma observado na ignição do veículo? ')
while sintoma != '':
    sintomas.append(sintoma)
    sintoma = input('Qual o próximo sintoma observado na ignição do veículo? ')

# Realizar o diagnóstico com base nas informações do usuário e na base de conhecimento
diagnostico = []
for falha, info in conhecimento.items():
    if all(sintoma in info['sintomas'] for sintoma in sintomas):
        diagnostico.append(info['solucao'])

# Apresentar o resultado do diagnóstico
if diagnostico:
    print('O problema pode ser resolvido com as seguintes soluções: ')
    for solucao in diagnostico:
        print(solucao)
else:
    print('Não foi possível determinar a causa do problema na ignição.')
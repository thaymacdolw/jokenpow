// constante do resultado : ganhou, perdeu ou empate
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0

//Precisa criar uma funçao que identifique toda vez que for jogado 
const playHuman = (humanChoice) => {
    console.log (humanChoice)

    playTheGame(humanChoice, playMachine())
}

//Agora precisamos pegar a escolha da máquina, que vai ser aleatória entre as opçoes

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices [randomNumber]
}

//  Agora é preciso verificar quem ganhou, o humano ou a máquina

const playTheGame = (human,machine) => {

    console.log('Humano: ' + human + "Maquina:" + machine)

    if(human === machine) {
        result.innerHTML = "A draw"
    } else if ( (human === 'paper' && machine === 'rock')||
    (human === 'rock' && machine ==='scissors') ||
    (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "You won"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Alexa won"
    }
}

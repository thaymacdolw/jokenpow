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
}
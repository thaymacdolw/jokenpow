//Precisa criar uma funçao que identifique toda vez que for jogado 
const playHuman = (humanChoice) => {
    console.log (humanChoice)

    console.log('return ' + playMachine())
}

//Agora precisamos pegar a escolha da máquina, que vai ser aleatória entre as opçoes

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices [randomNumber]
}

// parei no 15:26 do vídeo 
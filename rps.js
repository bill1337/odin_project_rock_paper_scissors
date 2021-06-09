function Rps(){
    let playerScore = 0
    let compScore = 0
   let input = prompt('Rock, Paper, or Scissors?')
   let inputlc = input.toLowerCase()
   console.log(inputlc)

    function computerTurn() {
        let compOptions = ['rock', 'paper', 'scissors']
        let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
        console.log(compChoice)
        console.log(playerScore)
        console.log(compScore)
        if(inputlc === 'rock' && compChoice === 'scissors'){
            alert('rock beats scissors! You win!')
        }else if (inputlc === 'rock' && compChoice === 'paper') {
            alert('paper beats rock! You lose')
        }else if (inputlc === 'paper' && compChoice === 'rock'){
            alert('paper beats rock! You win!')
        }else if (inputlc === 'paper' && compChoice === 'scissors'){
            alert('Scissors beats paper, You lose!')
        }else if (inputlc === 'scissors' && compChoice === 'rock'){
            alert('rock beats scissors, You lose!')
        }else if(inputlc === 'scissors' && compChoice === 'paper'){
            alert('scissors beats paper! You win!')
        }
       if(compChoice === inputlc){
           alert(`you both picked ${compChoice}, tie game!`)
       }
    }
    computerTurn()
   
    
        
    
    
    
}

Rps()

// console.log(computerTurn)
//     let x = prompt('Rock, Paper, or Scissors')
        
//     if(x === 'rock'){
//         alert('Tie game!')
    
//     } else {
//         alert("Fuck You!")
//     }


// function computerTurn() {
//     let compOptions = ['rock', 'paper', 'scissors']
//     let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
//     console.log(compChoice)
// }

// computerTurn()
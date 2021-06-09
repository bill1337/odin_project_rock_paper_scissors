function game(){
    let playerScore = 0
    let compScore = 0

    function increasePlayerScore(){
        playerScore++
    }
    
    function increaseCompScore(){
        compScore++
    }
function Rps(){
    
   let input = prompt('Rock, Paper, or Scissors?')
   let inputlc = input.toLowerCase()
   console.log(inputlc)

    function computerTurn() {
        let compOptions = ['rock', 'paper', 'scissors']
        let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
        console.log(compChoice)
        
        if(inputlc === 'rock' && compChoice === 'scissors'){
            alert('rock beats scissors! You win!'), increasePlayerScore()
        }else if (inputlc === 'rock' && compChoice === 'paper') {
            alert('paper beats rock! You lose'), increaseCompScore()
        }else if (inputlc === 'paper' && compChoice === 'rock'){
            alert('paper beats rock! You win!'), increasePlayerScore()
        }else if (inputlc === 'paper' && compChoice === 'scissors'){
            alert('Scissors beats paper, You lose!'), increaseCompScore()
        }else if (inputlc === 'scissors' && compChoice === 'rock'){
            alert('rock beats scissors, You lose!'), increaseCompScore()
        }else if(inputlc === 'scissors' && compChoice === 'paper'){
            alert('scissors beats paper! You win!'), increasePlayerScore()
        }
       if(compChoice === inputlc){
           alert(`you both picked ${compChoice}, tie game!`)
       }
       console.log(playerScore)
        console.log(compScore)
    }
    computerTurn()
   
     
}


Rps()
Rps()
Rps()
Rps()
Rps()
if(playerScore > compScore){
    alert('You Win! Congratulations!')
}

if(playerScore < compScore){
    alert('You Lose! Sorry!')
}

if(playerScore === compScore){
    alert(' The game is tied!')
}
}



game()

function Rps(){
    
   let input = prompt('Rock, Paper, or Scissors?')
   let inputlc = input.toLowerCase()
   console.log(inputlc)

    function computerTurn() {
        let compOptions = ['rock', 'paper', 'scissors']
        let compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
        console.log(compChoice)
       
    }
    computerTurn()
   
    if(choice === inputlc){
        alert(`computer chose ${compChoice}, tie game!`)
    }

    
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
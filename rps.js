function computerTurn() {
    let x = ['rock', 'paper', 'scissors']
    let y = x[Math.floor(Math.random() * x.length)]
    console.log(y)
}
computerTurn()
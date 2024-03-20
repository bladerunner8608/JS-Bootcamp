// const myAge = 37
// const message = myAge >= 18 ? 'You can Drive!' : 'You cannot Drive!'
// console.log(message)

const myAge = 26
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the Error Page'
}
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Chris', 'Linda', 'Andrew']

const gameMessage = team.length <= 4 ? `Team Size: ${team.length}` : 'Too many people on your team'
console.log(gameMessage)




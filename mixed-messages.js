// mixed messages project, generates nonsense advice.

// Define global Variables.

const listOfThings = [
    'peanut butter', 
    'acid', 
    'peppers', 
    'tums', 
    'apple juice', 
    'a battery', 
    'a popsicle', 
    'a tampon', 
    'shorts', 
    'a sponge',
    'a wet noodle',
    'fifteen dollars',
    'a bag of chips',
    'flat soda',
    'corn bread',
    'cowboy boots',
    'pickles',
    'a roll of toilet paper',
    'a wallet',
    'a credit card',
    'a sassy pooch'
]
const listOfTasks = [
    "cleaning a toilet",
    "washing the dishes",
    'eating a bagel',
    'using the toilet',
    'flying a plane',
    'running a race',
    'playing basketball',
    'leading a revolution against the bourgeoisie',
    'lying down and taking it',
    'giving up',
    'getting back up',
    'giving a dog a bath',
    'buying groceries',
    'planting flowers',
    'cutting the grass',
    'making dinner',
    'running a cartel',
    'selling drugs',
    'buying drugs',
    'doing drugs',
    'coding'
]
const listOfDifficulties = [
    "impossible",
    'easy peasy',
    'intolerable',
    'a breeze',
    'hard work',
    'delightful',
    'reasonably easy',
    'reasonably hard',
    'hardly even an issue',
    'go quickly',
    'take forever'
]
const _randomThing = () => {
    let length = listOfThings.length 
    let randomIndex =  Math.floor(Math.random() * length)
    let randomThing = listOfThings[randomIndex]
    return randomThing;
}
const _randomTask = () => {
    let index =  Math.floor(Math.random() * listOfTasks.length)
    let randomTask = listOfTasks[index]
    return randomTask;
}
const _randomDifficulty = () => {
    let index =  Math.floor(Math.random() * listOfDifficulties.length)
    let randomDifficulty = listOfDifficulties[index]
    return  randomDifficulty;
}
const messageGenerator = () => {
    let randomThing1 = _randomThing();
    let randomThing2 = _randomThing();
    let randomTask = _randomTask();
    let randomDifficulty = _randomDifficulty();
    console.log(`${randomThing1} and ${randomThing2} makes ${randomTask} ${randomDifficulty}!`)
}
messageGenerator()


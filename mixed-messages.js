// mixed messages project, generates nonsense advice.

// messageGenerator1 resources

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
    ' writing code'
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
const messageGenerator1 = () => {
    let randomThing1 = _randomThing();
    let randomThing2 = _randomThing();
    let randomTask = _randomTask();
    let randomDifficulty = _randomDifficulty();
    if (randomThing1 == randomThing2){
        randomThing2 = _randomThing();
    }
    console.log(`${randomThing1} and ${randomThing2} makes ${randomTask} ${randomDifficulty}!`)
}


// messageGenerator2 resources

const listOfNouns = [
    'mother', 
    'father', 
    'baby', 
    'child', 
    'toddler', 
    'teenager', 
    'grandmother', 
    'student', 
    'teacher', 
    'minister', 
    'businessperson', 
    'salesclerk', 
    'woman', 
    'man', 
    'table', 
    'truck', 
    'book', 
    'pencil', 
    'iPad', 
    'computer', 
    'coat', 
    'boots'
]
const listOfQualities = [
    'good',
    'bad',
    'easy',
    'hard',
    'never a bad idea',
    'a lot of work',
    'a hassle',
    'vindictive',
    'evil',
    'fun',
    'goofy',
    'just dandy',
    'a good day',
    'sometimes enough just',
    'never enough',
    'in your best interest',
    'worth it',
    'heartbreaking',
    'awe inspiring',
    'tempting',
    'perfectly normal',
    'kind',
    'nice',
    'smart'
]
const listOfVerbs = [
    'ask',
    'be',
    'become',
    'call',
    'do',
    'feel',
    'find',
    'get',
    'give away',
    'go to',
    'have',
    'hear',
    'help',
    'keep',
    'know',
    'leave',
    'let go of',
    'like',
    'live with',
    'look at',
    'mace',
    'kiss',
    'beat',
    'move',
    'need',
    'play with',
    'put up with',
    'chase',
    'speak to',
    'see',
    'show',
    'take',
    'talk to',
    'tell',
    'think about',
    'try',
    'turn',
    'use',
    'want',
    'work with'
]
const _randomQuality = () => {
    let length = listOfQualities.length 
    let randomIndex =  Math.floor(Math.random() * length)
    let randomThing = listOfQualities[randomIndex]
    return randomThing;
}
const _randomVerb = () => {
    let length = listOfVerbs.length 
    let randomIndex =  Math.floor(Math.random() * length)
    let randomThing = listOfVerbs[randomIndex]
    return randomThing;
}
const _randomNoun = () => {
    let length = listOfNouns.length 
    let randomIndex =  Math.floor(Math.random() * length)
    let randomThing = listOfNouns[randomIndex]
    return randomThing;
}
const messageGenerator2 = () => {
    let randomQuality = _randomQuality()
    let randomVerb = _randomVerb()
    let randomNoun = _randomNoun()
    console.log(`It's ${randomQuality} to ${randomVerb} your ${randomNoun}.`)
}

// randomMessage resources

const randomMessage = () => {
    let randomNum = Math.floor(Math.random() * 2)
    switch (randomNum) {
        case 0: messageGenerator1()
        break;
        case 1: messageGenerator2()
        break;
        default: console.log('something went very wrong')
        break;
    }
}

// run program
randomMessage()
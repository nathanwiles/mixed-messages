// mixed messages project, generates nonsense advice.

// global resources

const _randomFromList = (listName) => {
    let length = listName.length 
    let randomIndex =  Math.floor(Math.random() * length)
    let randomThing = listName[randomIndex]
    return randomThing;
}
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
    'writing code'
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
const messageGenerator1 = () => {
    let randomThing1 = _randomFromList(listOfThings);
    let randomThing2 = _randomFromList(listOfThings);
    let randomTask = _randomFromList(listOfTasks);
    let randomDifficulty = _randomFromList(listOfDifficulties);
    // makes sure thing 1 and 2 are different.
    while (randomThing1 == randomThing2){
        randomThing2 = _randomFromList(listOfThings);
    }
    // logs the resulting sentence
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
    'students', 
    'teacher', 
    'minister', 
    'business partner', 
    'salesclerk', 
    'woman', 
    'man', 
    'table', 
    'truck', 
    'book', 
    'pencil', 
    'tablet', 
    'computer', 
    'coat', 
    'boots',
    'dog',
    'cat',
    'food',
    'taxes',
    'hands',
    'feet',
    'hair',
    'fingers'
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
    'be with',
    'become',
    'call',
    'do',
    'feel',
    'find',
    'get into',
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
    'tell things to',
    'think about',
    'try out',
    'tune out',
    'use',
    'want',
    'work with'
]
const messageGenerator2 = () => {
    let randomQuality = _randomFromList(listOfQualities)
    let randomVerb = _randomFromList(listOfVerbs)
    let randomNoun = _randomFromList(listOfNouns)
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
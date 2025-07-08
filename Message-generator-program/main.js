const messageOptions = {
    faction:['Sith', 'Jedi', 'Padawan', 'Clone trooper'],
    favoriteTrilogy:['Prequels', 'Original', 'Sequels'],
    phrase:['May the force be with you', 'Execute order 66...','I have brought peace...','Hello there']
}

const generateRandomNumber = num =>{
    return Math.floor(Math.random() * num);
}

let randomOnes = [];

const getRandomElements = obj =>{
    for(const property in obj){
        if(property === 'faction'){
            const elementIndex = generateRandomNumber(obj[property].length);
            randomOnes.push('You are a: '+ obj[property][elementIndex]+'.');
        }

        if(property === 'favoriteTrilogy'){
            const elementIndex = generateRandomNumber(obj[property].length);
            randomOnes.push('You favorite triology is: '+ obj[property][elementIndex]+'.');
        }

        if(property === 'phrase'){
            const elementIndex = generateRandomNumber(obj[property].length);
            randomOnes.push('You favorite phrase is: '+ obj[property][elementIndex]+'.');
        }
    }
}

const getPersonalMessage = arr =>{
    getRandomElements(messageOptions);
    arr.forEach(element => {
        console.log(element);
    });
} 

getPersonalMessage(randomOnes);


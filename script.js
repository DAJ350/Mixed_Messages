console.log("Portfolio Project: Mixed Messages //Initial Dev Branch");

/*

Mixed Messages Program

Message Generator
User Input: 
- None

Output:
- 1x Fully randomised message consisting of at least 3 data components which are each randomised per instance. 

Actions: 
- Randomly select words that will make up the message.
    - Needs a database of words to select from. This could be an array.
    - Each word should fall into a category as these categories will determine where in the message the word should appear. 
        - Catergories: Verbs, Nouns, Pronouns, Adjectives, Adverbs. 
- Create templates that will be used to structure the message. The words will then be plugged into this template. 
- Return the final combination of words that make the message. 
- Set a variable for each type of word to be a random value from the appropriate category of words. This variable will be what is plugged into the final message. 
- Randomly select the message template to be used in this instance.
- After value has be randomly selected for each word variable and the message template has been set. Plug each word variable into the message template to create the message.
- Create functionality that returns the randomised inspirational message. 
- Capitalise the first letter of what ever word is in the first index of the resulting message. 

Steps: 

1) Create database of words that can be picked from to form the message. 
    - This database can be an object that contains multiple different arrays of words. Each array will contain words of a specific category. E.g; array1 contains verbs,
    array2 contains pronouns, array3 contains adjectives etc. 

2) Create a database of message templates that are to be used to structure the messages. These templates will be randomly selected during each instance of the program. 
    - String interpolation can be used to create the templates. 
    - Within the function, the variables will have to be declared with a variable declaration as they are currenly hoisted? (Not certain about this)

3) Function Declaration

4) Create variables for each message component.
    - Variable should select the value of a randomly selected element in the array contained with the correlating property.
    E.g; variable "verb" should contain a randomly selected element from the array contained in the verbs property of the messageComponents object. 

5) Return a randomly seleced template that will be used to structure the message that will be created in this instance.
    - There will only be 5 templates available. Creating a randomiser variable and setting the selected case in correlation to a random number generation can achieve this.
    - As the variables for each type of word have all already had their values set at this point, the templates should automatically have the populated strings for the instance. 

6) Capatalise the first letter of the first word in the resulting message. 
*/

const messageComponents = {
    verbs: ["achieve", "believe", "inspire", "conquer", "strive", "create", "embrace", "overcome", "pursue", "transform"],
    adjectives: ["powerful", "resilient", "fearless", "motivated", "unstoppable", "bold", "determined", "ambitious", "brave", "strong"],
    nouns: ["success", "journey", "strength", "dream", "courage", "vision", "challenge", "goal", "opportunity", "passion"],
    adjverbs: ["consistently", "boldy", "fearlessly", "passionatley", "relentlessly", "braveley", "confidently", "proudly", "continuously", "persistently"],
    pronouns: ["you", "we", "they", "it", "I", "he", "she", "your", "our", "their"],
}

const messageTemplates = {
    template1: `${pronoun} ${adverb} to ${verb} your ${noun}.`,
    template2: `${adjective} ${noun} is the key to ${verb} ${noun}.`,
    template3: `${pronoun} have the ${adjective} power to ${verb} ${noun} and ${verb} ${noun}.`,
    template4: `${verb} ${noun} with ${adverb} ${verb}, and ${pronoun} will ${verb} ${noun}.`,
    template5: `In every ${noun}, ${pronoun} must ${verb} ${noun} and ${verb} ${noun} with ${adjective} ${noun}.`,
}

function messageGenerator() {
    const verb = null;
    const noun = null;
    const adjective = null;
    const adverb = null;
    const pronoun = null;
}
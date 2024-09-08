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

2) Function Declaration (Message Formulation)

3) Create a database of message templates that are to be used to structure the messages. These templates will be randomly selected during each instance of the program. 
    - String interpolation can be used to create the templates. 
    - Within the function, the variables will have to be declared with a variable declaration as they are currenly hoisted? (Not certain about this)

4) Create variables for each message component.
    - Variable should select the value of a randomly selected element in the array contained with the correlating property.
    E.g; variable "verb" should contain a randomly selected element from the array contained in the verbs property of the messageComponents object.

    Problem: When setting the word variables if the variable appears more than once in the template, depending on the template, this can lead to the message created not making sense. 
    (Solution?): Subject to the selected template, figure out a way to prompt a new word for a variable if it appears more than once in the string interpolation.

    Actions:
    - Identify the message components that appear more than once in the template.
    - Assign a new variable to these components. 
    - Set variable to keep getting a new word if the selected word is the same word as the first word in it's category. 

    Perhaps this should be done in a seperate function that has the responsibilty of formating the message with the template and the message componenets. 


5) Return a randomly selected template that will be used to structure the message that will be created in this instance.
    - There will only be 5 templates available. Creating a randomiser variable and setting the selected case in correlation to a random number generation can achieve this.
    - As the variables for each type of word have all already had their values set at this point, the templates should automatically have the populated strings for the instance. 

6) Capatalise the first letter of the first word in the resulting message. 
*/

const messageComponents = {
  _verbs: [
    "Unlock",
    "Achieve",
    "Discover",
    "Follow",
    "Fulfill",
    "Shape",
    "Pursue",
    "Realize",
    "Reach",
    "Embrace",
  ],
  _adjectives: [
    "Limitless",
    "Unstoppable",
    "Fearless",
    "Strong",
    "Focused",
    "Inspired",
    "Bold",
    "Driven",
    "Purposeful",
    "Empowered",
  ],
  _nouns: [
    "Success",
    "Potential",
    "Path",
    "Destiny",
    "Strength",
    "Vision",
    "Dreams",
    "Purpose",
    "Future",
    "Growth",
  ],
  _adverbs: [
    "Relentlessly",
    "Passionately",
    "Courageously",
    "Confidently",
    "Boldly",
    "Continuously",
    "Proudly",
    "Persistently",
    "Fearlessly",
    "Purposefully",
  ],
  _pronouns: [
    "You",
    "We",
    "I",
    "Your",
  ],
  get randomVerb() {
    let random = Math.floor(Math.random() * this._verbs.length);
    return this["_verbs"][random];
  },
  get randomAdjective() {
    let random = Math.floor(Math.random() * this._adjectives.length);
    return this["_adjectives"][random];
  },
  get randomNoun() {
    let random = Math.floor(Math.random() * this._nouns.length);
    return this["_nouns"][random];
  },
  get randomAdverb() {
    let random = Math.floor(Math.random() * this._adverbs.length);
    return this["_adverbs"][random];
  },
  get randomPronoun() {
    let random = Math.floor(Math.random() * this._pronouns.length);
    return this["_pronouns"][random];
  },
};

function generateMessage() {
  let selectedTemplate = null;
  let verb = messageComponents.randomVerb;
  let verb2 = messageComponents.randomVerb;
  let verb3 = messageComponents.randomVerb;
  let verb4 = messageComponents.randomVerb;
  let noun = messageComponents.randomNoun;
  let noun2 = messageComponents.randomNoun;
  let noun3 = messageComponents.randomNoun;
  let noun4 = messageComponents.randomNoun;
  let adjective = messageComponents.randomAdjective;
  let adverb = messageComponents.randomAdverb;
  let pronoun = messageComponents.randomPronoun;

  // Unique Verbs
  while (verb2 == verb || verb2 == verb3) {
    verb2 = messageComponents.randomVerb;
  }

  while (verb3 == verb || verb3 == verb2) {
    verb3 = messageComponents.randomVerb;
  }

  while (verb4 == verb || verb4 == verb2 || verb4 == verb3) {
    verb4 = messageComponents.randomVerb;
  }

  // Uniques Nouns
  while (noun2 == noun || noun2 == noun3) {
    noun2 = messageComponents.randomNoun;
  }

  while (noun3 == noun || noun3 == noun2) {
    noun3 = messageComponents.randomNoun;
  }

  while (noun4 == noun || noun4 == noun2 || noun4 == noun3) {
    noun4 = messageComponents.randomNoun;
  }

  const messageTemplates = {
    template1: `You ${verb} ${adverb} to ${verb2} your ${noun}.`,
    template2: `${adjective} ${noun} is the key to ${verb}ing your ${noun2}.`,
    template3: `${pronoun} have the ${adjective} power to ${verb} ${noun} and ${verb2} ${noun2}.`,
    template4: `${verb} ${noun} with ${adverb} ${verb2}, and ${pronoun} will ${verb3} ${noun2}.`,
    template5: `In every ${noun}, ${pronoun} must ${verb} ${noun2} and ${verb2} ${noun3} with ${adjective} ${noun4}.`,
  };

  const randomiser = Math.floor(Math.random() * 5);

  switch (randomiser) {
    case 0:
      selectedTemplate = messageTemplates.template1;
      break;

    case 1:
      selectedTemplate = messageTemplates.template2;
      break;

    case 2:
      selectedTemplate = messageTemplates.template3;
        break;
        
    case 3:
      selectedTemplate = messageTemplates.template4;
        break;
        
    default:
      selectedTemplate = messageTemplates.template5;
      break;
  }

  const message = selectedTemplate;
  return message;
}

console.log(generateMessage());

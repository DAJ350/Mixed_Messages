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
  verbs: {
    _goalVerbs: [
      "Achieve",
      "Fulfill",
      "Realise",
      "Reach",
      "Attain",
      "Complete",
      "Master",
    ],
    _actionVerbs: [
      "Embrace",
      "Shape",
      "Pursue",
      "Follow",
      "Lead",
      "Build",
      "Cultivate",
    ],
  },
  adjectives: {
    _growthAdjectives: [
      "Strong",
      "Fearless",
      "Unstoppable",
      "Bold",
      "Driven",
      "Resillient",
      "Empowered",
    ],
    _possibilityAdjectives: [
      "Limitless",
      "Boundless",
      "Infinite",
      "Endless",
      "Expansive",
      "Uncharted",
      "Wide-Open",
    ],
  },
  nouns: {
    _goalNouns: [
      "Success",
      "Potential",
      "Dreams",
      "Future",
      "Vision",
      "Purpose",
      "Accomplishment",
    ],
    _journeyNouns: [
      "Path",
      "Journey",
      "Road",
      "Growth",
      "Adventure",
      "Experience",
      "Challenge",
    ],
  },
  adverbs: {
    _effortAdverbs: [
      "Relentlessly",
      "Passionately",
      "Courageously",
      "Confidently",
      "Boldly",
      "Tirelessly",
      "Persistenly",
    ],
    _continuousAdverbs: [
      "Continuously",
      "Unceasingly",
      "Steadily",
      "Patiently",
      "Purposefully",
      "Determinedly",
      "Gradually",
    ],
  },
  pronouns: ["You", "We", "I"],

  get randomGoalVerb() {
    let random = Math.floor(Math.random() * this.verbs["_goalVerbs"].length);
    return this.verbs["_goalVerbs"][random];
  },
  get randomActionVerb() {
    let random = Math.floor(Math.random() * this.verbs["_actionVerbs"].length);
    return this.verbs["_actionVerbs"][random];
  },
  get randomGrowthAdjective() {
    let random = Math.floor(
      Math.random() * this.adjectives["_growthAdjectives"].length
    );
    return this.adjectives["_growthAdjectives"][random];
  },
  get randomPossibiltyAdjective() {
    let random = Math.floor(
      Math.random() * this.adjectives["_possibilityAdjectives"].length
    );
    return this.adjectives["_possibilityAdjectives"][random];
  },
  get randomGoalNoun() {
    let random = Math.floor(Math.random() * this.nouns["_goalNouns"].length);
    return this.nouns["_goalNouns"][random];
  },
  get randomJourneyNoun() {
    let random = Math.floor(Math.random() * this.nouns["_journeyNouns"].length);
    return this.nouns["_journeyNouns"][random];
  },
  get randomContinuousAdverb() {
    let random = Math.floor(
      Math.random() * this.adverbs["_continuousAdverbs"].length
    );
    return this.adverbs["_continuousAdverbs"][random];
  },
  get randomPronoun() {
    let random = Math.floor(Math.random() * this.pronouns.length);
    return this["pronouns"][random];
  },
};

function getUniqueWord(wordArray, wordCount) {
  const uniqueWords = new Set();
  while (uniqueWords.size < wordCount) {
    uniqueWords.add(wordArray[Math.floor(Math.random() * wordArray.length)]);
  }
  return [...uniqueWords];
}


function generateMessage() {
  
  const goalVerbArray = getUniqueWord(messageComponents.verbs["_goalVerbs"], 4);
  const actionVerbArray = getUniqueWord(messageComponents.verbs["_actionVerbs"], 4);

  const effortAdverbArray = getUniqueWord(messageComponents.adverbs["_effortAdverbs"], 4);
  const continuousAdverbArray = getUniqueWord(messageComponents.adverbs["_continuousAdverbs"], 4);

  const goalNounArray = getUniqueWord(messageComponents.nouns["_goalNouns"], 4);
  const journeyNounArray = getUniqueWord(messageComponents.nouns["_journeyNouns"], 4);

  const growthAdjectiveArray = getUniqueWord(messageComponents.adjectives["_growthAdjectives"], 4);
  const possibilityAdjectiveArray = getUniqueWord(messageComponents.adjectives["_possibilityAdjectives"], 4);

  const pronoun = messageComponents.randomPronoun;

  const messageTemplates = [
    `you ${actionVerbArray[0]} ${effortAdverbArray[0]} to ${goalVerbArray[1]} your ${goalNounArray[0]}.`,
    // template2: `${} ${journeyNounArray[0]} is the key to ${verb}ing your ${noun2}.`,
    `${pronoun} have the ${growthAdjectiveArray[0]} power to ${goalVerbArray[0]} ${goalNounArray[0]} and ${goalVerbArray[1]} ${goalNounArray[1]}.`,
    `${actionVerbArray[0]} the ${journeyNounArray[0]} and ${continuousAdverbArray[0]} ${actionVerbArray[1]}, eventually you will ${goalVerbArray[0]} your ${goalNounArray[0]}.`,
   // template5: `In every ${noun}, ${pronoun} must ${verb} ${noun2} and ${verb2} ${noun3} with ${adjective} ${noun4}.`,]
  ];

  const selectedTemplate =
    messageTemplates[Math.floor(Math.random() * messageTemplates.length)];

  const message = `${selectedTemplate[0].toUpperCase()}${selectedTemplate.slice(1)}`;

  return message;
}

console.log(generateMessage());

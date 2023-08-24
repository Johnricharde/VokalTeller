// MODEL //////////////////////////////////////////////////////////////////////
let vowelCharacters  = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0,
    'y': 0,
    'æ': 0,
    'ø': 0,
    'å': 0
};

let text = document.getElementById('text');
let userInput = document.getElementById('user-input');

// VIEW ///////////////////////////////////////////////////////////////////////
// Updating view by stringifying the "vowelCharacters" object and
// replacing character symbols from the object that i don't want to display and
// then updating the textContent in the DOM.
function updateView() {
    let objectToString = JSON.stringify(vowelCharacters);
    objectToString = objectToString.replace(/,/g, '\n')
    objectToString = objectToString.replace(/"|{|}/g, '')
    objectToString = objectToString.replace(/:/g, ': ')
    text.textContent = objectToString;
}
function clearInput() {
    userInput.value = ""
}
function defaultObjectValues() {
    vowelCharacters  = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
        'y': 0,
        'æ': 0,
        'ø': 0,
        'å': 0
    };updateView()
}


// CONTROLLER /////////////////////////////////////////////////////////////////
// Loops through every character of "userInput".
// Converts them all into lowercase.
// Then asks if the object "vowelCharacters" has anything that
//  matches with the current character in the loop.
function countVowel() {
    for (i = 0; i < userInput.value.length; i++) {
        let char = userInput.value[i].toLowerCase();
        if (vowelCharacters.hasOwnProperty(char)) {
            vowelCharacters[char]++
        }
    }
    clearInput()
    updateView()
}


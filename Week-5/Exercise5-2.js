function isVowel(char) {
    const vowels = "aeiou".includes(char);

    if (vowels) {
        console.log(vowels, char, "vowels");

    }
    return "aeiou".includes(char);
}
function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCharCase = char.toLowerCase();
        if (isVowel(lowerCharCase)) {
            if (vowelMap.has(lowerCharCase)) {
                vowelMap.set(lowerCharCase, vowelMap.get(lowerCharCase) + 1)
            } else {
                vowelMap.set(lowerCharCase, 1)
            }
        }
    }
    return vowelMap
}
vowelCount("DFGHJKAAAAA")
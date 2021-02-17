function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    let pairLetterValue = {};
    let charactersMapped = [];
    
    let first = [...s];
    let second = [...t];
    
    for(let index in first) {
        let value = first[index]
        if (value in pairLetterValue) {
           if (pairLetterValue[value] !== second[index])  {
               return false;
           }
        } else if (charactersMapped.includes(second[index])) {
            return false;
        } else {
            pairLetterValue[value] = second[index];
            charactersMapped.push(second[index]);
            console.log(charactersMapped);
        }
    }
    
    return true;
};

function detectCapitalUse(word: string): boolean {
    console.log([...word])
    if (isFirstLetterCapital() ||
        word == word.toUpperCase() ||
       word == word.toLowerCase()) {
        return true;
    }
    return false;

    function isFirstLetterCapital() {
        return [...word][0] == [...word][0].toUpperCase() && word.substring(1) == word.substring(1).toLowerCase();
    }
};
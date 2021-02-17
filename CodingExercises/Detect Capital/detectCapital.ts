function detectCapitalUse(word: string): boolean {
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
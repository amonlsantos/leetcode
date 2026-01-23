function isPalindrome(s: string): boolean {
    const word = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) != word.charAt(word.length - i - 1)){
            return false
        }
    }

    return true;
};
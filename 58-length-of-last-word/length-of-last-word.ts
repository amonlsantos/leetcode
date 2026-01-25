function lengthOfLastWord(s: string): number {
    let counter = 0;
    let i = s.length - 1;
    while (i >= 0) {
        if (s.charAt(i) != ' ') {
            counter++;
        }

        if (counter > 0 && s.charAt(i) == ' ') {
            return counter
        }

        i--;
    }
    // in case the string has no spaces
    return counter
};
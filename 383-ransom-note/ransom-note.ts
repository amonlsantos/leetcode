function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap: Map<string, number> = new Map();
    for (const letter of magazine) {
        let quantityOfLetter = magazineMap.get(letter) ?? 0;
        magazineMap.set(letter, quantityOfLetter + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let quantityOfLetter = magazineMap.get(ransomNote.charAt(i));
        if (quantityOfLetter == null || quantityOfLetter == 0) {
            return false;
        }
        magazineMap.set(ransomNote.charAt(i), quantityOfLetter - 1);
    }

    return true;
};
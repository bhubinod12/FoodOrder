function findVowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let str1 = str.toLowerCase();
        for (let char of str1) {
            if (vowel.includes(char)) {
                count++;
            }
        }
    return count;
}
console.log(findVowel('ABCei'));
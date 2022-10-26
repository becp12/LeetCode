/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransom = [...ransomNote];
    const mag = [...magazine];
    let result = true;
    ransom.forEach(function(letter) {
        if (mag.includes(letter)) {
            // remove letter
            let removeLetter = mag.indexOf(letter);
            mag.splice(removeLetter, 1);
            // if magazine includes first letter of ransom note, return true
        } else {
            result = !true;
        }
    })
    return result;
};
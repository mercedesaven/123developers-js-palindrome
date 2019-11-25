function isPalindrome(str) {
    let stringWihtoutSpaces = str.replace(/\s/g,'').toLowerCase()
    let aux = stringWihtoutSpaces.split('').reverse('').join('')
    if(aux === stringWihtoutSpaces){
        return true
    } else {
        return false 
    }}

module.exports = isPalindrome
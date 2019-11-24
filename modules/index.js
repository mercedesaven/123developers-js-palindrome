function isPalindrome(str) {
    let aux = str.split('').reverse('').join('')
    if(aux === str){
        return true
    } else {
        return false 
    }}

module.exports = isPalindrome
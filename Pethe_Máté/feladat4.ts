function osszesOszto (number : number) {
    let dividerArr = [];
    for(let i = 1; i <= number; i++){
        if (number % i  === 0) {
            dividerArr.push(i);
        }
    }
    console.log(dividerArr);
    return dividerArr;
}

function parosDarab (arr : number[]){
    let evennum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evennum++
        }
    }
    return evennum;
}

type callbackFunction = () => string;

function fuggvenyhivasPalindrom(callback : callbackFunction) {
    let resultString = callback();
    let reversedString = resultString.split('').reverse().join('');
    let isPalindrome = false;
    if (resultString === reversedString) {
        isPalindrome = true;
    }
    return isPalindrome;
}
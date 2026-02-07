// problem 01-----------------------------------------------------------
function newPrice(currentPrice , discount ) {
    if(typeof currentPrice === 'number' && typeof discount === 'number'){
        if(discount < 0 || discount > 100){
            return 'Invalid';
        }else{
            let currentDiscount = currentPrice * discount / 100;
            let payAmount = currentPrice - currentDiscount;
            let currentAmount = payAmount.toFixed(3);
            return currentAmount;
        }
    }else{
        return 'Invalid';
    }
}
// Problem 01 Solved Alhamdulillah--------------------------------------

// problem 02-----------------------------------------------------------
function validOtp(otp) {
    if(typeof otp === 'string'){
        if(otp.length === 8 && otp.startsWith('ph-')){
            return true;
        }else{
            return false;
        }
    }else {
        return 'Invalid';
    }
}
// Problem 02 Solved Alhamdulillah--------------------------------------


// problem 03-----------------------------------------------------------
function finalScore(omr) {
    let rightValue = omr.right;
    let wrongValue = omr.wrong;
    let skipValue = omr.skip;

    let resultValue = rightValue - (wrongValue / 2);
    let  mathRoundValue =  Math.round(resultValue);

    let totalScore = rightValue + wrongValue + skipValue;

    if (totalScore === 100){
        return mathRoundValue;
    } else{
        return 'Invalid';
    }
}
// Problem 02 Solved Alhamdulillah--------------------------------------


// problem 04-----------------------------------------------------------
function gonoVote(array) {
    
    let wordHaAndNa = array;

    if(Array.isArray(wordHaAndNa)){

        let wordsCount = [];

    for(let word of wordHaAndNa){

        let wordConvertLowerCase = word.toLowerCase();

        if(wordsCount.hasOwnProperty(wordConvertLowerCase)){
            wordsCount[wordConvertLowerCase]++;
        }else{
            wordsCount[wordConvertLowerCase] = 1;
        }
    }

    let haVoteCount = wordsCount['ha'];
    let naVoteCount = wordsCount['na'];

    if(haVoteCount === naVoteCount){
        return 'equal';
    } else if(haVoteCount > naVoteCount){
        return true;
    }else{
        return false;
    }
    
    }else{
        return 'Invalid'
    }
}







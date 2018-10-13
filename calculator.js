//Calculator
function add(number){
    //If there is a negative number
    if(number.includes("-")){
        var numberArray = number.split(/[,\n;]/);
        var negaNumberArray = [];
        for(var i = 0; i < numberArray.length; i++){
            var counter = 0;
            if(parseInt(numberArray[i]) < 0){
                negaNumberArray.push(parseInt(numberArray[i]));
            }
        }
        throw ("Negatives not allowed" + negaNumberArray);
    }
    //If there is an empty string return 0.
    if(number == "")
    return 0;

    //Adds the numbers together and returns the total
    if(number.includes(",") | number.includes("\n"))
    {
        var total = 0 ;
        var numberArray = number.split(/[,\n;]/);
        for(var i = 0; i < numberArray.length; i++){
                total += parseInt(numberArray[i]);
        }   
        return total; 
    }

    return parseInt(number);
}

module.exports = add;
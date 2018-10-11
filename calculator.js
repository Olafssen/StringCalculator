//Calculator
function add(number){
    if(number == "")
    return 0;

    if(number.includes(",") | number.includes(","))
    {
        var total = 0 ;
        var numberArray = number.split(/[,\n;]/);;
        for(var i = 0; i < numberArray.length; i++){
                total += parseInt(numberArray[i]);
        }   
        return total; 
    }

    return parseInt(number);
}

module.exports = add;
// Solution:

var romanToInt = function(s) {

  const romanMap = {
    'I':  1,
    'V':  5,
    'X':  10,
    'L':  50,
    'C':  100,
    'D':  500,
    'M':  1000
  }

  let intArray = [];

  s.split('').map(function(symbol, index, roman) {
    if(romanMap[roman[index]] < romanMap[roman[index+1]] ) {
      intArray.push(romanMap[roman[index+1]] - romanMap[roman[index]]);
    } else if (romanMap[roman[index]] <= romanMap[roman[index-1]] || index === 0) {
      intArray.push(romanMap[roman[index]]);
    }
    intArray
  });

  return intArray.reduce(function(sum, num){
    return sum + num
  }, 0);

};

// Tests:

romanToInt("III")     // 3
romanToInt("LVIII")   // 58
romanToInt("MCMXCIV") // 1994

// Объяснение решения в readme.md

// Solution:

var intToRoman = function(num) {

  const romanMap = {
    'M':  1000,
    'CM': 900,
    'D':  500,
    'CD': 400,
    'C':  100,
    'XC': 90,
    'L':  50,
    'XL': 40,
    'X':  10,
    'IX': 9,
    'V':  5,
    'IV': 4,
    'I':  1,
  }

  let roman = '';

  for (key in romanMap) {
    roman += key.repeat(Math.floor(num / romanMap[key]));
    num %= romanMap[key];
  }

  return roman;
};

// Tests:

intToRoman(3)     //  "III"
intToRoman(58)    //  "LVIII"
intToRoman(1994)  //  "MCMXCIV"

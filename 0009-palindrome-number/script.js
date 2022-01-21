// Solution:

var isPalindrome = function(x) {
  const directNumber = x.toString();
  const reversNumber = x.toString().split('').reverse().join('');
  return directNumber === reversNumber ? true : false
};

// Tests:

isPalindrome(121);    // true
isPalindrome(-121);   // false
isPalindrome(10);     // false
isPalindrome(123321); // true

// Solution:

var isValid = function(s) {

  const leftBraces = ['(', '[', '{'];
  const rightBraces = [')', ']', '}'];
  const bracesStack = [];

  s.split('').forEach(function(brace) {

    const leftBraceIndex = leftBraces.indexOf(brace);

    if (leftBraceIndex > -1) {
      bracesStack.push(brace);
    } else {
      let lastBraceItem = bracesStack[bracesStack.length-1];
      const rightBraceIndex = rightBraces.indexOf(brace);
      const rightBracePair = leftBraces[rightBraceIndex];
      if (rightBracePair === lastBraceItem) {
        bracesStack.pop();
      } else {
        bracesStack.push(brace);
      }
    }
  });

  return bracesStack.length === 0;
};

// Tests:

isValid("()");      // true
isValid("()[]{}");  // true
isValid("(]");      // false

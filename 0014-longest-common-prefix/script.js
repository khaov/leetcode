// Solution:

var longestCommonPrefix = function(strs) {

  if (!strs.length) {
    return ""
  }

  for (let i = 0; i <= strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];

}

// Tests:

longestCommonPrefix(["aba","c","b","a","ab"])     //  ""
longestCommonPrefix(["reflower","flow","flight"]) //  ""
longestCommonPrefix(["flower","flow","flight"])   //  "fl"
longestCommonPrefix(["dog","racecar","car"])      //  ""
longestCommonPrefix(["","b"])                     //  ""
longestCommonPrefix(["ab", "a"])                  //  "a"
longestCommonPrefix(["a"])                        //  "a"
longestCommonPrefix(["",""])                      //  ""

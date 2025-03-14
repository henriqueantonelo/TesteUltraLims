/*
4. Substring Palindrômica Mais Longa
Implemente um programa que, dada uma string, encontre a maior substring palindrômica
dentro dela.
*/

var longestPalindrome = function(string) {
    var length = string.length;
    var result = "";
  
    var centeredPalindrome = function(left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        left--;
        right++;
      }
      return string.slice(left + 1, right);
    };
  
    for (var i = 0; i < length; i++) {
      var oddPal = centeredPalindrome(i, i);
      var evenPal = centeredPalindrome(i, i + 1);
  
      if (oddPal.length > result.length)
        result = oddPal;
      if (evenPal.length > result.length)
        result = evenPal;
    }
  
    return result;
  };
  
  console.log(longestPalindrome("babad"));
  
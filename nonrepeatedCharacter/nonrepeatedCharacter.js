/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  function firstUnique(string) {
var resrult = ''  

for(var  i=0; i < string.length; i++) {
    
    var result = string.charAt(i)
    	if(string.indexOf(result) == string.lastIndexOf(result)) {
      		
      		return result;
    }
  }
}
};

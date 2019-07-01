/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * @param {string} s
 * @return {number}
 */
function firstUniqueChar(s){
  let index = -1;
  const arr = s.split("");
  arr.some(function(v,i,a){
    if(a.lastIndexOf(v) === a.indexOf(v)){
      index = i;
      return true;
    }
  });
  return index;
}
/**
 * Stats
 * Runtime: 104 ms, faster than 47.29% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 38.7 MB, less than 29.15% of JavaScript online submissions for First Unique Character in a String.
 */

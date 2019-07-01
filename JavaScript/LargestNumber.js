/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * Example 1:
 * Input: [10,2]
 * Output: "210"
 * Example 2:
 * Input: [3,30,34,5,9]
 * Output: "9534330"
 */
function largestNumber(nums){
  if (nums.join('') == 0){
    return '0';
  }
  let res = nums.map(val => val + '');
  res.sort((a, b) => (b + a) - (a + b));
  return res.join('');
}

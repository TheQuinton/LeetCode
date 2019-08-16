/**
 * Given a non negative integer number num.
 * For every numbers i in the range 0 ≤ i ≤ num
 * calculate the number of 1's in their binary representation and return them as an array.
 * @param {number} num
 * @return {number[]}
 */
const countBits = num => {
    // 2 -> [0,1,1]
    // 5 -> [0,1,1,2,1,2]
    let arr = [0];
    // for(let i = 1; i <= num; i++){
    //     arr.push(i.toString(2).split('').filter(x => x==='1').length);
    // }

    //ALT
    let offset = 1;
    for (let i = 1; i <= num; i++){
        if(offset * 2 === i){
            offset *= 2;
        }
        arr[i] = arr[i-offset] + 1;
    }
    return arr;
};
/**
 * Stats for string/split/filter version
 * Runtime poor, memory usage good.
 * Runtime: 168-192 ms, faster than 9.26-5.21% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 44.2-44.5 MB, less than 100.00% of JavaScript online submissions for Counting Bits.
 */
/**
 * Stats for alt version - looking good.
 * Runtime: 92 ms, faster than 86.54% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions for Counting Bits.
 * How does it work?
 * Index : 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 *   arr : 0 1 1 2 1 2 2 3 1 2  2  3  2  3  3  4
 * offset: - 1 1 2 4 4 4 4 8 8 ...
 * arr[i] = arr[i-offset] + 1;
 * arr[4] = arr[4-4]+1 //arr[0]=0 arr[4]=0+1=1
 * arr[5] = arr[5-4]+1 //arr[1]=1 arr[5]=1+1=2
 */

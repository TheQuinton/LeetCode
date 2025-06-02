/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let maxProfit = 0;
    let buyPrice = prices[0];

    for (let price of prices) {
        const profit = price - buyPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        if (price < buyPrice) {
            buyPrice = price;
        }
    }
    return maxProfit;
};
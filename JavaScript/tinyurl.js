const urls = {};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = longUrl => {
    const uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl => {
    return urls[shortUrl.split("com/")[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/**
 * Not exactly the best approach, but it functions for what they seemed to be looking for.
 * Stats
 *  Runtime: 80 ms, faster than 28.88% of JavaScript online submissions for Encode and Decode TinyURL.
 *  Memory Usage: 34.8 MB, less than 92.00% of JavaScript online submissions for Encode and Decode TinyURL.
 */

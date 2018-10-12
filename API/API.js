// import axios from 'axios';

// const getTweets = mppSearch => {
//   axios
//     .get({
//       URL: 'https://api.twitter.com/1.1/search/tweets.json?q=',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         oauth_consumer_key: process.env.TWITTER_CONSUMER_KEY,
//         oauth_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
//         oauth_nonce: 'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg',
//         oauth_signature: 'tnnArxj06cWHq44gCs1OSKk%2FjLY%3D',
//         oauth_signature_method: 'HMAC-SHA1',
//         oauth_timestamp: '1318622958',
//         oauth_version: '1.0',
//       },
//       params: {
//         q: `from%3A${mppSearch}`,
//       },
//     })
//     .then(response => {
//       console.log(response.statuses);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export default getTweets;

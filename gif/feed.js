const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Feed(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/feed/gif/feed_${random}.gif`);

    return image;
};


module.exports = {
    Feed
};
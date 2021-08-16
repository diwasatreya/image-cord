const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Pat(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/pat/gif/pat_${random}.gif`);

    return image;
};


module.exports = {
    Pat
};
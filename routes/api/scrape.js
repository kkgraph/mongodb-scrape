var cheerio = require("cheerio");
var axios = require("axios");
var scrape = function () {
    return axios.get("https://www.nytimes.com/").then(function (res) {
        var $ = cheerio.load(res.data);

        var articles = [];

        $(".css-4jyr1y").each(function (i, element) {
            console.log(this);
        });

        
    })
};


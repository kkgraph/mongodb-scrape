var db = require("../../models");
var scrape = require("./scrape");

module.exports = {
    scrapeheadlines: function (req, res) {
        return scrape()
        .then(function (nytdata) {
            return db.nytdata.create(articles);
        })
        .then(function (dbheadlines) {
            if (!dbheadlines.length) {
                res.json({
                    message: "no new articles today, check back tomorrow"
                });
            }
            else {
                res.json({
                    message: "Added" + dbheadlines.length + " new artciles"
                });
            }
        })
        .catch(function (err) {
            res.json({
                message: "scrape completed"
            });
        });
    }
};
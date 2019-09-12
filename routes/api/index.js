var router = require("express").Router();
var fetchroute = require("./fetch");
var scraperoute = require("./scrape");

router.use("/fetch", fetchroute);
router.use("/scrape", scraperoute);

module.exports = router;
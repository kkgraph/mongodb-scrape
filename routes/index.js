var router = require("express").Router();
var apiroute = require("./api");

router.use("/api", apiroute);

module.export = router;

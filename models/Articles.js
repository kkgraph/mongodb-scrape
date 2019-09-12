var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({ 
    title: {type: String, required: true},
    link: {type: String},
    summary: {type: String} 
})

var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
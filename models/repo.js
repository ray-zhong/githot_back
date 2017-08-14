var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
  lang: String,
  data: Array
});

repoSchema.index({lang: 1});

const Repo = mongoose.model("Repo", repoSchema);

module.exports = Repo;
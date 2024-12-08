const mongoose = require("mongoose");
const categorie = require("./categorie");
//creation des models:
const Categorie = mongoose.model("", {
    title: { type: String },
    Tasks: {
        type: Array,
    },
    description: {
        type: String,
    },
    progress: { type: String },
    status: { type: String }
});


module.exports = Project;
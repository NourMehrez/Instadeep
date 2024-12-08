const mongoose = require("mongoose");
const Task = mongoose.model("task", {
    name: { type: String },
    time: {
        type: Date,
    },
    id_categories: { type: Array },
    status: { type: String },
    start_time: { type: Date },
    deadline: { type: Date },
    priority: { type: String }

});

module.exports = Task;
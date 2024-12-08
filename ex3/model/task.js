const mongoose = require("mongoose");
const Task = mongoose.model("Task", {
    Title: { type: String },
    time: {
        type: Date,
    },
    category: { type: String },
    Completion_Status: { type: String },
    due_date: { type: Date },
    priority: {
        string
    },
    drescription: { type: String }
});

module.exports = Task;
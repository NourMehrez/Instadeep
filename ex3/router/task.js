const express = require('express');
const router = express.Router();
const multer = require('multer')
const Task = require('../models/task');
router.post('/addtask', (req, res) => {
    let data = req.body;
    task = new Task(data)
    task.save()
        .then((saved) => {
            console.log(saved)
            res.send(saved);
        });
})
router.get('/all/:id', (req, res) => {
    let id = req.params.id;
    Task.find({
            id_project: id
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    try {
        Task.findOneAndUpdate({ _id: id }, data)
            .then((find) => {
                console.log(find);
                res.status(200).send(find);


            })
    } catch {
        console.log("erreur");
    }
})
router.get('/all/:category', (req, res) => {
    let cat = req.params.category;
    Task.find({
            category: cat
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})
router.get('/all/:due_date', (req, res) => {
    let D = req.params.due_date;
    Task.find({
            due_date: D
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})
router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Task.findByIdAndDelete({ _id: id })
        .then((del) => {
            res.status(200).send(del)

        })
        .catch((err) => { res.status(400).send(err) })





})




module.exports = router;
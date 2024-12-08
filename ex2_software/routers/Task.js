const express = require('express');
const router = express.Router();
const multer = require('multer')
const Task = require('./models/task');
router.post('/addtask', (req, res) => {
    let data = req.body;
    task = new Task(data)
    task.save()
        .then((saved) => {
            console.log(saved)
            res.send(saved);
        });
})
router.get('/all/:categorie', (req, res) => {
    let cat = req.params.categorie;
    Task.find({
            categorie: cat
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Task.findOneAndUpdate({ _id: id }, data)
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
router.get('/all/:priority', (req, res) => {
    let pryo = req.params.priority;
    Task.find({
            priority: pryo
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})




module.exports = router;
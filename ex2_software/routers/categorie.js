const express = require('express');
const router = express.Router();
const multer = require('multer')
const categorie = require('../models/categorie.js');
router.post('/addCategorie', (req, res) => {
    let data = req.body;
    cat = new categorie(data)
    cat.save()
        .then((saved) => {
            console.log(saved)
            res.send(saved);
        });
})

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    categorie.findByIdAndDelete({ _id: id })
        .then((del) => {
            res.status(200).send(del)

        })
        .catch((err) => { res.status(400).send(err) })

})

router.get('/all/available', (req, res) => {

    Task.find({
            status: "available"
        })
        .then((find) => {
            console.log(find);
            res.status(200).send(find);
        })
})



module.exports = router;
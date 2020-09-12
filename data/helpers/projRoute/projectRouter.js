const express = require("express");

const projectModel = require("../projectModel")

const router = express.Router();

//create

//read
router.get("/", (req, res) => {
    projectModel.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: "there was an error retrieving the data !" })
        })
})
//update 

//delete

module.exports = router;
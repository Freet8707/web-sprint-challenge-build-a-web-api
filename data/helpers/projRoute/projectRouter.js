const express = require("express");

const projectModel = require("../projectModel")

const router = express.Router();

//create

router.post("/", (req, res) => {

    if(!req.body.name || !req.body.description){
        res.status(400).json({ message: "Please include both a name and description" })
    } else {
        projectModel.insert(req.body)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(error => {
                console.log("Error: ", error);
                res.status(500).json({ errorMessage: "There was an error adding the data" })
            })
    };
    
})

//read

router.get("/", (req, res) => {
    if(req.body.id){
        projectModel.get(req.body.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: "there was an error retrieving the data !" })
        })
    } else {
        projectModel.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: "there was an error retrieving the data !" })
        })
    }

})
// get request for returning all actions on a particular project
router.get("/:id", (req, res) => {
    const { id } = req.params;

    if(id){
        projectModel.getProjectActions(id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log("Error: ", error)
                res.status(500).json({ errorMessage: "There was an error retrieving that data :_(" })
            })
    }
})
//update 

router.put("/:id", (req, res) => {
    const { id } = req.params;

    if(!req.body.name || !req.body.description){
        return res.status(400).json({ message: "Please provide a name and a description for the project to be updated!" })
    };

    if(id){
        projectModel.update(id, req.body)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ errorMessage: "There was an error making that update!" })
            })
    };
    
})
//delete

module.exports = router;
const express = require("express");

const actionModel = require("../actionModel")

const router = express.Router();

//create
router.post("/", (req, res) => {

    if(!req.body.project_id || !req.body.description || !req.body.notes){
        return res.status(400).json({ message: "There must be an id for the project the action is assigned to, a description, and notes provided in order to make a new action" })
    } else {
        actionModel.insert(req.body)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ errorMessage: "There was an error creating that action!" })
            })
    }
})
//read
router.get("/", (req, res) => {
    actionModel.get()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: "There was an error retrieving the actions!" })
        })
})
//update
router.put("/:id", (req, res) => {
    const { id } = req.params;

    if(!req.body.project_id || !req.body.description || !req.body.notes){
        return res.status(400).json({ message: "There must be an id for the project the action is assigned to, a description, and notes provided in order to update an action" })
    } else {
        actionModel.update(id, req.body)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ errorMessage: "There was an error updating that action!" })
            })
    }
})
//delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    actionModel.remove(id)
        .then(response => {
            res.status(204).json({ message: "Boom! Action gone!" })
        })
        .catch(error => {
            console.log("Error: ", error)
            res.status(500).json({ errorMessage: "The delete was unsuccessful! :_(" })
        })
})

module.exports = router
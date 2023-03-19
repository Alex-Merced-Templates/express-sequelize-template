const express = require("express")
const router = express.Router()
const Note = require("../models/notes")

// Register Routes with Router

// index route
router.get("/", async (req, res) => {
    try {
        const todos = await Note.findAll()
        res.json(todos)
    } catch (error){
        res.status(400).json({error})
    }
})

// show route
router.get("/:id", async (req, res) => {
    try {
        const todo = await Note.findByPk(req.params.id)
        res.json(todo)
    } catch (error){
        res.status(400).json({error})
    }
})

// create route
router.post("/", async (req, res) => {
    try {
        const todo = await Note.create(req.body)
        res.json(todo)
    } catch (error){
        res.status(400).json({error})
    }
})

// update route
router.put("/:id", async (req, res) => {
    try {
        // get todo to update
        const todo = await Note.findByPk(req.params.id)
        // update it based on the request body
        await todo.set(req.body)
        // save the changes
        await todo.save()
        res.json(todo)
    } catch (error){
        res.status(400).json({error})
    }
})

// delete route
router.delete("/:id", async (req, res) => {
    try {
        // get todo to update
        const todo = await Note.findByPk(req.params.id)
        // update it based on the request body
        await todo.destroy()
        res.json({deleted: true})
    } catch (error){
        res.status(400).json({error})
    }
})




// export router
module.exports = router
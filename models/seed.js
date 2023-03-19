const Note = require("./notes")

// SEED SCRIPT TO RUN WITH "npm run seed"

async function seed(){

    // SYNC (create tables if not yet exist)
    await Note.sync({alter: true})

    // SEED LOGIC BELOW
    const note1 = await Note.create({title: "Eat Breakfast", text: "Eat Breakfast"})
    const note2 = await Note.create({title: "Eat Lunch", text: "Eat Lunch"})

    console.log("You Created: ", note1, note2)
}

// RUN SEED FUNCTION
seed()
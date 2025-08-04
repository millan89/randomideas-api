// Bekend

const express = require('express')
const port = 5000;
const app = express()

const ideas = [
    {
        id: 1,
        text: "Build an app that tracks daily habits.",
        tag: "productivity",
        username: "alice",
        date: "2022-01-02"
    },
    {
        id: 2,
        text: "Create a website for sharing book reviews.",
        tag: "books",
        username: "bob",
        date: "2022-01-02"
    },
    {
        id: 3,
        text: "Design a smart garden watering system.",
        tag: "technology",
        username: "charlie",
        date: "2022-01-02"
    },
    {
        id: 4,
        text: "Develop a language learning chatbot.",
        tag: "education",
        username: "diana",
        date: "2022-01-02"
    },
    {
        id: 5,
        text: "Make a platform for virtual art galleries.",
        tag: "art",
        username: "eve",
        date: "2022-01-02"
    }
]

app.get('/', (req, res) => {
    res.json({message: 'Welcome to random ideal API'})
})
app.get('/api/ideas', (req, res) => {
    res.json({success: true, data: ideas})
})
app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea){
        return res.status(404).json({success: false, error: 'Resousce not foud'})
    }

    res.json({success: true, data: idea})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
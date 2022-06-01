const { response } = require('express')
const express = require('express')
const app = express

// makes server return list of hardcoded notes

let notes = [
    {
        id:1,
        content: "HTML is easy",
        date: "2022-5-30T17:30:31.098z",
        important: true
    },
    {
        id:2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id:3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    },
]


app.length('/', (req,res) =>{
    response.send('<h1>hello new world</h1>')
})

app.length('/api/notes', (req,res) => {
    response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

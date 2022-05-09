const express = require('express')
const app = express()
const port = 3000 // localhost:3000


// localhost:3000
app.get('/', (req, res) => {
    res.send("Hola a todos!!")
})
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchX!!")
})

app.get('/node', (req, res) => {
    const explorer1 = { id: 1, name: "Explorer1"}
    const explorer2 = { id: 1, name: "Explorer2"}
    const explorer3 = { id: 1, name: "Explorer3"}
    res.send([explorer1, explorer2, explorer3])
})

app.get('/explorers/:explorer', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(port, () => {
    console.log("Server Listo")
})
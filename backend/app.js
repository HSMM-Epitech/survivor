const express = require('express')
const app = express()
const PORT = 4242

app.get('/', (req, res) => {
    res.send('Hello Otter World !')
})

app.listen(PORT, () => {
    console.log(`Minimal backend listening on port ${PORT}`)
})

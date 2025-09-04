const express = require('express')
const app = express()
require("module-alias/register");
const YAML = require("yamljs");
const PORT = 4242

// Import swagger documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./doc/swagger.yaml");

// Swagger documentation route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/users', require('@routes/user'));

app.get('/', (req, res) => {
    res.send('Hello Otter World !')
})

app.listen(PORT, () => {
    console.log(`Minimal backend listening on port ${PORT}`)
})

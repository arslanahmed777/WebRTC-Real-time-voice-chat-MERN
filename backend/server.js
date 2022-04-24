require('dotenv').config()
const express = require('express')
const router = require('./routes');

const app = express()
const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send("Hello Worlcd")
})
app.use(express.json());
app.use(router)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
require('dotenv').config()
const express = require('express')
const router = require('./routes');
const DbConnect = require('./database');

const app = express()
const PORT = process.env.PORT || 5000
DbConnect();
app.get('/', (req, res) => {
    res.send("Hello Worlcd")
})
app.use(express.json());
app.use(router)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
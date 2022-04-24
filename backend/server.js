require('dotenv').config()
const express = require('express')
const router = require('./routes');
const DbConnect = require('./database');
const cors = require('cors');


const app = express()
const PORT = process.env.PORT || 5000
DbConnect();

const corsOption = { origin: ['http://localhost:3000'], credentials: true, };
app.use(cors(corsOption));


app.use(express.json());
app.use(router)
app.get('/', (req, res) => {
    res.send("Hello Worlcd")
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
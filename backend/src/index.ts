import express from 'express';
import cors from 'cors';
require('dotenv').config();

const app = express();

// middlewars
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./database/connect')

app.get("/", (req, res) => {
    res.send("backend...");
})

app.set('trust proxy', 1)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Listening...")
})

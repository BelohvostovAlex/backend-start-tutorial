import express from "express";
import mongoose from "mongoose";

const PORT = 5000
const DB_URL = 'mongodb+srv://alex:<123>@cluster0.ql7mw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.post('/', (req,res) => {
    console.log(req.body)
    res.status(200).json('server is working')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('working on ' + PORT))
    } catch (error) {
        console.log(error.message)
    }
}
startApp()

import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000
const DB_URL = 'mongodb+srv://alex:alex@cluster0.9cqe8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('working on ' + PORT))
    } catch (error) {
        console.log(error.message)
    }
}
startApp()

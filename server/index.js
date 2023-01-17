const express = require("express")
const mongoose = require("mongoose")
const app = express()
const User = require("./models/UserModel")
require('dotenv').config()


app.use(express.json())
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
mongoose.set("strictQuery", false);


mongoose.connect(process.env.MONGODB_URI, { // USED ENV VARIABLE TO PROTECT MY MONGODB URI ON GITHUB
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfuly connected to MONGODB")
});

app.get("/users", async (req, res) => {
    try {

        const data = await User.find({})
        res.status(200).json({ message: "Success", data: data })

    } catch (error) {
        console.log(error);
        res.status(400).json("There was an error")

    }
})

app.post("/find", async (req, res) => {
    const { firstName } = req.body

    try {
        const data = await User.findOne({ firstName: firstName })
        res.status(200).json({ message: "Success", data: data })
    } catch (error) {
        console.log(error);
        res.status(400).json("There was an error")
    }
})

app.post("/delete", async (req, res) => {
    const { firstName } = req.body

    try {

        const data = await User.deleteOne({ firstName: firstName })
        res.status(200).json({ message: "Success", data: data })

    } catch (error) {
        console.log(error);
        res.status(400).json("There was an error")
    }
})

app.post("/update", async (req, res) => {
    const { firstName, newName } = req.body

    try {
        const data = await User.updateOne({ firstName: firstName }, {
            $set: {
                firstName: newName
            }
        })

        if (data.modifiedCount > 0) {
            res.status(200).json({ message: "Success", data: data })
        } else {

            res.status(200).json({ message: "Not success", data: data })
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json("There was an error")
    }
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Listening to port")
})
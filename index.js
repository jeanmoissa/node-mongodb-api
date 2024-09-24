import express from "express"; //modificar json e add a linha: "type": "module",
import mongoose from "mongoose";
import User from "./models/User.js"

const app = express();

app.use(express.json());

app.get("/users", async (request, response) => {

    const users = await User.find()

    return response.status(200).json(users);
});

app.post("/users", async (request, response) => {

    const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser);

});

mongoose.connect("mongodb+srv://jeanmoissa:QJs8vn76MhovzX2o@cluster0.gvixj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Banco de dados conectado!"))
    .catch(() => console.log("deu ruim"))

app.listen(3000);
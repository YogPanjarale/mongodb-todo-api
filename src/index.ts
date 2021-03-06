require("dotenv").config();
import express from "express";
import { connect } from "mongoose";
import path from "path";
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";
connect(MONGO_URI).then(() => console.log("MongoDB Connected..."));

const app = express();

app.use("/",express.static(path.resolve(__dirname,"..","public")));

app.get("/", (_req, res) => {
	res.send("Hello World!");
});
app.get("/ping", (_req, res) => {
	res.send("pong");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
app.get("/", (req, res) => {
    let x = "asdasd";
    const y = x.charAt(1);
    res.json({ hello: "world" });
});

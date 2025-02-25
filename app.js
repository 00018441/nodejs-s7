import express from "express";

const PORT = 6969;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
});

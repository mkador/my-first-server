const express = require("express");
const app = express();
// const cors = require("cors");
// app.use(cors());

const port = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send("Server is running");
});

const fakData = require('./Data/fakedb.json');

app.get('/home', (req, res) => {
    res.send("This is Home");
})
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const getSingleData = fakData?.find(p => p.id == id)
    res.send(getSingleData)
})

app.get('/category/:in', (req, res) => {
    const index = req.params.in;
    console.log(index);
    const getIndex = fakData?.find(a => a.index == index);
    if (!getIndex) {
        res.send("Vaia amader kase ei item nai");
    }
    res.send(getIndex);
})


app.listen(port, () => {
    console.log("Server running on Port: ", port);  
})
    
module.exports = app;
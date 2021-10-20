const express = require('express');
const app = express();
require("dotenv").config()
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended : true}));

const mongoose = require('mongoose');

const Document = require("./models/Document");
// const URI = `mongodb+srv://admin:${process.env.PASSWORD}@dip-bin.ysmvr.mongodb.net/Randomtext?retryWrites=true&w=majority`;
const URI = process.env.MONOGODB_URI;

app.listen(process.env.PORT);

(async () => {

    try{
        const connection = await mongoose.connect(URI, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true
                        });

        console.log(connection);
    } catch(e) {
        console.log(e);
    }
    
})();

// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


app.get('/', (req, res) => {
    const code  = `Sharing code is a good thing, and it should be _really_ easy to do it.
A lot of times, I want to show you something I'm seeing - and that's where we
use pastebins.Haste is the prettiest, easiest to use pastebin ever made`;

    res.render("code_window", {code, language : "plaintext"});
});

app.get('/new', (req, res) => {
    res.render("new");
});

app.post('/save', async (req, res) => {
    const value = req.body.value;
    try{
        const document = await Document.create({ text : value });
        const id = document._id.toString();
        res.redirect(`/${id}`);
        // console.log(document._id.toString());
    } catch(e){
        console.log(e);
        res.render("new", { value });
    }
});

app.get('/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const doc = await Document.findById(id);
        res.render("code_window", { code : doc.text, id });
    } catch(e) {
        res.redirect("/");
    }
});

app.get('/:id/duplicate', async (req, res) => {
    const id = req.params.id;

    try{
        const doc = await Document.findById(id);
        res.render("new", { value : doc.text });
    } catch(e) {
        res.redirect("/");
    }
});
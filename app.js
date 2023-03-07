const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const { route } = require('./routes/home');
const app = express();
const homeRoute = require('./routes/home');
const hom = require('./Helpers/Espaciado');

app.engine("hbs", engine(
    {
        helpers:{
            h: hom.H,
            be: hom.Be,
            gris: hom.gris,
        },
    }
));
app.set("view engine","hbs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"css")));

app.use(homeRoute);
app.use((req, res, next) => {
    res.status(404).render("404", {layout:false, title:"404 Page"});
});


app.listen(3000);

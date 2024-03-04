const express = require('express');

const Mnaked= require('./json/naked.json');
const Msport= require('./json/sportive.json');
const MTutte= require('./json/Tmoto.json');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    sportive: Msport['sportive'],
    moto: Mnaked['naked']

    });
});

app.get('/naked', (req, res) => {
    res.render('moto', {
    title: 'LE NOSTRE MOTO SUV',
    moto: Mnaked['naked'],
    variabile: "naked"
    });
});

app.get('/sportive', (req, res) => {

    res.render('moto', {
    title: 'LE NOSTRE MOTO SPORTIVE',
    moto: Msport['sportive'],
    variabile: "sportive"
    
    });
});

app.get('/profile', (req, res) => {
    const mid = MTutte.moto.find((m) => m.id == req.query.id);
    const variabile= req.query.page;
    res.render('info', {
        title: `About ${mid.nome}`, 
        mid,
        variabile
    });
});


app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
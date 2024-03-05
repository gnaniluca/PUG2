const express = require('express');
const app = express();

const Mnaked = require('./json/naked.json');
const Msport = require('./json/sportive.json');
const MTutte = require('./json/Tmoto.json');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Homepage',
        sportive: Msport.sportive,
        moto: Mnaked.naked
        
    });
});

app.get('/naked', (req, res) => {
    res.render('moto', {
        title: 'LE NOSTRE MOTO SUV',
        moto: Mnaked.naked,
        variabile: "naked"
    });
});

app.get('/sportive', (req, res) => {
    res.render('moto', {
        title: 'LE NOSTRE MOTO SPORTIVE',
        moto: Msport.sportive,
        variabile: "sportive"
    });
});

app.get('/moto/:id', (req, res) => {
    const motoId = req.params.id;
    const moto = MTutte['tutte moto'].find((moto) => moto.id === parseInt(motoId));
    if (moto) {
        res.render('info', {
            title: `About ${moto.nome}`,
            d: moto,
            variabile: 'Moto'
        });
    } else {
        res.status(404).send('Auto non trovata');
    }
});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
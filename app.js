var express = require('express');

/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var app = express();

const session = require('express-session')
const formidable = require('formidable');
const fs = require('fs');
const crypto = require('crypto');
// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');


// request to homepage(index page)

app.get('/', function(req, res) {

    res.render('html/index');
});


app.use(session({

    resave: true,
    saveUninitialized: false,
    secret: 'abcdefg' //used for crypting pass

}));



console.log("test");


function getJson(numeFis) {
    let textFis = fs.readFileSync(numeFis); //pun continutul fisierului useri.json in rawdata
    return JSON.parse(textFis); //obtin obiectul asociat json-ului
}

function saveJson(obJson, numeFis) {
    let data = JSON.stringify(obJson); //transform in JSON
    fs.writeFileSync(numeFis, data); //scriu JSON-ul in fisier (inlocuind datele vechi)
}



app.post('/login', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {


        jsfis = getJson('useri.json')
        var cifru = crypto.createCipher('aes-128-cbc', 'mypassword'); //creez un obiect de tip cifru cu algoritmul aes
        var encrParola = cifru.update(fields.parola, 'utf8', 'hex'); //cifrez parola
        encrParola += cifru.final('hex'); //inchid cifrarea (altfel as fi putut adauga text nou cu update ca sa fie cifrat
        let user = jsfis.useri.find(function(x) { //caut un user cu acelasi nume dat in formular si aceeasi cifrare a parolei

            return (x.username == fields.username && x.parola == encrParola);
        });
        if (user) {
            console.log(user);
            console.log(user.parola);
            console.log(encrParola);
            req.session.username = user; //setez userul ca proprietate a sesiunii
        }

        console.log(req.session.username);
        /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
        res.render('html/login', { user: req.session.username });
    });


});


app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/videos', express.static('videos'));
app.use('/fonts', express.static('fonts'));
app.use('/json_data_files', express.static('json_data_files'));
app.use('/js_scripts', express.static('js_scripts'));
app.use('/XML_data', express.static('XML_data'));

app.use(function(req, res, next) {
    res.status(404).send("ERROR 404. You are looking in the wrong place!")
});




app.listen(1111);
console.log('Port open at 1111.');
var express = require('express');

/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var app = express();

const session = require('express-session')
const formidable = require('formidable');
const fs = require('fs');
const crypto = require('crypto');
const nodemailer = require("nodemailer");


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


app.get('/login', function(req, res) {
    /* render page from ejs when a GET request is made to the resto druid class guide*/
    res.render('html/login');
});

app.get('/logout', function(req, res) {
    req.session.destroy(); //distrug sesiunea cand se intra pe pagina de logout
    res.render('html/index');
    // console.log("session destroyed");
});

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
        if (user)
            res.render('html/index', { user: req.session.username });
        else
            res.render('html/login', { user: req.session.username });
    });


});


app.get('/register', function(req, res) {
    res.render('html/register', { user: req.session.username });
});

app.post('/register', (req, res) => {
    //var  dateForm = req.body;
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

        let rawdata = fs.readFileSync('useri.json');
        let jsfis = JSON.parse(rawdata);
        var cifru = crypto.createCipher('aes-128-cbc', 'mypassword');
        var encrParola = cifru.update(fields.parola, 'utf8', 'hex');
        encrParola += cifru.final('hex');
        console.log(fields.parola + " " + encrParola);
        jsfis.useri.push({ id: jsfis.lastId, username: fields.username, nume: fields.nume, email: fields.email, parola: encrParola, dataInreg: new Date(), rol: 'prof', materii: fields.materii });
        jsfis.lastId++;
        res.render('html/register', { user: req.session.username, rsstatus: "ok" });

        saveJson(jsfis, 'useri.json')
        trimiteMail(fields.username, fields.email).catch((err) => { console.log(err) })
    });

});



async function trimiteMail(username, email) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',

        secure: false,
        auth: {
            user: "thrawaacc112@gmail.com", //mailul site-ului (de aici se trimite catre user)
            pass: "nuoiei112"
        },
        tls: {
            rejectUnauthorized: false //pentru gmail
        }
    });

    //trimitere mail
    let info = await transporter.sendMail({
        from: '"jobs.overflow.test" <joboverflowtest@example.com>',
        to: email,
        subject: "User nou",
        text: "salut, " + username,
        html: "<p>salut, " + username + "</p>"
    });

    console.log("Message sent: %s", info.messageId);
}

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
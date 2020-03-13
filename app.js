// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use('/electionJson', (req, res, next) => {
    console.log('in another middle');
    res.sendFile(path.join(__dirname, 'build/contracts', 'Election.json'));
});

// app.use('/election', (req, res, next) => {
//     console.log('in election middle');
//     res.sendFile(path.join(__dirname, 'views', 'eletion.html'));
// });

app.use('/manage', (req, res, next) => {
    console.log("manage");
    var list = {};
    const rc = req.headers.cookie;
    rc && rc.split(';').forEach(function(cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    if (list['g_id']) {
        res.sendFile(path.join(__dirname, 'views', 'manage.html'));
    } else {
        res.redirect('/login');
    }
});
app.use('/login', (req, res, next) => {
    console.log("login");
    var list = {};
    const rc = req.headers.cookie;
    rc && rc.split(';').forEach(function(cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    if (list['g_id']) {
        res.redirect('/manage');
    } else {
        res.sendFile(path.join(__dirname, 'views', 'login.html'));
    }
});

// app.use('/manage', (req, res, next) => {
//     console.log('in maane middle');
//     res.sendFile(path.join(__dirname, 'views', 'manage.html'));
// });
app.use('/demo', (req, res, next) => {
    console.log('in maane middle');
    res.sendFile(path.join(__dirname, 'views', 'demo.html'));
});
// app.use('/login/google', (req, res, next) => {
//     console.log('in google middle');
//     res.sendFile(path.join(__dirname, 'views', 'googlelogin.html'));
// });
// app.use('/login', (req, res, next) => {
//     console.log('in maane middle');
//     res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

app.use('/', (req, res, next) => {
    console.log('in another middle');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);
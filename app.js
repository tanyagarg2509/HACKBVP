// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//for static linking of files (example public/css/style.css 
// add link in html file as /css/styles.css just the way that file is already in public folder)
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.routes);
// app.use('/admin',adminRoutes);
app.use(shopRoutes);

//for page no found

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
// app.use('/', (req, res, next) => {
//     console.log('this always run');
//     next(); // allows request to next middleware
// });

// app.use('/add-product', (req, res, next) => {
//     console.log('in another middle');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');

// });
// //for post url only 
// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });
// app.use('/', (req, res, next) => {
//     console.log('in another middle');
//     //...
//     res.send('<h1>HElllo</h1>');
// });
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
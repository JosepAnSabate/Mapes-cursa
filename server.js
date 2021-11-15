const express = require("express")
const dotenv = require('dotenv')
const engine = require('ejs-mate') 
const path = require('path'); // multiplataforma dels path linux windows
// load env var
dotenv.config({ path: './config/config.env'}); 

const app = express();
const PORT = process.env.PORT || 5500;

// settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//console.log(__dirname + '/views')
app.set('views', path.join(__dirname, 'src/views')); 
//app.set('views', )


//routes
app.use(require('./src/routes/'));

// static files, dir public folder
app.use(express.static(path.join(__dirname, 'src/public')))


app.listen(PORT, () => 
    console.log(`Server running in ${process.env.NODE_ENV}
     mode on port ${PORT}`)
);

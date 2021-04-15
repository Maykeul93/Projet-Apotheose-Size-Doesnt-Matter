require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server); 
const cors = require('cors');

const bodyParser = require('body-parser'); //parse body's answer for token 

const routers = require('./routers');

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

// here u can filter users who can access to the API 
app.use(cors({
  origin: '*', // give autorisation to all extern users to use this API 
}));

app.use(routers); 

io.on('connection', (socket) => {
    console.log('a user connected'); 
    socket.on('disconnect', () => {
      console.log('user disconnect'); 
    })
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});

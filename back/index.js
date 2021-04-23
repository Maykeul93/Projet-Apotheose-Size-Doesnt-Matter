require('dotenv').config()
const express = require('express');
const bodySanitizer = require('./utils/body-sanitizer');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
}); 

const cors = require('cors');

const bodyParser = require('body-parser'); //parse body's answer for token 

// const jwt = require('./utils/jwt'); 

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

app.use(bodySanitizer);
app.use(routers); 


const { startGame } = require('./socket/app'); 
const { initChat } = require ('./socket/socketChat/socketChat');
//Socket Token 
// io.use(jwt.authentificationSocket); 

// Socket Connection
io.on('connection', function (socket) {
  startGame(io, socket); 
  initChat(io, socket);
});
 

server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on:', process.env.PORT);
});

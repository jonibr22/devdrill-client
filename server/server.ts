const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

//LOGIN USER API
server.post('/login', (req, res, next) => { 
  const users = readUsers(); //get all users
  const user = users.filter(
    u => u.email === req.body.email && u.password === req.body.password
  )[0]; //filter users by email & password

  if (user) { //check if user exists
    res.send({ ...formatUser(user), token: generateToken(user) });
  } 
  else {
    res.status(401).send('Incorrect email or password');
  }
});
//REGISTER USER API
server.post('/register', (req, res) => {
  const users = readUsers(); //get all users
  const user = users.filter(u => u.email === req.body.email)[0]; //filter users by email 
  //check if email does not exists
  if (user === undefined || user === null) {
    res.send({...formatUser(req.body),token: generateToken(req.body)
    });
    db.users.push(req.body); //add to db.json
  } 
  else {
    res.status(500).send('User already exists');
  }
});
// // 
// server.use('/users', (req, res, next) => {
//   if (isAuthorized(req) || req.query.bypassAuth === 'true') {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// });

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user) {
  delete user.password;
  user.signin = new Date();
  return user;
}

function generateToken(user) {
  return "user-token"
}

// function isAuthorized(req) {
//   return req.headers.authorization === 'admin-token' ? true : false;
// }

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');  
  const users = JSON.parse(dbRaw).users
  return users;
}
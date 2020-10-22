const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const _ = require('lodash')
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

//LOGIN USER API
server.post('/login', (req, res) => { 
  const db = router.db;
  const users = all(db,'users'); //get all users
  const user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  ); //filter users by email & password
  if (user.value()) { //check if user exists
    res.send(user);
  }
  else {
    res.status(401).send('Incorrect email or password');
  }
});
//REGISTER USER API
server.post('/register', (req, res) => {
  const db = router.db;
  const users = all(db,'users'); //get all users
  const user = users.find(u => u.email === req.body.email); //filter users by email 
  //check if email does not exists
  if (!user.value()) {
    insert(db,'users',{
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      name: req.body.name
    }); //add to db.json
    res.send(user);
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


function formatUser(user) {
  user.password = '';
  user.signin = new Date();
  return user;
}
function generateToken(user) {
  return "user-token"
}

// function isAuthorized(req) {
//   return req.headers.authorization === 'admin-token' ? true : false;
// }

//INNER CRU
function all(db, collection){
  const table = db.get(collection);
  return table;
}
function find(db, collection, id){
  const table = db.get(collection);
  return table.find(item => item.id == id);
}
function insert(db, collection, body){
  const table = db.get(collection);
  const exists = any(table);
  let latestId = 0;
  if(exists){
    latestId = Math.max(...table.map(item=>item.id));
  }
  body.id = latestId + 1;
  table.push(body).write();
  return body;
}
function update(db, collection, body){
  const table = db.get(collection);
  const found = table.find(item => item.id == body.id);
  if(found.value()){
    table.find(item => item.id == body.id)
      .assign(_.omit(body, ['id']))
      .write()
  }
}
////

// read if array has any element 
// (i made this bcuz every effort i tried to check if db.get array is empty or no is useless)
// (in other words, this method is the only one which is working)
function any(table){
  return table.map(item => 1).find(x => x == 1).value();
}

// server.post('/dummy', (req, res) => {
//   const db = router.db;
//   const e = update(db,'users',req.body);
//   res.send(e);
// })

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
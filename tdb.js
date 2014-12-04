db = require('./db');

db.create({db:'x',user:'j',pass:'p'}, function(e) {
  console.log(e);
});


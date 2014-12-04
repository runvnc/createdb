
db.things.insert({});


user = { user: name,
    pwd: pass,
    roles: [ "readWrite" ]
  };

db.createUser(user);


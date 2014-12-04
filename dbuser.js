var restify = require('restify')
    db = require('./db');

var server = restify.createServer({
	  name: 'myapp',
      version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


server.post('/create', function (req, res, next) { 
  console.log(req.params);

  db.create(req.params, function(e) {
    if (e) {
      res.send({status:'error',message:e.message});
    } else {
      res.send({status:'success'});   
    }
  });
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

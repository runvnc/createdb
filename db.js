var childproc = require('child_process');

exports.create = function(params, cb) {
  var err = '';
  var cmd = childproc.spawn('sh',['createmongo.sh',params.db,params.user,params.pass]);
  cmd.on('stdout', function(data) {
    console.log(data.toString());
  });
  cmd.on('stderr', function(data) {
    console.log(data.toString());
    err += data.toString()
  });
  cmd.on('close', function(code) {
    console.log(code);
    if (err !== '') {
      cb(new Error(err));
    } else {
      cb(null);
    }
  });
}

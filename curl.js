const request = require('request');

module.exports = (site, done) => {
  request(site, function(err, response, body){
    if(err) throw err;
    done(body);
  })
}

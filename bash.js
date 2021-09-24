const pwdCommand = require('./pwd');
const lsCommand = require('./ls');
const catCommand = require('./cat');
const reqCommand = require('./curl');
const dateCommand = require('./date');

process.stdout.write('prompt > ');



process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')

  const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  }


  if(cmd[0] === 'pwd'){
    pwdCommand(done);
  }

  if(cmd[0] === 'ls'){
    lsCommand(done);
  }
  if(cmd[0] === 'cat'){
    catCommand(cmd[1], done);
  }

  if(cmd[0] === 'curl'){
    reqCommand(cmd[1], done);
  }

  if(cmd[0] === 'date'){
    dateCommand(done);
  }
})



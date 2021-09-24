const pwdCommand = require('./pwd');
const lsCommand = require('./ls');
const catCommand = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')


  if(cmd === 'pwd'){
    pwdCommand();
  }

  if(cmd === 'ls'){
    lsCommand();
  }
  if(cmd[0] === 'cat'){
    process.stdout.write(cmd[1]);
    catCommand(cmd[1]);

  }


  //process.stdout.write('You typed: ' +cmd);
  //process.stdout.write('\nprompt > ');
})

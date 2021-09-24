const pwdCommand = require('./pwd');
const lsCommand = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    pwdCommand();
  }

  if(cmd === 'ls'){
    lsCommand();
  }


  //process.stdout.write('You typed: ' +cmd);
  //process.stdout.write('\nprompt > ');
})

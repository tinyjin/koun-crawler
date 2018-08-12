const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

const extractNoun = (textSet, callback) => {
  fs.writeFileSync(path.resolve(__dirname, 'input.json'), JSON.stringify(textSet, null, 2));

  const modulePath = path.resolve(__dirname, 'extract-noun.py');

  exec(`python ${modulePath}`, (err, stdout, stderr) => {
    if (err) return callback(err);

    const extractedNoun = fs.readFileSync(path.resolve(__dirname, 'output.json'), 'utf8');
    callback(null, extractedNoun);
  });
}

module.exports = extractNoun;
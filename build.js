var fs = require('fs');
const crypto = require('node:crypto');

function calculateSHA256(data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

var template = fs.readFileSync('./content-script-template.js').toString();
var bundle = fs.readFileSync('./dist/bundle.min.js').toString();

var contentScript = template.replace('/* SCRIPT_TEXT_CONTENT */', bundle);
fs.writeFileSync('./extension/content-script.js', contentScript);

console.log('build.js done');

const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const matches = content.match(/<template id="tmpl-[^"]+">/g);
console.log('Found templates:', matches ? matches.length : 0);
if (matches) {
  console.log(matches.slice(0, 10).join(', '));
}

const pageMatches = content.match(/id="page-[^"]+"/g);
console.log('Found pages:', pageMatches ? pageMatches.join(', ') : 0);

const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const tFirst = content.indexOf('<template');
const tLast = content.lastIndexOf('</template>');
console.log('Templates from', tFirst, 'to', tLast + 11);

const scripts = [];
let pos = 0;
while (true) {
  const sStart = content.indexOf('<script', pos);
  if (sStart === -1) break;
  const sEnd = content.indexOf('</script>', sStart);
  scripts.push({ sStart, sEnd: sEnd + 9 });
  pos = sEnd + 9;
}
console.log('Scripts:', scripts);

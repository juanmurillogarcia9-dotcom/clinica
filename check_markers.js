const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const markers = [
  '<!-- PAGE: HOME -->',
  '<!-- PAGE: PEDIATRIA -->',
  '<!-- PAGE: NEONATOS -->',
  '<!-- PAGE: P&P -->',
  '<!-- PAGE: MEDICAMENTOS -->',
  '<!-- PAGE: CALCULADORAS CLINICAS',
  '<!-- PAGE: SIMULACION',
  '<!-- PAGE: MI TURNO',
  '</main>',
  '<!-- ==================== MODALS & TEMPLATES ==================== -->',
  '<script>'
];

markers.forEach(m => {
  const idx = content.indexOf(m);
  console.log(m + ' => index: ' + idx);
});

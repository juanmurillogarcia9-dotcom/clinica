const fs = require('fs');

const existingHtml = fs.readFileSync('index.html', 'utf8');

// SVGs
const svgDoctorGirl = `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="95" fill="#E6FFFA" stroke="#006644" stroke-width="4"/>
  <path d="M50 115C45 80 60 40 100 40C140 40 155 80 150 115C140 135 130 145 125 140C120 115 130 80 100 80C70 80 80 115 75 140C70 145 60 135 50 115Z" fill="#78350F"/>
  <path d="M55 190C55 150 70 130 100 130C130 130 145 150 145 190H55Z" fill="#FFFFFF" stroke="#006644" stroke-width="3"/>
  <path d="M85 130L100 155L115 130H85Z" fill="#006644"/>
  <path d="M82 135C82 165 92 175 100 175C108 175 118 165 118 135" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="178" r="7" fill="#006644" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="100" cy="95" r="38" fill="#FDE68A"/>
  <ellipse cx="80" cy="105" rx="7" ry="4" fill="#FCA5A5" opacity="0.8"/>
  <ellipse cx="120" cy="105" rx="7" ry="4" fill="#FCA5A5" opacity="0.8"/>
  <circle cx="85" cy="92" r="4.5" fill="#1F2937"/>
  <circle cx="86.5" cy="90.5" r="1.5" fill="#FFFFFF"/>
  <circle cx="115" cy="92" r="4.5" fill="#1F2937"/>
  <circle cx="116.5" cy="90.5" r="1.5" fill="#FFFFFF"/>
  <path d="M92 108C94 114 106 114 108 108" stroke="#991B1B" stroke-width="3" stroke-linecap="round"/>
  <path d="M68 85C75 65 95 65 100 75C105 65 125 65 132 85C125 72 110 70 100 76C90 70 75 72 68 85Z" fill="#92400E"/>
  <path d="M80 62H120C120 62 122 48 100 48C78 48 80 62 80 62Z" fill="#FFFFFF" stroke="#006644" stroke-width="2"/>
  <path d="M97 52H103V60H97V52Z" fill="#EF4444"/>
  <path d="M93 56H107V58H93V56Z" fill="#EF4444"/>
</svg>`;

const svgDoctorBoy = `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="95" fill="#ECFEFF" stroke="#0891B2" stroke-width="4"/>
  <path d="M62 85C62 50 80 42 100 42C120 42 138 50 138 85C138 88 135 92 132 88C125 70 118 72 100 70C82 72 75 70 68 88C65 92 62 88 62 85Z" fill="#1E293B"/>
  <path d="M55 190C55 150 70 130 100 130C130 130 145 150 145 190H55Z" fill="#FFFFFF" stroke="#0E7490" stroke-width="3"/>
  <path d="M85 130L100 152L115 130H85Z" fill="#06B6D4"/>
  <path d="M82 135C82 165 92 175 100 175C108 175 118 165 118 135" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="178" r="7" fill="#0891B2" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="100" cy="95" r="38" fill="#FED7AA"/>
  <rect x="73" y="86" width="22" height="18" rx="5" fill="#FFFFFF" fill-opacity="0.2" stroke="#0284C7" stroke-width="3"/>
  <rect x="105" y="86" width="22" height="18" rx="5" fill="#FFFFFF" fill-opacity="0.2" stroke="#0284C7" stroke-width="3"/>
  <path d="M95 95H105" stroke="#0284C7" stroke-width="3"/>
  <ellipse cx="78" cy="110" rx="6" ry="3.5" fill="#F87171" opacity="0.7"/>
  <ellipse cx="122" cy="110" rx="6" ry="3.5" fill="#F87171" opacity="0.7"/>
  <circle cx="84" cy="95" r="3.5" fill="#0F172A"/>
  <circle cx="85" cy="94" r="1" fill="#FFFFFF"/>
  <circle cx="116" cy="95" r="3.5" fill="#0F172A"/>
  <circle cx="117" cy="94" r="1" fill="#FFFFFF"/>
  <path d="M92 114C95 120 105 120 108 114" stroke="#B91C1C" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const svgTeddyDoctor = `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="95" fill="#FEF3C7" stroke="#D97706" stroke-width="4"/>
  <circle cx="68" cy="65" r="20" fill="#B45309"/>
  <circle cx="68" cy="65" r="10" fill="#FDE68A"/>
  <circle cx="132" cy="65" r="20" fill="#B45309"/>
  <circle cx="132" cy="65" r="10" fill="#FDE68A"/>
  <circle cx="100" cy="52" r="12" fill="#E2E8F0" stroke="#64748B" stroke-width="3"/>
  <circle cx="100" cy="52" r="4" fill="#38BDF8"/>
  <circle cx="100" cy="105" r="45" fill="#D97706"/>
  <ellipse cx="100" cy="116" rx="20" ry="14" fill="#FEF3C7"/>
  <ellipse cx="100" cy="110" rx="7" ry="5" fill="#78350F"/>
  <path d="M100 115V122" stroke="#78350F" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M94 122C97 125 103 125 106 122" stroke="#78350F" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="76" cy="116" r="6" fill="#F87171" opacity="0.6"/>
  <circle cx="124" cy="116" r="6" fill="#F87171" opacity="0.6"/>
  <circle cx="85" cy="98" r="5" fill="#451A03"/>
  <circle cx="86.5" cy="96.5" r="1.5" fill="#FFFFFF"/>
  <circle cx="115" cy="98" r="5" fill="#451A03"/>
  <circle cx="116.5" cy="96.5" r="1.5" fill="#FFFFFF"/>
  <path d="M60 190C60 155 75 145 100 145C125 145 140 155 140 190H60Z" fill="#FFFFFF" stroke="#006644" stroke-width="3"/>
  <circle cx="120" cy="168" r="8" fill="#FEE2E2"/>
  <path d="M120 163V173" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M115 168H125" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

const svgNurseGirl = `<svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="95" fill="#F0FDF4" stroke="#16A34A" stroke-width="4"/>
  <circle cx="100" cy="50" r="22" fill="#451A03"/>
  <path d="M55 190C55 150 72 132 100 132C128 132 145 150 145 190H55Z" fill="#ECFDF5" stroke="#059669" stroke-width="3"/>
  <path d="M85 132L100 150L115 132H85Z" fill="#006644"/>
  <circle cx="100" cy="96" r="36" fill="#FDE68A"/>
  <path d="M66 85C75 68 95 68 100 78C105 68 125 68 134 85C125 74 110 74 100 80C90 74 75 74 66 85Z" fill="#451A03"/>
  <path d="M82 62H118C118 62 120 48 100 48C80 48 82 62 82 62Z" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
  <path d="M96 52H104V60H96V52Z" fill="#006644"/>
  <path d="M92 55H108V57H92V55Z" fill="#006644"/>
  <ellipse cx="80" cy="106" rx="7" ry="4" fill="#F87171" opacity="0.7"/>
  <ellipse cx="120" cy="106" rx="7" ry="4" fill="#F87171" opacity="0.7"/>
  <circle cx="85" cy="94" r="4" fill="#1F2937"/>
  <circle cx="86" cy="92.5" r="1.5" fill="#FFFFFF"/>
  <circle cx="115" cy="94" r="4" fill="#1F2937"/>
  <circle cx="116" cy="92.5" r="1.5" fill="#FFFFFF"/>
  <path d="M92 108C94 115 106 115 108 108" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// Extract templates & pages
const tMatch = existingHtml.match(/<template id="tmpl-[\s\S]*?<\/template>/g);
const templatesHtml = tMatch ? tMatch.join('\n') : '';

const getSection = (startMarker, endMarker) => {
  const s = existingHtml.indexOf(startMarker);
  const e = existingHtml.indexOf(endMarker);
  return (s !== -1 && e !== -1) ? existingHtml.substring(s, e) : '';
};

const pedContent = getSection('<!-- PAGE: PEDIATRIA -->', '<!-- PAGE: NEONATOS -->');
const neoContent = getSection('<!-- PAGE: NEONATOS -->', '<!-- PAGE: P&P -->');
const ppContent = getSection('<!-- PAGE: P&P -->', '<!-- PAGE: MEDICAMENTOS -->');
const medContent = getSection('<!-- PAGE: MEDICAMENTOS -->', '<!-- PAGE: CALCULADORAS CLINICAS');
const calcContent = getSection('<!-- PAGE: CALCULADORAS CLINICAS', '<!-- PAGE: SIMULACION');
const simContent = getSection('<!-- PAGE: SIMULACION', '<!-- PAGE: MI TURNO');
const turnoContent = getSection('<!-- PAGE: MI TURNO', '</main>');

console.log('Sections verified. Assembling unified file...');

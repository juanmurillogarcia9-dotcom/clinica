const fs = require('fs');

// Read existing index.html
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

// Standalone Institutional Login View
const standaloneAuthView = `
  <!-- ==================== VIEW 1: PORTAL DE ACCESO PROFESIONAL (LOGIN OBLIGATORIO) ==================== -->
  <div id="view-auth" class="min-h-screen bg-gradient-to-br from-[#002216] via-[#004d33] to-slate-950 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden select-none">
    
    <!-- Background Clinical Decorative Lighting -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Main Container: Split Institutional Card -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-emerald-500/30 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 relative z-10 animate-fadeIn">
      
      <!-- Left Institutional Branding Panel (Desktop) -->
      <div class="lg:col-span-5 bg-gradient-to-br from-[#004d33] via-[#006644] to-[#003322] p-8 text-white flex flex-col justify-between relative overflow-hidden">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md p-1 shadow-inner border border-white/20">
              ${svgDoctorGirl}
            </div>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-200 block">Plataforma Clínica</span>
              <span class="text-lg font-black text-white block leading-tight">Aula de Enfermería</span>
            </div>
          </div>

          <h3 class="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
            El saber científico para cuidar a la infancia
          </h3>
          <p class="text-emerald-100/90 text-xs leading-relaxed mb-6">
            Sistema clínico de decisión y formación continua para enfermería pediátrica y neonatal. Estandarizado bajo protocolos oficiales.
          </p>

          <!-- Accreditation Pillars -->
          <div class="space-y-3 text-xs text-emerald-100">
            <div class="flex items-start space-x-2.5">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5 text-sm"></i>
              <span><strong>Neonatología Vital:</strong> APGAR, Silverman y reanimación minuto de oro.</span>
            </div>
            <div class="flex items-start space-x-2.5">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5 text-sm"></i>
              <span><strong>Farmacología Segura:</strong> Dosificación mg/kg y dilución en buretrol.</span>
            </div>
            <div class="flex items-start space-x-2.5">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5 text-sm"></i>
              <span><strong>Gestión Hospitalaria:</strong> Censo de guardia y los 10 correctos de medicación.</span>
            </div>
          </div>
        </div>

        <div class="pt-6 mt-6 border-t border-emerald-700/60 flex items-center justify-between text-[11px] text-emerald-200">
          <span>Estándares AIEPI • AAP • PAI</span>
          <span class="bg-emerald-800/80 px-2 py-0.5 rounded font-mono text-[10px]">v2.6 PRO</span>
        </div>
      </div>

      <!-- Right Panel: Authentication Forms -->
      <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
        
        <div>
          <!-- Tab Switcher -->
          <div class="flex border-b border-slate-200 dark:border-slate-800 mb-6">
            <button onclick="switchAuthTab('login')" id="auth-tab-btn-login" class="flex-1 pb-3 text-xs font-bold text-[#006644] border-b-2 border-[#006644] dark:text-emerald-400">
              <i class="fa-solid fa-right-to-bracket mr-1.5"></i> Iniciar Sesión
            </button>
            <button onclick="switchAuthTab('register')" id="auth-tab-btn-register" class="flex-1 pb-3 text-xs font-semibold text-slate-400 border-b-2 border-transparent hover:text-slate-700 dark:hover:text-slate-200">
              <i class="fa-solid fa-user-plus mr-1.5"></i> Registro de Profesional
            </button>
          </div>

          <!-- FORM 1: INICIAR SESIÓN -->
          <form id="form-login" onsubmit="handleLoginSubmit(event)" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Correo Electrónico Institucional o Personal:</label>
              <div class="relative">
                <i class="fa-solid fa-envelope absolute left-3 top-3 text-slate-400 text-xs"></i>
                <input type="email" id="login-email" required placeholder="enfermero@hospital.com" class="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Contraseña de Acceso:</label>
              <div class="relative">
                <i class="fa-solid fa-lock absolute left-3 top-3 text-slate-400 text-xs"></i>
                <input type="password" id="login-password" required placeholder="••••••••" class="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
              </div>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" id="login-remember" checked class="mr-2 text-emerald-600 rounded">
                <span>Recordar sesión en este equipo</span>
              </label>
              <span class="text-[#006644] dark:text-emerald-400 font-semibold cursor-pointer" onclick="loginAsGuest()">¿Olvidó contraseña?</span>
            </div>
            
            <button type="submit" class="w-full bg-[#006644] hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center">
              <i class="fa-solid fa-right-to-bracket mr-2"></i> Ingresar al Aula Clínica
            </button>
            
            <div class="relative flex py-1 items-center">
              <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              <span class="flex-shrink mx-3 text-slate-400 text-[10px] uppercase font-bold tracking-wider">O acceso inmediato</span>
              <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            </div>

            <!-- Quick Guest Access Demo Button -->
            <button type="button" onclick="loginAsGuest()" class="w-full bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <i class="fa-solid fa-user-check text-[#006644] dark:text-emerald-400 mr-2"></i> Acceso Rápido como Invitado (Demo Clínico)
            </button>
          </form>

          <!-- FORM 2: REGISTRO DE PROFESIONAL NUEVO -->
          <form id="form-register" onsubmit="handleRegisterSubmit(event)" class="space-y-3 hidden">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nombre Completo y Título:</label>
              <input type="text" id="reg-name" required placeholder="Lic. Mariana Torres" class="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rol Profesional:</label>
                <select id="reg-role" required class="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-2 text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
                  <option value="Enfermera(o) Pediátrica">Enfermera(o) Pediátrica</option>
                  <option value="Estudiante de Enfermería">Estudiante de Enfermería</option>
                  <option value="Enfermero(a) Jefe de Guardia">Enfermero(a) Jefe de Guardia</option>
                  <option value="Auxiliar de Enfermería">Auxiliar de Enfermería</option>
                  <option value="Pediatra / Docente Clínico">Pediatra / Docente Clínico</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Hospital / Universidad:</label>
                <input type="text" id="reg-hospital" required placeholder="Hospital Infantil San José" class="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-2 text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Selecciona tu Avatar Clínico:</label>
              <div class="grid grid-cols-4 gap-2">
                <label class="p-1 border-2 rounded-xl flex items-center justify-center cursor-pointer border-emerald-600 bg-emerald-50 dark:bg-slate-800 avatar-option" title="Dra. Sofía">
                  <input type="radio" name="reg-avatar" value="doctor-girl" checked class="hidden" onchange="highlightAvatarOption(this)">
                  <div class="w-9 h-9">${svgDoctorGirl}</div>
                </label>
                <label class="p-1 border-2 rounded-xl flex items-center justify-center cursor-pointer border-slate-200 dark:border-slate-700 avatar-option" title="Dr. Lucas">
                  <input type="radio" name="reg-avatar" value="doctor-boy" class="hidden" onchange="highlightAvatarOption(this)">
                  <div class="w-9 h-9">${svgDoctorBoy}</div>
                </label>
                <label class="p-1 border-2 rounded-xl flex items-center justify-center cursor-pointer border-slate-200 dark:border-slate-700 avatar-option" title="Enfermera Clara">
                  <input type="radio" name="reg-avatar" value="nurse-girl" class="hidden" onchange="highlightAvatarOption(this)">
                  <div class="w-9 h-9">${svgNurseGirl}</div>
                </label>
                <label class="p-1 border-2 rounded-xl flex items-center justify-center cursor-pointer border-slate-200 dark:border-slate-700 avatar-option" title="Dr. Osito">
                  <input type="radio" name="reg-avatar" value="teddy-doctor" class="hidden" onchange="highlightAvatarOption(this)">
                  <div class="w-9 h-9">${svgTeddyDoctor}</div>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Correo Electrónico:</label>
              <input type="email" id="reg-email" required placeholder="tu-correo@hospital.com" class="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-2 text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Contraseña:</label>
              <input type="password" id="reg-password" required placeholder="Mínimo 6 caracteres" class="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-2 text-xs focus:ring-2 focus:ring-emerald-600 dark:text-white">
            </div>
            <button type="submit" class="w-full bg-[#006644] hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center justify-center">
              <i class="fa-solid fa-user-plus mr-2"></i> Crear Cuenta e Ingresar
            </button>
          </form>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-[10px]">
          Al ingresar aceptas los términos de uso formativo y las políticas de seguridad clínica del paciente.
        </div>

      </div>

    </div>

  </div>
`;

// Build the complete index.html
console.log('Writing senior clinical architecture into index.html...');

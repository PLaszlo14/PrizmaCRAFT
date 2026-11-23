const $ = (s, r=document) => r.querySelector(s);
document.documentElement.classList.add('js');
/* ---------- Technology illustrations ---------- */
(function(){
// 3D printing: wireframe model -> printed layers
let layers = '';
for (let i = 0; i < 12; i++) {
const t = i / 11;
const w = 70 + 46 * Math.sin(Math.PI * (t * .9 + .05)) - 10 * t;
layers += `<rect x="${(345 - w/2).toFixed(1)}" y="${232 - i*13}" width="${w.toFixed(1)}" height="11" rx="5" fill="url(#fg)" opacity="${(.55 + .45*(1-t)).toFixed(2)}"/>`;
}
const pa=$('#techPrintArt'); if(pa) pa.innerHTML = `
<svg viewBox="0 0 480 280" role="img" aria-label="Illusztráció: bal oldalon egy digitális vázamodell drótvázas rajza, jobb oldalon ugyanaz a váza rétegenként felépítve.">
<g fill="none" stroke="#ffb36b" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 5" opacity=".9">
<path d="M95 60h50c0 30 36 44 36 90 0 36-28 66-61 66s-61-30-61-66c0-46 36-60 36-90z" transform="translate(-5 4)"/>
<ellipse cx="116" cy="108" rx="34" ry="8"/><ellipse cx="116" cy="148" rx="48" ry="11"/><ellipse cx="116" cy="188" rx="40" ry="9"/>
<path d="M116 64v152" opacity=".5"/>
</g>
<path d="M200 140h60" stroke="#ff7a3d" stroke-width="2.5" stroke-linecap="round"/>
<path d="M252 130l12 10-12 10" fill="none" stroke="#ff7a3d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="270" y="236" width="150" height="12" rx="5" fill="#2c2e36" stroke="#4d505b"/>
${layers}
<path d="M330 52h30l-8 18h-14z" fill="#ffc9a8"/><rect x="318" y="30" width="54" height="24" rx="6" fill="#2c2e36" stroke="#ff7a3d"/>
</svg>`;
// Laser cutter / engraver (desktop CO2 style, lid open) – shared by hero and technology panel
function laserMachine(p){ return `
<defs>
<linearGradient id="${p}wood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d1a672"/><stop offset="1" stop-color="#9a6b40"/></linearGradient>
<linearGradient id="${p}body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#32353f"/><stop offset="1" stop-color="#191b21"/></linearGradient>
<linearGradient id="${p}metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#666a78"/><stop offset=".5" stop-color="#40434d"/><stop offset="1" stop-color="#262830"/></linearGradient>
<linearGradient id="${p}lid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a3d" stop-opacity=".34"/><stop offset="1" stop-color="#ff5a1f" stop-opacity=".07"/></linearGradient>
<radialGradient id="${p}spot"><stop offset="0" stop-color="#ffd2a8" stop-opacity=".95"/><stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/></radialGradient>
<pattern id="${p}honey" width="12" height="10.4" patternUnits="userSpaceOnUse"><path d="M3 0h6l3 5.2-3 5.2H3L0 5.2z" fill="none" stroke="#5a5d69" stroke-width="1"/></pattern>
<filter id="${p}glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<ellipse cx="244" cy="278" rx="222" ry="13" fill="#000" opacity=".5"/>
<!-- exhaust duct -->
<rect x="416" y="104" width="40" height="36" rx="7" fill="url(#${p}metal)" stroke="#4d505b" stroke-width="2"/>
<circle cx="436" cy="122" r="11" fill="#131418" stroke="#4d505b"/><path d="M436 111v22M425 122h22" stroke="#4d505b" stroke-width="2"/>
<!-- open lid with tinted window -->
<path d="M92 12h296l22 76H70z" fill="url(#${p}lid)" stroke="#ff7a3d" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M132 22l-14 58M164 22l-14 58" stroke="#ffd2a8" stroke-opacity=".35" stroke-width="3" stroke-linecap="round"/>
<path d="M70 88H410l1 6H69z" fill="url(#${p}metal)"/>
<!-- machine top and honeycomb bed -->
<path d="M70 94H410L432 182H48z" fill="#1b1d23" stroke="#4d505b" stroke-width="2" stroke-linejoin="round"/>
<polygon points="88,100 392,100 412,172 68,172" fill="#131418" stroke="#4d505b" stroke-width="2"/>
<polygon points="88,100 392,100 412,172 68,172" fill="url(#${p}honey)"/>
<polygon points="88,100 392,100 389,112 85,112" fill="#000" opacity=".4"/>
<path d="M84 100 66 172M396 100 414 172" stroke="#7a7e8b" stroke-width="5" stroke-linecap="round"/>
<!-- plywood sheet with thickness, cut-outs and burnt engraving -->
<polygon points="122,120 358,120 374,174 106,174" fill="#000" opacity=".38"/>
<polygon points="128,114 352,114 366,164 114,164" fill="url(#${p}wood)" stroke="#6b4a2c" stroke-width="1.5"/>
<polygon points="114,164 366,164 367,170 113,170" fill="#7a5532"/>
<path d="M136 126c40-5 70 4 110-1s60-2 94 0M130 150c50 5 80-4 120 1s70 3 104 0" fill="none" stroke="#6b4a2c" stroke-opacity=".4" stroke-width="1.2" stroke-linecap="round"/>
<ellipse cx="170" cy="140" rx="26" ry="12" fill="#131418" stroke="#ffb36b" stroke-width="1.5"/>
<path d="M144 143a26 12 0 0 0 52 0" fill="none" stroke="#7a5532" stroke-width="3"/>
<rect x="214" y="129" width="40" height="22" rx="7" fill="#131418" stroke="#ffb36b" stroke-width="1.5"/>
<g fill="none" stroke="#2e1a0c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
<path d="M308 124l22 28h-44z"/><path d="M308 124v28M298 142h20" opacity=".7"/><path d="M288 159h40M296 164h24" opacity=".8"/>
</g>
<!-- gantry: posts, X-axis beam (with shadow), moving laser head -->
<rect x="72" y="132" width="336" height="8" rx="4" fill="#000" opacity=".25"/>
<rect x="66" y="94" width="14" height="48" rx="4" fill="url(#${p}metal)" stroke="#7a7e8b" stroke-width="1.5"/>
<rect x="398" y="94" width="14" height="48" rx="4" fill="url(#${p}metal)" stroke="#7a7e8b" stroke-width="1.5"/>
<rect x="70" y="92" width="340" height="12" rx="5" fill="url(#${p}metal)" stroke="#7a7e8b" stroke-width="1.5"/>
<g class="laser-sweep">
<ellipse cx="250" cy="152" rx="24" ry="8" fill="url(#${p}spot)"/>
<rect x="226" y="86" width="48" height="30" rx="7" fill="url(#${p}metal)" stroke="#ff7a3d" stroke-width="2"/>
<rect x="236" y="116" width="28" height="10" rx="3" fill="#4d505b"/>
<path d="M246 126h8l-2 9h-4z" fill="#ffd2a8"/>
<line x1="250" y1="135" x2="250" y2="150" stroke="#ff5a1f" stroke-width="2.6" filter="url(#${p}glow)"/>
<circle class="laser-dot" cx="250" cy="152" r="4.5" fill="#ffd2a8" filter="url(#${p}glow)"/>
</g>
<!-- front housing with control panel -->
<rect x="48" y="182" width="384" height="86" rx="12" fill="url(#${p}body)" stroke="#4d505b" stroke-width="2"/>
<path d="M60 183.5H420" stroke="#fff" stroke-opacity=".22" stroke-width="2" stroke-linecap="round"/>
<rect x="70" y="198" width="86" height="42" rx="6" fill="#131418" stroke="#4d505b"/>
<path d="M82 214h42M82 227h60" stroke="#ff7a3d" stroke-width="3" stroke-linecap="round"/>
<circle cx="184" cy="219" r="7" fill="#3d404a" stroke="#7a7e8b"/><circle cx="208" cy="219" r="7" fill="#3d404a" stroke="#7a7e8b"/>
<circle cx="234" cy="219" r="9" fill="#ff5a1f"/>
<circle cx="394" cy="219" r="17" fill="#26282f" stroke="#ffb36b" stroke-width="1.5"/><circle cx="394" cy="219" r="11" fill="#e5484d"/>
<rect x="72" y="268" width="38" height="8" rx="3" fill="#3d404a"/><rect x="370" y="268" width="38" height="8" rx="3" fill="#3d404a"/>
`; }
const la=$('#techLaserArt'); if(la) la.innerHTML = `
<svg viewBox="0 0 480 292" role="img" aria-label="Illusztráció: nyitott fedelű asztali lézervágó gép. A portálon mozgó lézerfej a méhsejt rácsos munkaasztalon fekvő rétegelt lemezt vágja és gravírozza, elöl a vezérlőpanel látszik.">${laserMachine('t')}</svg>`;

})();

/* reveal */
(function(){
const items=[...document.querySelectorAll('.reveal')];
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){items.forEach(i=>i.classList.add('in'));return;}
const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ob.unobserve(e.target);}}),{threshold:.12});
items.forEach(i=>o.observe(i));
})();
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

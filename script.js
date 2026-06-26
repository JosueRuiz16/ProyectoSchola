// 1. BANCO DE DATOS ROBUSTO
const bank = {
    lectura: [
        { t: "La lectura digital requiere mayor concentración para evitar distracciones de las notificaciones.", p: "¿Qué reto menciona el texto?", o: ["Falta de luz", "Distracciones digitales", "Costo de internet"], c: 1 },
        { t: "En Nicaragua, el pinol es una bebida tradicional a base de maíz tostado y cacao.", p: "¿Cuál es la base del pinol?", o: ["Trigo", "Arroz", "Maíz tostado"], c: 2 },
        { t: "La ingeniería de sistemas optimiza procesos mediante algoritmos eficientes.", p: "¿Qué usa la ingeniería para optimizar?", o: ["Solo fuerza", "Algoritmos eficientes", "Papel y lápiz"], c: 1 }
    ],
    ideaprincipal: [
        { t: "Los sistemas de bases de datos relacionales permiten organizar grandes volúmenes de registros asegurando que no haya información duplicada innecesariamente.", p: "¿Cuál es la idea principal del texto?", o: ["Las bases de datos relacionales evitan la duplicidad y organizan eficientemente.", "Comprar discos duros es costoso.", "El uso de WhatsApp para ventas."], c: 0 },
        { t: "El modernismo de Rubén Darío revolucionó la literatura hispanoamericana con ritmos nuevos, temas exóticos y un orgullo patrio inigualable.", p: "¿De qué trata principalmente el texto?", o: ["De los viajes diplomáticos por Europa.", "De la revolución literaria y aporte del modernismo de Darío.", "De cómo se produce el maíz en Metapa."], c: 1 }
    ],
    ordenar: [
        ["Analizar el problema detalladamente.", "Diseñar el algoritmo de solución.", "Escribir el código en el lenguaje elegido.", "Realizar las pruebas de funcionamiento."],
        ["Crear el archivo index.html.", "Agregar estilos visuales con CSS.", "Programar la lógica con JavaScript.", "Generar el archivo ejecutable APK."],
        ["Conectar el servidor a la base de datos.", "Definir la estructura de las tablas.", "Insertar los registros de información.", "Hacer consultas SQL para obtener datos."],
        ["Seleccionar los mejores granos de maíz.", "Tostar el grano a fuego lento uniformemente.", "Moler el maíz con cacao y canela.", "Empacar el pinolillo para su venta."],
        ["Recibir el pedido del cliente por WhatsApp.", "Verificar la disponibilidad en el inventario.", "Alistar el paquete para el envío.", "Realizar la entrega en el punto acordado."]
    ],
    errores: [
        { 
            t: "La educasión es el arma más poderossa para canbiar el mundo.", 
            palabras: [
                { incorrecta: "educasión", correcta: "educación" },
                { incorrecta: "poderossa", correcta: "poderosa" },
                { incorrecta: "canbiar", correcta: "cambiar" }
            ]
        },
        { 
            t: "En Nicaragua es muy común comer gallopinto en el desalluno con un cafecito calinte.", 
            palabras: [
                { incorrecta: "desalluno", correcta: "desayuno" },
                { incorrecta: "calinte", correcta: "caliente" }
            ]
        },
        { 
            t: "El ingenniero debe revisar el códijo para evitar herrores en la aplicación final.", 
            palabras: [
                { incorrecta: "ingenniero", correcta: "ingeniero" },
                { incorrecta: "códijo", correcta: "código" },
                { incorrecta: "herrores", correcta: "errores" }
            ]
        }
    ],
    completar: [
        { t: "La [---] artificial está cambiando la forma en que programamos hoy en día.", o: ["inteligencia", "comida", "música"], c: "inteligencia" },
        { t: "Para proteger tu información, es vital usar una [---] segura y única.", o: ["puerta", "contraseña", "ventana"], c: "contraseña" },
        { t: "El [---] de Nicaragua es el lago más grande de Centroamérica.", o: ["río", "océano", "lago"], c: "lago" },
        { t: "En una base de datos, cada [---] debe tener un identificador único.", o: ["página", "registro", "dibujo"], c: "registro" }
    ],
    ahorcado: [
        { p: "CHINANDEGA", s: "Ciudad conocida como la Ciudad de las Naranjas" },
        { p: "TECLADO", s: "Periférico de entrada con muchas letras y símbolos" },
        { p: "GRANADA", s: "La Gran Sultana, ciudad colonial junto al lago" },
        { p: "INTERNET", s: "La red global que conecta a Nicaragua con el mundo" },
        { p: "BATERIA", s: "Lo que mantiene encendido tu celular o laptop" }
    ],
    escape: [
        { a: "SISTEMA BLOQUEADO: Encuentra al intruso de periféricos: Mouse, Monitor, Teclado, Café, Impresora.", r: "café" },
        { a: "CÓDIGO DE ACCESO: Lenguaje de marcas estructurado para la web cuyas siglas son H_M_.", r: "html" },
        { a: "ERROR DE LÓGICA: Si un ingeniero tiene 3 archivos y borra 2, luego recupera 1 y duplica todos los restantes... ¿Cuántos tiene ahora?", r: "4" }
    ],
};

// Variables globales de Gamificación
let score = 0;
let wrongAttempts = 0;
let correctasActuales = 0;
let totalObjetivo = 0;
window.userName = "Usuario";

// Configuración de Estaciones y Festividades
const themes = {
    'game-lectura': { name: "Primavera 🌸", bg: "from-green-50 to-emerald-100", text: "text-emerald-700", badge: "bg-emerald-200 text-emerald-800", icons: ["🌸", "🌱", "🦋", "🌼"] },
    'game-ordenar': { name: "Verano ☀️", bg: "from-amber-50 to-orange-100", text: "text-orange-700", badge: "bg-amber-200 text-orange-800", icons: ["☀️", "🏖️", "🕶️", "🌊"] },
    'game-ideaprincipal': { name: "Otoño 🍂", bg: "from-orange-50 to-yellow-200", text: "text-amber-800", badge: "bg-orange-200 text-amber-900", icons: ["🍂", "🍁", "💨", "🍄"] },
    'game-completar': { name: "Invierno ❄️", bg: "from-blue-50 to-cyan-100", text: "text-cyan-700", badge: "bg-blue-200 text-blue-800", icons: ["❄️", "⛄", "🧤", "🧊"] },
    'game-errores': { name: "Halloween 🎃", bg: "from-purple-950 to-slate-900", text: "text-purple-400", cardBg: "bg-slate-800/90 text-slate-100", badge: "bg-purple-800 text-purple-200", icons: ["🎃", "👻", "🦇", "🕷️"] },
    'game-ahorcado': { name: "Fiesta Folklórica 💀", bg: "from-rose-50 to-orange-100", text: "text-rose-700", badge: "bg-rose-200 text-rose-800", icons: ["💀", "🎸", "🪅", "💐"] },
    'game-escape': { name: "Navidad Cyber-Tech 🎄", bg: "from-red-950 to-slate-900", text: "text-red-400", cardBg: "bg-slate-800/90 text-white", badge: "bg-red-700 text-white", icons: ["🎄", "🎁", "🎅", "🔔", "💾"] }
};

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// NUEVO: SISTEMA DE NOTIFICACIONES PROFESIONALES (TOASTS UI)
function showToast(message, isSuccess = true) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    toast.className = `animate-toast pointer-events-auto flex items-center p-4 mb-3 rounded-2xl shadow-xl border backdrop-blur-md transition-all text-sm font-bold tracking-wide text-center justify-center ${
        isSuccess 
        ? 'bg-green-500/95 border-green-400 text-white shadow-green-500/20' 
        : 'bg-red-500/95 border-red-400 text-white shadow-red-500/20'
    }`;
    
    toast.innerHTML = isSuccess 
        ? `<i class="fas fa-check-circle mr-2 text-lg"></i> ${message}`
        : `<i class="fas fa-times-circle mr-2 text-lg"></i> ${message}`;
        
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px) translateX(-50%)';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

function updateHUD() {
    document.getElementById('hud-score').innerText = score;
    document.getElementById('hud-wrong').innerText = wrongAttempts;
    document.getElementById('menu-score').innerText = `${score} ⭐`;
}

function injectOrnaments(type) {
    const layer = document.getElementById('ornaments-layer');
    layer.innerHTML = '';
    const theme = themes[type];
    if (!theme) return;

    for (let i = 0; i < 12; i++) {
        const ornament = document.createElement('div');
        ornament.className = 'floating-ornament';
        ornament.innerText = getRandom(theme.icons);
        ornament.style.left = Math.random() * 100 + '%';
        ornament.style.top = Math.random() * 100 + '%';
        ornament.style.animationDelay = (Math.random() * 3) + 's';
        ornament.style.animationDuration = (3 + Math.random() * 4) + 's';
        layer.appendChild(ornament);
    }
}

function showSection(id) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game-container').classList.add('hidden');
    
    document.body.className = "bg-slate-50 font-sans antialiased text-slate-900 transition-colors duration-500";

    if (id === 'menu') {
        document.getElementById('menu').classList.remove('hidden');
        updateHUD();
    } else if (id === 'home') {
        document.getElementById('home').classList.remove('hidden');
    } else {
        document.getElementById('game-container').classList.remove('hidden');
        render(id);
    }
}

function render(type) {
    const ctx = document.getElementById('game-content');
    const badge = document.getElementById('game-badge');
    const theme = themes[type] || { name: "Desafío", bg: "from-white to-white", text: "text-slate-700", badge: "bg-slate-200 text-slate-800" };

    document.body.className = `bg-gradient-to-br ${theme.bg} font-sans antialiased text-slate-900 transition-colors duration-500 min-h-screen`;
    badge.innerText = theme.name;
    badge.className = `font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ${theme.badge}`;
    ctx.className = `${theme.cardBg || 'bg-white/90 text-slate-800'} backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 transition-all`;

    updateHUD();
    injectOrnaments(type);

    if (type === 'game-lectura') {
        const d = getRandom(bank.lectura);
        ctx.innerHTML = `
            <h2 class="font-bold text-xl mb-4 ${theme.text}">Comprensión Lectora</h2>
            <p class="bg-emerald-50/50 p-4 border-l-4 border-emerald-500 rounded-r-xl mb-4 italic text-slate-700 font-medium">"${d.t}"</p>
            <p class="mb-4 font-semibold text-slate-800">${d.p}</p>
            <div class="space-y-2">
                ${d.o.map((opt, i) => `<button onclick="check(${i === d.c})" class="w-full text-left p-4 border border-slate-200 bg-white/70 hover:bg-emerald-50 rounded-2xl transition-all font-medium active:scale-98 text-slate-700">${opt}</button>`).join('')}
            </div>`;
    }

    if (type === 'game-ideaprincipal') {
        const d = getRandom(bank.ideaprincipal);
        ctx.innerHTML = `
            <h2 class="font-bold text-xl mb-4 ${theme.text}">Idea Principal</h2>
            <p class="bg-amber-50/50 p-4 border-l-4 border-amber-500 rounded-r-xl mb-4 italic text-slate-700 font-medium">"${d.t}"</p>
            <p class="mb-4 font-semibold text-slate-800">${d.p}</p>
            <div class="space-y-2">
                ${d.o.map((opt, i) => `<button onclick="check(${i === d.c})" class="w-full text-left p-4 border border-slate-200 bg-white/70 hover:bg-amber-50 rounded-2xl transition-all font-medium active:scale-98 text-slate-700">${opt}</button>`).join('')}
            </div>`;
    }

    if (type === 'game-ordenar') {
        const d = getRandom(bank.ordenar);
        window.currentNext = 0;
        const indicesSujetos = d.map((text, i) => ({ text, originalIndex: i }));
        indicesSujetos.sort(() => Math.random() - 0.5);

        ctx.innerHTML = `
            <h2 class="font-bold text-xl mb-2 ${theme.text}">Ordenar Secuencia</h2>
            <p class="text-xs text-slate-500 mb-4 italic">Toca los bloques en el orden correcto en que ocurren los procesos.</p>
            <div class="space-y-2">
                ${indicesSujetos.map(item => `
                    <div onclick="checkOrd(this, ${item.originalIndex}, ${d.length})" 
                         class="p-4 bg-white border-2 border-slate-200 hover:border-orange-400 rounded-2xl cursor-pointer transition-all font-medium shadow-sm active:scale-95 text-slate-700">
                        ${item.text}
                    </div>
                `).join('')}
            </div>`;
    }

    if (type === 'game-errores') {
        const d = getRandom(bank.errores);
        correctasActuales = 0;
        totalObjetivo = d.palabras.length;
        
        const palabrasTexto = d.t.split(" ");
        const htmlGenerado = palabrasTexto.map(p => {
            const limpia = p.toLowerCase().replace(/[.,]/g, "");
            const errorObj = d.palabras.find(e => e.incorrecta === limpia);
            
            if (errorObj) {
                return `<span onclick="fix(this, '${errorObj.correcta}')" class="cursor-pointer hover:bg-purple-800/30 px-1 rounded transition-colors text-purple-300 underline decoration-wavy decoration-purple-500 font-medium">${p}</span>`;
            } else {
                return `<span onclick="failError(this)" class="cursor-pointer hover:bg-slate-700/50 px-1 rounded transition-colors">${p}</span>`;
            }
        }).join(" ");

        ctx.innerHTML = `
            <h2 class="font-bold text-xl mb-2 ${theme.text}">Detectar Errores</h2>
            <p class="text-xs text-slate-400 mb-6 italic">Toca las palabras que tienen horrores ortográficos.</p>
            <div class="p-6 border-2 border-purple-900/50 rounded-2xl bg-slate-950/80 leading-loose text-lg font-mono text-slate-200 shadow-inner">
                ${htmlGenerado}
            </div>
            <div id="error-counter" class="mt-4 text-center text-xs font-bold text-purple-400 tracking-wider">
                ERRORES ENCONTRADOS: 0 / ${totalObjetivo}
            </div>`;
    }

    if (type === 'game-completar') {
        const d = getRandom(bank.completar);
        const textoConHueco = d.t.replace('[---]', '<span class="px-4 py-1 bg-cyan-950 border-b-2 border-cyan-400 text-cyan-300 font-bold mx-1 rounded">...</span>');
        
        ctx.innerHTML = `
            <h2 class="font-bold text-xl mb-4 ${theme.text}">Completar Texto</h2>
            <div class="p-6 bg-white/80 border border-slate-100 rounded-2xl shadow-inner mb-6 leading-relaxed text-lg text-slate-800 font-medium">
                ${textoConHueco}
            </div>
            <div class="grid grid-cols-1 gap-3">
                ${d.o.sort(() => Math.random() - 0.5).map(opt => `
                    <button onclick="checkCompletar(this, '${opt}', '${d.c}')" 
                        class="p-4 bg-white border-2 border-slate-200 rounded-2xl font-bold hover:border-cyan-500 hover:bg-cyan-50 transition-all active:scale-95 text-slate-700">
                        ${opt}
                    </button>
                `).join('')}
            </div>`;
    }

    if (type === 'game-ahorcado') {
        const d = getRandom(bank.ahorcado);
        window.palabraFull = d.p;
        window.letrasDadas = [];
        drawAhorcado(d.s);
    }

    if (type === 'game-escape') {
        const d = getRandom(bank.escape);
        ctx.innerHTML = `
            <div class="text-center p-2 bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl">
                <div class="text-5xl mb-4 animate-pulse">🔒</div>
                <h2 class="text-xl font-bold mb-4 text-green-500 font-mono tracking-tighter">TERMINAL DE SEGURIDAD</h2>
                <div class="p-4 bg-black text-green-400 font-mono rounded-xl mb-6 text-left text-sm border border-green-900/50 shadow-[inset_0_2px_10px_rgba(0,255,0,0.1)]">
                    <span class="text-green-700">user@admin:~$</span> run challenge.sh<br>
                    <span class="text-white">${d.a}</span>
                </div>
                <div class="relative mb-4">
                    <input type="text" id="esc-in" 
                        class="w-full p-4 bg-slate-800 border-2 border-slate-700 rounded-xl text-white font-mono outline-none focus:border-green-500 transition-all text-center" 
                        placeholder="INGRESE RESPUESTA...">
                </div>
                <button onclick="checkEsc('${d.r}')" 
                    class="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-black tracking-widest active:scale-95 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    EJECUTAR COMANDO
                </button>
            </div>`;
        setTimeout(() => { const el = document.getElementById('esc-in'); if(el) el.focus(); }, 500);
    }
}

// VALIDACIONES ACTUALIZADAS CON SCORE Y TOASTS NATIVER
function check(win) {
    if(win) { 
        score += 10;
        showToast("¡Excelente análisis! +10 Puntos 🎉", true); 
        setTimeout(() => showSection('menu'), 800);
    } else {
        wrongAttempts += 1;
        updateHUD();
        showToast("Inténtalo de nuevo. Analiza bien 💡", false);
    }
}

function checkOrd(el, id, total) {
    if(id === window.currentNext) {
        el.style.backgroundColor = "#dcfce7"; 
        el.style.borderColor = "#22c55e";
        el.style.color = "#16a34a";
        el.style.fontWeight = "bold";
        el.onclick = null; 
        window.currentNext++;
        
        if(window.currentNext === total) { 
            score += 15;
            showToast("¡Lógica perfecta! Secuencia ordenada +15 Puntos ✅", true);
            setTimeout(() => showSection('menu'), 1000); 
        }
    } else {
        wrongAttempts += 1;
        updateHUD();
        el.classList.add('animate-shake');
        el.style.borderColor = "#ef4444";
        showToast("Ese no es el orden lógico temporal.", false);
        setTimeout(() => { el.classList.remove('animate-shake'); el.style.borderColor = "#cbd5e1"; }, 500);
    }
}

function fix(el, correcta) {
    el.innerText = correcta;
    el.style.color = "#22c55e"; 
    el.style.fontWeight = "bold";
    el.style.textDecoration = "none";
    el.onclick = null;
    correctasActuales++;
    document.getElementById('error-counter').innerText = `ERRORES ENCONTRADOS: ${correctasActuales} / ${totalObjetivo}`;
    
    if(correctasActuales === totalObjetivo) { 
        score += 20;
        showToast("¡Texto completamente purificado! +20 Puntos ✨", true);
        setTimeout(() => showSection('menu'), 1000); 
    }
}

function failError(el) {
    wrongAttempts += 1;
    updateHUD();
    el.classList.add('text-red-500', 'animate-shake');
    showToast("Esa palabra está bien escrita 🎃", false);
    setTimeout(() => el.classList.remove('text-red-500', 'animate-shake'), 400);
}

function checkCompletar(btn, seleccion, correcta) {
    if (seleccion === correcta) {
        score += 10;
        btn.style.backgroundColor = "#dcfce7";
        btn.style.borderColor = "#22c55e";
        btn.style.color = "#16a34a";
        
        const gap = document.querySelector('#game-content span');
        if(gap) {
            gap.innerText = correcta;
            gap.className = "px-4 py-1 bg-green-100 text-green-700 font-bold mx-1 rounded border border-green-300";
        }
        showToast("¡Párrafo completado con éxito! +10 Puntos ❄️", true);
        setTimeout(() => showSection('menu'), 1000);
    } else {
        wrongAttempts += 1;
        updateHUD();
        btn.classList.add('animate-shake', 'border-red-500', 'text-red-500');
        showToast("La palabra no encaja en el contexto.", false);
        setTimeout(() => btn.classList.remove('animate-shake', 'border-red-500', 'text-red-500'), 500);
    }
}

function drawAhorcado(pista) {
    const ctx = document.getElementById('game-content');
    const display = window.palabraFull.split('').map(l => window.letrasDadas.includes(l) ? l : '_').join(' ');
    
    ctx.innerHTML = `
        <h2 class="text-rose-600 font-bold text-xl mb-2">Ahorcado</h2>
        <p class="text-xs text-slate-500 mb-4 italic">Pista: <strong>${pista}</strong></p>
        <div class="text-3xl font-mono text-center tracking-widest font-black my-6 bg-rose-50 p-4 rounded-2xl border border-rose-100 text-slate-800 shadow-inner">${display}</div>
        <div class="grid grid-cols-7 gap-1.5 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
            ${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('').map(l => {
                const yaUsada = window.letrasDadas.includes(l);
                return `<button onclick="guess('${l}', '${pista}')" 
                    ${yaUsada ? 'disabled class="p-2 bg-slate-200 text-slate-400 text-xs font-bold rounded-xl cursor-not-allowed"' : 'class="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-black rounded-xl active:scale-90 transition-all"'}>
                    ${l}
                </button>`;
            }).join('')}
        </div>`;
        
    if(!display.includes('_')) { 
        score += 25;
        showToast("¡Palabra revelada con éxito! +25 Puntos 🎯", true);
        setTimeout(() => showSection('menu'), 1000); 
    }
}

function guess(l, p) {
    window.letrasDadas.push(l);
    if (!window.palabraFull.includes(l)) {
        wrongAttempts += 1;
        updateHUD();
        showToast("Letra incorrecta 💀", false);
    }
    drawAhorcado(p);
}

function checkEsc(ans) {
    const input = document.getElementById('esc-in');
    const val = input.value.trim().toLowerCase();
    
    if(val === ans.toLowerCase()) {
        score += 40;
        input.classList.add('bg-green-900/20');
        showToast("¡ACCESO CONCEDIDO! Sistema desbloqueado +40 Puntos 🎄", true);
        setTimeout(() => showSection('menu'), 1200);
    } else {
        wrongAttempts += 1;
        updateHUD();
        input.classList.add('border-red-600', 'animate-shake');
        input.value = "";
        showToast("CÓDIGO ERRÓNEO - Intrusion detectada.", false);
        setTimeout(() => input.classList.remove('animate-shake'), 500);
    }
}

function startApp() {
    const input = document.getElementById('user-name-input');
    const name = input.value.trim();
    
    if (name === "") {
        showToast("Por favor, ingresa tu nombre.", false);
        input.focus();
        return;
    }

    window.userName = name;
    const display = document.getElementById('user-display-name');
    if (display) display.innerText = name;

    showSection('menu');
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('user-name-input');
    if (nameInput) {
        nameInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') startApp();
        });
    }
});
// 1. BANCO DE DATOS (Añadí más actividades por categoría)
const bank = {
    lectura: [
        { t: "La lectura digital requiere mayor concentración para evitar distracciones de las notificaciones.", p: "¿Qué reto menciona el texto?", o: ["Falta de luz", "Distracciones digitales", "Costo de internet"], c: 1 },
        { t: "En Nicaragua, el pinol es una bebida tradicional a base de maíz tostado y cacao.", p: "¿Cuál es la base del pinol?", o: ["Trigo", "Arroz", "Maíz tostado"], c: 2 },
        { t: "La ingeniería de sistemas optimiza procesos mediante algoritmos eficientes.", p: "¿Qué usa la ingeniería para optimizar?", o: ["Solo fuerza", "Algoritmos eficientes", "Papel y lápiz"], c: 1 }
    ],
  ordenar: [
        // Procesos de Ingeniería y Desarrollo
        ["Analizar el problema detalladamente.", "Diseñar el algoritmo de solución.", "Escribir el código en el lenguaje elegido.", "Realizar las pruebas de funcionamiento."],
        ["Crear el archivo index.html.", "Agregar estilos visuales con CSS.", "Programar la lógica con JavaScript.", "Generar el archivo ejecutable APK."],
        ["Conectar el servidor a la base de datos.", "Definir la estructura de las tablas.", "Insertar los registros de información.", "Hacer consultas SQL para obtener datos."],
        
        // Emprendimiento y Producción
        ["Seleccionar los mejores granos de maíz.", "Tostar el grano a fuego lento uniformemente.", "Moler el maíz con cacao y canela.", "Empacar el pinolillo para su venta."],
        ["Recibir el pedido del cliente por WhatsApp.", "Verificar la disponibilidad en el inventario.", "Alistar el paquete para el envío.", "Realizar la entrega en el punto acordado."],
        ["Revisar el estado físico de los AirPods.", "Limpiar el estuche y los auriculares.", "Tomar fotografías de alta calidad.", "Subir el producto a la tienda Tecnojoss."],

        // Cultura y Educación
        ["Leer detenidamente el título del libro.", "Ojear los capítulos y subtítulos.", "Analizar la idea principal de cada párrafo.", "Redactar una conclusión o resumen final."],
        ["Nacimiento de Rubén Darío en Metapa.", "Publicación de su obra maestra Azul.", "Viajes diplomáticos por América y Europa.", "Consagración como el Príncipe de las Letras."],
        ["Preparar los materiales en la mochila.", "Trasladarse hacia el campus universitario.", "Atender la clase de Ingeniería de Sistemas.", "Estudiar los apuntes para el examen final."],
        ["Identificar un problema social (ODS).", "Diseñar una solución tecnológica innovadora.", "Crear el prototipo funcional de la app.", "Presentar el proyecto ante el jurado."]
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
        { t: "En una base de datos, cada [---] debe tener un identificador único.", o: ["página", "registro", "dibujo"], c: "registro" },
        { t: "Rubén Darío es considerado el máximo representante del [---] literario.", o: ["modernismo", "realismo", "futurismo"], c: "modernismo" },
        { t: "Un buen ingeniero debe [---] su código para que otros puedan entenderlo.", o: ["borrar", "documentar", "esconder"], c: "documentar" },
        { t: "El [---] es la bebida típica nicaragüense que se sirve en jícara.", o: ["café", "pozol", "tiste"], c: "tiste" },
        { t: "La [---] es la unidad básica de almacenamiento en informática.", o: ["memoria", "pantalla", "batería"], c: "memoria" },
        { t: "Los [---] de desarrollo ayudan a los programadores a escribir código rápido.", o: ["marcos", "entornos", "libros"], c: "entornos" },
        { t: "El volcán [---] es uno de los más activos y visitados en Nicaragua.", o: ["Masaya", "Mombacho", "Cosigüina"], c: "Masaya" }
    ],
    ahorcado: [
        // Mezcla de tecnología sencilla y cultura de Nicaragua
        { p: "CHINANDEGA", s: "Ciudad conocida como la Ciudad de las Naranjas" },
        { p: "TECLADO", s: "Periférico de entrada con muchas letras y símbolos" },
        { p: "GRANADA", s: "La Gran Sultana, ciudad colonial junto al lago" },
        { p: "PANTALLA", s: "Donde ves la interfaz de esta APK" },
        { p: "GIGANTONA", s: "Personaje alto de los bailes leoneses" },
        { p: "INTERNET", s: "La red global que conecta a Nicaragua con el mundo" },
        { p: "METATE", s: "Piedra usada para moler maíz en el campo" },
        { p: "BATERIA", s: "Lo que mantiene encendido tu celular o laptop" },
        { p: "MASAYA", s: "Ciudad de las flores y cuna del folklore" },
        { p: "ARCHIVO", s: "Documento digital donde guardas tu información" },
        { p: "NARANJO", s: "Apellido del ilustre poeta Rubén Darío (Félix Rubén...)" }
    ],
    escape: [
        { a: "Acertijo: Tengo teclas pero no piano, tengo ratón pero no animal. ¿Qué soy?", r: "computadora" },
        { a: "Acertijo: Oro parece, plata no es. Quien no lo adivine, bien tonto es.", r: "platano" }
    ]
};

// Variables de control
let correctasActuales = 0;
let totalObjetivo = 0;

// 2. FUNCIÓN DE SELECCIÓN ALEATORIA
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 3. NAVEGACIÓN
function showSection(id) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game-container').classList.add('hidden');
    if (id === 'menu') document.getElementById('menu').classList.remove('hidden');
    else { document.getElementById('game-container').classList.remove('hidden'); render(id); }
}

// 4. RENDERIZADO DINÁMICO
function render(type) {
    const ctx = document.getElementById('game-content');
    
    if (type === 'game-lectura') {
        const d = getRandom(bank.lectura);
        ctx.innerHTML = `<h2 class="font-bold text-blue-600 mb-4">Comprensión</h2>
            <p class="bg-blue-50 p-3 rounded mb-4 italic">"${d.t}"</p>
            <p class="mb-4">${d.p}</p>
            ${d.o.map((opt, i) => `<button onclick="check(${i === d.c})" class="w-full p-3 mb-2 border rounded-lg hover:bg-blue-50">${opt}</button>`).join('')}`;
    }

    if (type === 'game-ordenar') {
        const d = getRandom(bank.ordenar);
        let next = 0;
        ctx.innerHTML = `<h2 class="font-bold text-green-600 mb-4">Ordenar</h2>
            <div class="space-y-2">${d.map((text, i) => `<div onclick="checkOrd(this, ${i}, ${d.length})" class="p-3 bg-slate-100 border rounded cursor-pointer">${text}</div>`).sort(() => Math.random() - 0.5).join('')}</div>`;
        window.currentNext = 0;
    }

    if (type === 'game-errores') {
        const d = getRandom(bank.errores);
        correctasActuales = 0;
        totalObjetivo = d.n;
        ctx.innerHTML = `<h2 class="font-bold text-red-600 mb-4">Errores</h2>
            <p class="mb-4">Toca las palabras incorrectas:</p>
            <div class="p-4 border rounded bg-yellow-50 leading-loose">${d.t}</div>`;
    }

    if (type === 'game-completar') {
        const d = getRandom(bank.completar);
        ctx.innerHTML = `<h2 class="font-bold text-purple-600 mb-4">Completar</h2>
            <p class="mb-6">${d.t.replace('[---]', '____')}</p>
            ${d.o.map(opt => `<button onclick="check('${opt}' === '${d.c}')" class="w-full p-3 mb-2 border rounded-lg">${opt}</button>`).join('')}`;
    }

    if (type === 'game-ahorcado') {
        const d = getRandom(bank.ahorcado);
        window.palabraFull = d.p;
        window.letrasDadas = [];
        drawAhorcado(d.s);
    }

    if (type === 'game-escape') {
        const d = getRandom(bank.escape);
        ctx.innerHTML = `<h2 class="font-bold text-slate-800 mb-4">Escape Room</h2>
            <div class="p-4 bg-slate-900 text-green-400 font-mono rounded mb-4">${d.a}</div>
            <input type="text" id="esc-in" class="w-full p-3 border rounded mb-4" placeholder="Respuesta...">
            <button onclick="checkEsc('${d.r}')" class="w-full bg-slate-900 text-white py-3 rounded">DESBLOQUEAR</button>`;
    }
}

// 5. LÓGICAS DE VALIDACIÓN
function check(win) {
    if(win) { alert("¡Correcto! 🎉"); showSection('menu'); }
    else alert("Sigue intentando 💡");
}

function checkOrd(el, id, total) {
    if(id === window.currentNext) {
        el.className = "p-3 bg-green-200 border border-green-500 rounded";
        window.currentNext++;
        if(window.currentNext === total) { alert("¡Excelente orden! ✅"); showSection('menu'); }
    } else { alert("Ese no es el orden correcto"); }
}

function fix(el) {
    el.innerText = el.getAttribute('data-c');
    el.className = "text-green-600 font-bold";
    el.onclick = null;
    correctasActuales++;
    if(correctasActuales === totalObjetivo) { alert("¡Todo corregido! ✨"); showSection('menu'); }
}

function checkEsc(ans) {
    const val = document.getElementById('esc-in').value.trim().toLowerCase();
    if(val === ans) { alert("¡Escapaste! 🏆"); showSection('menu'); }
    else alert("Código incorrecto 🔒");
}

function drawAhorcado(pista) {
    const ctx = document.getElementById('game-content');
    const display = window.palabraFull.split('').map(l => window.letrasDadas.includes(l) ? l : '_').join(' ');
    ctx.innerHTML = `<h2 class="text-orange-600 font-bold mb-2">Ahorcado</h2>
        <p class="text-xs mb-4">Pista: ${pista}</p>
        <div class="text-2xl font-mono text-center mb-6">${display}</div>
        <div class="grid grid-cols-7 gap-1">${"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('').map(l => `<button onclick="guess('${l}', '${pista}')" class="p-2 bg-slate-100 text-xs rounded">${l}</button>`).join('')}</div>`;
    if(!display.includes('_')) { alert("¡Logrado! 🎯"); showSection('menu'); }
}

function guess(l, p) {
    window.letrasDadas.push(l);
    drawAhorcado(p);
}

//menu
function startApp() {
    const input = document.getElementById('user-name-input');
    const name = input.value.trim();
    
    // Verificamos si el input tiene texto
    if (name === "") {
        alert("¡Hola! Por favor escribe tu nombre para empezar.");
        input.focus();
        return; // Detenemos la ejecución aquí si está vacío
    }

    // Buscamos el lugar donde se mostrará el nombre
    const display = document.getElementById('user-display-name');

    // IMPORTANTE: Solo intentamos poner el nombre si el elemento existe
    if (display) {
        display.innerText = name;
    }

    // Cambiamos de sección
    showSection('menu');
}
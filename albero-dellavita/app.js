// Configurazione
const SESSION_DURATION = 10 * 60; // 10 minuti in secondi
let timeLeft = SESSION_DURATION;
let timerInterval = null;
let isStarted = false;

const treeStages = ["🌱", "🌿", "🌳", "🌲", "✨"];
const circle = document.getElementById('progress-bar');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

// --- LOGICA DI SORVEGLIANZA ---
function killTree(reason) {
    if (!isStarted) return;
    
    clearInterval(timerInterval);
    isStarted = false;
    document.getElementById('tree-display').innerText = "🍂";
    document.getElementById('tree-display').style.transform = "translateY(20px) rotate(90deg)";
    
    alert(`L'ALBERO È MORTO! 💀\nMotivo: ${reason}`);
    resetGame();
}

// Rileva cambio scheda
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && isStarted) {
        killTree("Hai cambiato scheda!");
    }
});

// Rileva uscita dal browser (alt-tab, click fuori)
window.addEventListener("blur", () => {
    if (isStarted) killTree("Hai aperto un'altra applicazione!");
});

// --- LOGICA DEL TIMER ---
function updateProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

function startTimer() {
    if (isStarted) return;
    isStarted = true;
    document.getElementById('start-btn').style.display = 'none';
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        // Aggiorna UI
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('time-left').innerText = 
            `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        const percent = ((SESSION_DURATION - timeLeft) / SESSION_DURATION) * 100;
        updateProgress(percent);

        // Evoluzione albero
        if (timeLeft % 120 === 0) { // Cambia ogni 2 minuti per test
             const stageIndex = Math.floor(percent / 25);
             document.getElementById('tree-display').innerText = treeStages[stageIndex] || "🌲";
        }

        if (timeLeft <= 0) {
            completeSession();
        }
    }, 1000);
}

function completeSession() {
    clearInterval(timerInterval);
    isStarted = false;
    saveToForest();
    alert("Complimenti! Hai fatto crescere un albero! 🌳");
    resetGame();
}

function resetGame() {
    timeLeft = SESSION_DURATION;
    isStarted = false;
    document.getElementById('time-left').innerText = "10:00";
    document.getElementById('start-btn').style.display = 'inline-block';
    updateProgress(0);
    renderForest();
}

// --- PERSISTENZA (LocalStorage) ---
function saveToForest() {
    const today = new Date().toLocaleDateString();
    let history = JSON.parse(localStorage.getItem('forestHistory')) || {};
    history[today] = (history[today] || 0) + 1;
    localStorage.setItem('forestHistory', JSON.stringify(history));
}

function renderForest() {
    const today = new Date().toLocaleDateString();
    let history = JSON.parse(localStorage.getItem('forestHistory')) || {};
    const count = history[today] || 0;
    document.getElementById('forest-display').innerText = "🌳".repeat(count);
}

document.getElementById('start-btn').addEventListener('click', startTimer);
renderForest();
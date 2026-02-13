# 🌳 Albero della Vita | Extreme Focus Web-App

**Albero della Vita** non è la solita applicazione di studio. È un patto di ferro tra te e la tua produttività. Qui, la crescita della natura è legata indissolubilmente alla tua capacità di mantenere il focus.

---

## 📖 Il Concetto

L'obiettivo è semplice: far crescere il tuo albero sacro. Ma la natura è fragile e non tollera distrazioni. 

* **Studio (10 min):** Per ogni 10 minuti di focus ininterrotto, l'albero cresce di uno stadio.
* **Tradimento (Istantaneo):** Se provi a cambiare scheda, aprire un'altra app o ridurre a icona la finestra, l'albero **muore all'istante**.

---

## 🛠 Meccaniche di Gioco

| Azione | Effetto | Dettagli |
| :--- | :--- | :--- |
| **Focus Attivo** | 🌱 Crescita | Ogni 10 min. il timer sblocca un nuovo stadio visivo. |
| **Cambio Tab** | 💀 Morte | La `Page Visibility API` rileva l'abbandono e resetta tutto. |
| **Uscita Browser** | 🍂 Morte | Se il browser perde il focus (`onblur`), l'albero appassisce. |

---

## 🚀 Funzionalità Principali

* **Monitoraggio Spietato:** Utilizza algoritmi di rilevamento del focus in tempo reale. Non puoi scappare.
* **Evoluzione Visiva:** Guarda il tuo seme trasformarsi in un germoglio, poi in una pianta e infine in un albero maestoso.
* **Interfaccia Zen:** Design minimalista per ridurre al minimo le distrazioni interne.
* **Statistiche di Fallimento:** Un contatore che ti ricorda quanti alberi hai sacrificato sull'altare della procrastinazione.

---

## 💻 Requisiti Tecnici

La web-app sfrutta le moderne API del browser per garantirti l'isolamento totale:
* **Page Visibility API:** Per capire quando la scheda non è più visibile.
* **Window Focus/Blur:** Per rilevare quando interagisci con applicazioni esterne al browser.

---

## ⚠️ Attenzione

> "L'albero della vita richiede radici profonde nella disciplina. Se non sei pronto a restare sulla pagina, non iniziare nemmeno a piantare."

---

## 🛠️ Come Installarlo (Sviluppo)

1. **Clona la repo**
   ```bash
   git clone [https://github.com/tuo-username/albero-della-vita.git](https://github.com/tuo-username/albero-della-vita.git)

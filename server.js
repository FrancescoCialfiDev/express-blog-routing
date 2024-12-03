"use strict"; // Usiamo use strict poichè lavoriamo con file commonJS, quindi non impostato come valore di default.
console.clear(); // Effettuiamo un clear della console da eventuali errori e righe di codice iniziali

// STEP 1 ----Creiamo-progetto-Node----:
// - Inizializziamo un progetto node con il comando npm init -y ( shortcut per evitare la prassi di configurazione del progetto ):
// - Utilizziamo un alias script nel file package.json e applichiamo il controllo --watch per il live refresh della console.
// - Installiamo il modulo express tramite la console con il comando npm install express.
// - Creo un file .gitignore per omettere l'esportazione del contenuto dei moduli express.

///////////////////////////////////////////////

// STEP 2 ----Creazione-del-server-con-express----:

// - Creiamo una costante e importiamo il modulo express.
const express = require("express");
// - Creiamo una costante app e assegniamo il valore dell'applicazione server.
const app = express();
// - Creiamo una costante e la inizializziamo al valore della porta:
const PORT = 3000;
// - Importiamo l'array di oggetti dal file db.js
const objectFoods = require("./db.js")


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public" + "/index.html",)
})

// 
app.get("/foods", (req, res) => {
    const risposta = {
        conteggio: objectFoods.length,
        foods: objectFoods
    }
    res.json(risposta)
})


// - In caso non venga trovato nessun percorso viene inviato un errore 404
app.get("*", (req, res) => {
    res.status(404).send("Non è stato possibile trovare la pagina")

})



app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
})

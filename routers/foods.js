// STEP 1 
// - Importiamo nuovamente il modulo express sul nuovo file js.
const express = require("express");
// - Utilizziamo il metodo express per gestire le rotte in modo modulare.
const foodsRouter = express.Router();

// READ:
foodsRouter.get('/', (req, res) => res.send('Lista intera alimenti')); // Richiesta get generica 
foodsRouter.get('/:id', (req, res) => res.send(`Lista singolo alimento`)); // Richiesta get specifica

// CREATE:
foodsRouter.post('/', (req, res) => res.send('Creazione nuovo alimento')); // Creazione di un nuovo alimento

// UPDATE:
foodsRouter.put('/:id', (req, res) => res.send(`Aggiornamento alimento`)); // Aggiornamento completo di un alimento

// PATCH:
foodsRouter.patch('/:id', (req, res) => res.send(`Aggiornamento parziale alimento`)); // Aggiornamento parziale di un alimento

// DELETE:
foodsRouter.delete('/:id', (req, res) => res.send(`Eliminazione alimento`)); // Eliminazione di un alimento

// Esportazione del modulo.
module.exports = foodsRouter;
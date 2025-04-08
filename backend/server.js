const express = require("express"); 
const cors = require("cors"); 
const db = require("./db"); 

const app = express(); 
app.use(cors()); 
app.use(express.json()); 
// Récupérer les utilisateurs 
app.get("/", (req, res) => { 
db.query("SELECT * FROM users", (err, results) => { 
if (err) { 
res.status(500).send("Erreur avec la base de données"); 
return; 
} 
res.json(results); 
}); 
}); 
// Ajouter un utilisateur 
app.post("/api/users", (req, res) => { 
const { name, email } = req.body; 
db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], 
(err) => { 
if (err) { 
res.status(500).send("Erreur lors de l'insertion"); 
return; 
} 
res.send({ message: "Utilisateur ajouté !" }); 
}); 
}); 
//update
app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
        return;
      }
      res.json({ message: "Utilisateur modifié avec succès" });
    });
  });
//delete
  app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
        return;
      }
      res.json({ message: "Utilisateur supprimé avec succès" });
    });
  });
  
  app.get('/api/test', (req, res) => {
    res.status(200).send('OK');
  });
const PORT = process.env.PORT || 5000; 
module.exports = app;
app.listen(PORT, () => { 
  console.log(`Backend running on port ${PORT}`); 
  }); 

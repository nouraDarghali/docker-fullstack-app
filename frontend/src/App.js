/*import React, { useEffect, useState } from "react"; 
function App() { 
const [users, setUsers] = useState([]); 
useEffect(() => { 
fetch("http://localhost:5000/") 
.then((res) => res.json()) 
.then((data) => setUsers(data)) 
.catch((err) => console.error(err)); 
}, []); 
return ( 
<div> 
<h1>Utilisateurs</h1> 
<ul> 
{users.map((user) => ( 
<li key={user.id}>{user.name} - {user.email}</li> 
))} 
</ul> 
</div> 
); 
} 
export default App;
*/
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/")
      .then((res) => setUsers(res.data))
      .catch((err) => alert("Erreur de chargement"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = () => {
    if (editId === null) {
      // Ajouter un utilisateur
      axios.post("http://localhost:5000/api/users", form)
        .then(() => {
          alert("Ajouté !");
          setForm({ name: "", email: "" });
          fetchUsers();
        })
        .catch(() => alert("Erreur ajout"));
    } else {
      // Modifier
      axios.put(`http://localhost:5000/api/users/${editId}`, form)
        .then(() => {
          alert("Modifié !");
          setEditId(null);
          setForm({ name: "", email: "" });
          fetchUsers();
        })
        .catch(() => alert("Erreur modif"));
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      axios.delete(`http://localhost:5000/api/users/${id}`)
        .then(() => {
          alert("Supprimé !");
          fetchUsers();
        })
        .catch(() => alert("Erreur suppression"));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Utilisateurs</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Nom"
          className="form-control mb-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          {editId === null ? "Ajouter" : "Modifier"}
        </button>
      </div>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            <div>{user.name} - {user.email}</div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user)}>Modifier</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


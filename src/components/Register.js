import React, { useState } from "react";

function Register({ onRegister }) {
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    apellido: "",
    usuario: "",
    contraseña: "",
    rol: "cliente",
  });

  const handleRegister = () => {
    alert("Registro exitoso");
    onRegister({ ...form });
  };

  return (
    <div className="card">
      <h2>Registro</h2>
      <input placeholder="ID" onChange={e => setForm({ ...form, id: e.target.value })} />
      <input placeholder="Nombre" onChange={e => setForm({ ...form, nombre: e.target.value })} />
      <input placeholder="Apellido" onChange={e => setForm({ ...form, apellido: e.target.value })} />
      <input placeholder="Usuario" onChange={e => setForm({ ...form, usuario: e.target.value })} />
      <input type="password" placeholder="Contraseña" onChange={e => setForm({ ...form, contraseña: e.target.value })} />
      <select onChange={e => setForm({ ...form, rol: e.target.value })}>
        <option value="cliente">Cliente</option>
        <option value="encargado">Encargado</option>
      </select>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Register;

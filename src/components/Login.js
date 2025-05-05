import React, { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulación
    if (usuario === "cliente") onLogin({ nombre: "Cliente", rol: "cliente" });
    else if (usuario === "encargado") onLogin({ nombre: "Encargado", rol: "encargado" });
    else alert("Usuario no reconocido");
  };

  return (
    <div className="card">
      <h2>Iniciar sesión</h2>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;


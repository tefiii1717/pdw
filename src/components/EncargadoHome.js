import React from "react";
import Inventario from "./Inventario";
import PerfilEncargado from "./PerfilEncargado";

function EncargadoHome({ user }) {
  return (
    <div>
      <h2>Bienvenido, {user.nombre}</h2>
      <PerfilEncargado user={user} />
      <Inventario />
    </div>
  );
}

export default EncargadoHome;

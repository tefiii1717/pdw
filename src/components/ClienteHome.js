import React from "react";
import Carrito from "./Carrito";
import PerfilCliente from "./PerfilCliente";
import SeguimientoPedido from "./SeguimientoPedido";

function ClienteHome({ user }) {
  return (
    <div>
      <h2>Bienvenido, {user.nombre}</h2>
      <PerfilCliente user={user} />
      <Carrito />
      <SeguimientoPedido />
    </div>
  );
}

export default ClienteHome;

function PerfilCliente({ user }) {
    return (
      <div className="card">
        <h3>Perfil</h3>
        <p>ID: {user.id || "001"}</p>
        <p>Nombre: {user.nombre}</p>
        <p>Apellido: {user.apellido || "Pérez"}</p>
        <p>Método de pago: <em>No registrado</em></p>
      </div>
    );
  }
  
  export default PerfilCliente;
  
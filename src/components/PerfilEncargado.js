function PerfilEncargado({ user }) {
    return (
      <div className="card">
        <h3>Perfil Encargado</h3>
        <p>ID: {user.id || "002"}</p>
        <p>Nombre: {user.nombre}</p>
        <p>Apellido: {user.apellido || "Gómez"}</p>
      </div>
    );
  }
  
  export default PerfilEncargado;
  
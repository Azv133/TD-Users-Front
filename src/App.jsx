import { useState } from "react";
import { getUsers } from "./helpers/getUsers";

function App() {

  const [users, setUsers] = useState([]);

  const getALLUsers = async () => {
    const newUsers = await getUsers();
    setUsers(newUsers);
  };

  const deleteUsers = () => {
    setUsers([])
  };

  return (
    <>
      <div className="container">
        <h1>Datos de Usuarios</h1>
        <div className="buttons">
          <button className="add" onClick={getALLUsers}>Cargar Datos</button>
          <button className="delete" onClick={deleteUsers}>Limpiar Datos</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha de nacimiento</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(({UserID, UserName, Email, DateOfBirth}) => {
                return(
                  <tr key={UserID}>
                    <td>{UserID}</td>
                    <td>{UserName}</td>
                    <td>{Email}</td>
                    <td>{DateOfBirth}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App

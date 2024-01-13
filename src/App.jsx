import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "./helpers/getUsers";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const parseDate = (date) => {
  const fechaParseada = new Date(date);

  const year = fechaParseada.getUTCFullYear();
  const month = fechaParseada.getUTCMonth() + 1;
  const day = fechaParseada.getUTCDate();
  
  const fechaFormateada = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
   
  return fechaFormateada
}

function App() {

  const delUser = async(userId) => {
      let resp = await deleteUser(userId);
      alert(resp.message);
      getALLUsers();
  }
  
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);
  
  const getALLUsers = async () => {
    const newUsers = await getUsers();
    setUsers(newUsers);
  };
  
  const deleteUsers = () => {
    setUsers([])
  };
  
  const actualizar = (nombre, correo, fecha, userId) => {
    navigate(`/actualizar`, {state: {nombre, correo, fecha, userId}});
  }

  return (
    <>
      <div className="container">
        <h1>Datos de Usuarios</h1>
        <div className="buttons">
          <button className="add" onClick={getALLUsers}>Cargar Datos</button>
          <button className="delete" onClick={deleteUsers}>Limpiar Datos</button>
          <Link to="/insert">
            <button className="insert">Agregar Usuario</button>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha de nacimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(({UserId, UserName, Email, DateOfBirth}) => {
                return(
                  <tr key={UserId}>
                    <td>{UserId}</td>
                    <td>{UserName}</td>
                    <td>{Email}</td>
                    <td>{parseDate(DateOfBirth)}</td>
                    <td className="us-buttons">
                      <button className="up" onClick={() => actualizar(UserName, Email, DateOfBirth, UserId)}>
                        <AiTwotoneEdit />
                      </button>
                      <button className="del" onClick={() => delUser(UserId)}>
                        <AiFillDelete />
                      </button>
                    </td>
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

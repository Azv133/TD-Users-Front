import { Link, useNavigate } from "react-router-dom";
import { addUser } from "./helpers/getUsers";





export const Insert = () => {

    const navigate = useNavigate();

    const insertUser = async() => {
        let UserName = document.getElementById('name').value;
        let Email = document.getElementById('email').value;
        let DateOfBirth = document.getElementById('date').value;
        
        const data = {
            UserName, 
            Email, 
            DateOfBirth
        }
    
        let resp = await addUser(data);
        alert(resp.message);
        navigate('/');
    }

  return (
    <>
        <div className="container">
            <h1>Agregar un usuario</h1>
            
            <div className="form">

                <div className="form-block">
                    <label>Nombre</label>
                    <input type="text" id="name" />
                </div>

                <div className="form-block">
                    <label>Correo</label>
                    <input type="text" id="email" />
                </div>

                <div className="form-block">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" id="date" />
                </div>


                <div className="buttons">
                    <Link to={'/'}>
                        <button className="delete" >Volver</button>
                    </Link>
                    <button className="insert"  onClick={insertUser}>Agregar</button>
                </div>

            </div>
        </div>
    </>
  )
}

import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "./helpers/getUsers";
import { useState } from "react";



const parseDate = (date) => {
    const fechaParseada = new Date(date);

    const year = fechaParseada.getUTCFullYear();
    const month = fechaParseada.getUTCMonth() + 1;
    const day = fechaParseada.getUTCDate();
    
    const fechaFormateada = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
     
    return fechaFormateada
}

export const Update = () => {

    const navigate = useNavigate();

    const upUser = async() => {
        let userId = document.getElementById('userId').value;
        let UserName = document.getElementById('name').value;
        let Email = document.getElementById('email').value;
        let DateOfBirth = document.getElementById('date').value;
        
        const data = {
            UserName, 
            Email, 
            DateOfBirth
        }
    
        let resp = await updateUser(userId, data);
        alert(resp.message);
        navigate('/');
    }
    

    const { state } = useLocation();
    const { nombre, correo, fecha, userId } = state;

    const fechaP = parseDate(fecha);

    const [name, setName] = useState(nombre);
    const [email, setEmail] = useState(correo);
    const [date, setDate] = useState(fechaP);

    const onNameChange = ({target}) => {
        setName(target.value)
    }
    const onEmailChange = ({target}) => {
        setEmail(target.value)
    }
    const onDateChange = ({target}) => {
        setDate(target.value)
    }
  return (
    <>
        <div className="container">
            <h1>Agregar un usuario</h1>
            
            <div className="form">

                <div className="form-block">
                    <label>Nombre</label>
                    <input type="text" id="name" value={name} onChange={onNameChange}/>
                </div>

                <div className="form-block">
                    <label>Correo</label>
                    <input type="text" id="email" value={email} onChange={onEmailChange}/>
                </div>

                <div className="form-block">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" id="date" value={date} onChange={onDateChange}/>
                </div>


                <div className="buttons">
                    <Link to={'/'}>
                        <button className="delete" >Volver</button>
                    </Link>
                    <button className="insert"  onClick={upUser}>Actualizar</button>
                </div>

                <input type="text" value={userId} id="userId" hidden readOnly/>

            </div>
        </div>
    </>
  )
}

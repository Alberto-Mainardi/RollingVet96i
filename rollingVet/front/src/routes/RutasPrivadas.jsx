import {useContext} from 'react';
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { ContextoUsuario } from '../components/ContextoUsuario';

const RutasPrivadas = () => {
//accediendo al contexto
const {user} = useContext(ContextoUsuario)
    if (user.admin) {
        return <Outlet/>
    } else {
        console.log("problemón");
        return <Navigate to="/" replace/>
    }
}

export default RutasPrivadas
import {useContext} from 'react';
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { ContextoUsuario } from '../components/ContextoUsuario';



export const RutasAdmin = () => {
//accediendo al contexto
const {user} = useContext(ContextoUsuario)
    if (user.admin) {
        return <Outlet/>
    } else {
        
        return <Navigate to="/" replace/>
    }
}

export const RutasPaciente = () => {
    const {user} = useContext(ContextoUsuario);
    if (user.estado) {
        return <Outlet/>
    } else {
        
        return <Navigate to="/" replace/>
    }
}

export const RutasInvitado = () => {
    const {user} = useContext(ContextoUsuario);    
    console.log(user);
    
    if (!user.estado) {
        return <Outlet/>
    } else {
        
        return <Navigate to="/" replace/>
    }
}
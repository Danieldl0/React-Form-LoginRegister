import {useState,useEffect} from 'react';
import { UsuarioItem } from '../../Components/UsuarioItem';
import { getUser } from "../../Services/api/usersService";

export function PageUser(){

    const [usuario, setUsuario] = useState([]);


    async function carregarUsuario(){

        try {
            setUsuario(await getUser());
            let dados = await  getUser();
            console.log(dados);
        } catch (error) {
            console.log("erro");
        }

    }

    useEffect(()=>{
        carregarUsuario();
    },[])

    

    return (
        <div>
            <h2>Usuario</h2>
            
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>sobrenome</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario.map(usuario =>{
                        return(
                            <UsuarioItem 
                            key = {usuario.id}
                            id_user = {usuario.id}  
                            email_user = {usuario.email}
                            first_name_user = {usuario.first_name}
                            last_name_user = {usuario.last_name}
                        />
                        )
                    })}
                </tbody>
            </table>
        </div>

    );
}
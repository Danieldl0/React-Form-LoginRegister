import { useForm } from "react-hook-form";
import { FormRegister } from "../../Components/FormRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import "./style.css";


    const schema = yup.object({
        email: yup.string().required("Informe seu Email"),
        senha: yup.string().password()
        .min(0)
        .minSymbols(0)
        .minLowercase(0)
        .minUppercase(0)
        .minNumbers(0)
        .required("Informe sua senha")
    })

function PageLogin(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });


    function sendData(data){
        console.log(data);
    }

    return (

        <div className="loginregister-login-container">
            <h2>Login</h2>
            <form className="loginregister-login-form" onSubmit={handleSubmit(sendData)}>
                <FormRegister
                    label = "Email"
                    type = "email"
                    register = {register("email")}
                    placeholder = "Email"
                    erro = {errors.email?.message}
            
                />
                <FormRegister
                    label = "Senha"
                    type = "password"
                    register = {register("senha")}
                    placeholder = "Senha"
                    erro = {errors.senha?.message}
                />
                <button className="btn btn-primary loginregister-btn" >Entrar</button>
                <div className="loginregister-btn-newregister">  
                    <Link to={"/Cadastro"}> + Criar conta </Link>
                </div>
            </form>
        </div>

        
    );
}


export {PageLogin};
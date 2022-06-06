import { useForm } from "react-hook-form";
import { FormRegister } from "../../Components/FormRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import "./style.css";
import { postLogin } from "../../Services/api/registerService";
import { ButtonNav } from "../../Components/ButtonNav";


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

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });


    async function sendData(data){
        try {
            console.log(await postLogin(data))
            alert("logado com sucesso");
            console.log(data);
            navigate("/user");

        } catch (e) {
            console.log("erro")
            console.log(e)
        }
    }

    return (

        <div className="loginregister-login-container ">
            <h2>Login</h2>
            <form className="loginregister-login-form " onSubmit={handleSubmit(sendData)}>
                <FormRegister
                    label = "Email"
                    type = "email"
                    register = {register("email")}
                    placeholder = "email@exemplo.com"
                    erro = {errors.email?.message}
            
                />
                <FormRegister
                    label = "Senha"
                    type = "password"
                    register = {register("senha")}
                    placeholder = "******"
                    erro = {errors.senha?.message}
                />
                <button className="btn btn-primary loginregister-btn" >Entrar</button>
            </form>
            <hr />
            <ButtonNav
                link="/cadastro"
                link_name = "+ Criar Conta"
                msg = "Não possui uma conta?"
            />
        </div>

    );
}


export {PageLogin};
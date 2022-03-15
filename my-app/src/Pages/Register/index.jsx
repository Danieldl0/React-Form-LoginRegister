import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import { FormRegister } from "../../Components/FormRegister/index";
import { Link } from 'react-router-dom';
import "./style.css";
import axios from "axios";

YupPassword(yup);

const schema = yup.object({
    nome: yup.string().required("Campo obrigatorio"),
    email: yup.string().email().required("Informe um email valido"),
    senha: yup.string().password()
        .required(`
            Informe uma senha
            `)
        .min(6, "A senha deve conter entre 6 a 12 digitos")
        .minSymbols(0)
        .minNumbers(0)
        .minUppercase(0)
        .minLowercase(0),
    confirmar_senha: yup.string()
        .oneOf([yup.ref("senha"), null], "As senhas devem ser iguais").required("As senhas devem ser iguais")
})



function PageRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    function sendData(data) {
        try {
            axios.post("http://127.0.0.1:8000/users/", {
                fullName: data.nome,
                email: data.email,
                password: data.senha,
            })
            alert("cadastro realizado com sucesso")
        } catch (error) {
            alert("erro ao cadastrar")
            console.log(error.message)
        }   

    }



    return (
        <div className="loginregister-login-container ">
            <h2 >Cadastro</h2>

            <form className="loginregister-login-form " onSubmit={handleSubmit(sendData)}>
                <FormRegister
                    register={register("nome")}
                    type="text"
                    placeholder="Nome completo"
                    erro={errors.nome?.message}
                />

                <FormRegister
                    register={register("email")}
                    type="email"
                    placeholder="Email"
                    erro={errors.email?.message}
                />

                <FormRegister
                    register={register("senha")}
                    type="password"
                    length={12}
                    placeholder="Senha"
                    erro={errors.senha?.message}
                />

                <FormRegister
                    register={register("confirmar_senha")}
                    type="password"
                    length={12}
                    placeholder="Confirmar Senha"
                    erro={errors.confirmar_senha?.message}
                />

                <button className="btn btn-primary loginregister-btn">Cadastrar</button>

            </form>
            <div className="loginregister-backlogin">
                <hr />
                <p>Já possui conta?</p>
                <Link to={"/"}> <button className="btn btn-outline-primary btn-sm">Entrar</button> </Link>
            </div>
        </div>
    );


}
export { PageRegister };
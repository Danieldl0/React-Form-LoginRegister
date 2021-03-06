import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import { FormRegister } from "../../Components/FormRegister/index";
import { useNavigate } from 'react-router-dom';
import { postUser } from "../../Services/api/registerService"
import { ButtonNav } from "../../Components/ButtonNav";

YupPassword(yup);

const schema = yup.object({
    nome: yup.string().required("Campo obrigatorio"),
    sobrenome: yup.string().required("Campo obrigatorio"),
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

    const navigate = useNavigate()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    async function sendData(data) {
        try {
            await postUser(data)
            alert("cadastro realizado com sucesso")
            navigate("/login")
        
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
                    placeholder="Primeiro nome"
                    erro={errors.nome?.message}
                />

                <FormRegister
                    register = {register("sobrenome")}
                    type = "text"
                    placeholder = "Sobrenome"
                    erro = {errors.sobrenome?.message}
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
            <hr />
            <ButtonNav
                link = "/login"
                link_name = "Entrar"
                msg = "J?? possui conta?"
            />
        </div>
    );


}
export { PageRegister };

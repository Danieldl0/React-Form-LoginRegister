import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import { FormRegister } from "../../Components/FormRegister/index";

YupPassword(yup);

const schema = yup.object({
        nome: yup.string().required("Campo obrigatorio"),
        email: yup.string().email().required("Informe um email valido"),
        senha: yup.string().password()
        .required(`
            a senha deve conter entre 6 a 12 digitos
            `)
        .min(6)
        .max(12, "maximo 12 digitos")
        .minSymbols(0, "minimo 1 simbolo")
        .minNumbers(0)
        .minUppercase(0)
        .minLowercase(0),
        confirmar_senha: yup.string()
        .oneOf([yup.ref("senha"), null]).required("As senhas devem ser iguais")
    })

    

function PageRegister(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    

    function sendData(dados){
        console.log(dados);
    }

    return(
        <div> 
            <h2>Cadastro</h2>

            <form onSubmit={handleSubmit(sendData)}>
                <FormRegister
                    label = "nome"
                    register = {register("nome")}
                    type = "text"
                    erro = {errors.nome?.message}
                />

                <FormRegister
                    label = "email"
                    register = {register("email")}
                    type = "email"
                    erro = {errors.email?.message}
                />
                
                <FormRegister
                    label = "senha"
                    register = {register("senha")}
                    type = "password"
                    erro = {errors.senha?.message}
                />

                <FormRegister
                    label = "confirmar senha"
                    register = {register("confirmar_senha")}
                    type = "password"
                    erro = {errors.confirmar_senha?.message}
                />

                <button>Click</button>
            </form>  
        </div>
    ); 


}
export {PageRegister};
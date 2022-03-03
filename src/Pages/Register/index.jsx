import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import { ref } from "yup";

YupPassword(yup);

const schema = yup.object({
        nome: yup.string().required("campo obrigatorio"),
        email: yup.string().email().required(),
        senha: yup.string().password()
        .min(6, "minimo 2 digitos")
        .max(12, "maximo 12 digitos")
        .minSymbols(0, "minimo 1 simbolo")
        .minNumbers(0)
        .minUppercase(0)
        .minLowercase(0)
        .required(),
        confirm_senha: yup.string()
        .oneOf([yup.ref("senha"),null,"Devem ser iguais"])
        .required()
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
                <div>
                    <label >Nome</label>
                    <input {...register("nome")} maxLength="50" type="text" />
                    <p>{errors.nome?.message}</p>
                </div>
                <div>
                    <label >Email</label>
                    <input {...register("email")} maxLength="50" type="email" />
                </div>
                <div>
                    <label >Senha</label>
                    <input {...register("senha")} maxLength="12" type="text" />
                    <p>{[errors.senha?.message]}</p>
                </div>
                <div>
                    <label >Confirmar Senha</label>
                    <input {...register("confirm_senha")} maxLength="12" type="password" />
                </div>

                <button>Click</button>
            </form>  
        </div>
    ); 


}
export {PageRegister};
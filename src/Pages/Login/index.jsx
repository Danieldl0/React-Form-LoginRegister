import { useForm } from "react-hook-form";
import { FormRegister } from "../../Components/FormRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"


    const schema = yup.object({
        email: yup.string().required("Informe seu Email"),
        senha: yup.string().required("Senha Inválida").password()
    })

function PageLogin(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });


    function sendData(data){
        console.log(data);
    }

    return (

        <form onSubmit={handleSubmit(sendData)}>

            <FormRegister
                label = "Email"
                type = "email"
                register = {register("email")}
                erro = {errors.email?.message}
            />

            <FormRegister
                label = "Senha"
                type = "password"
                register = {register("senha")}
                erro = {errors.senha?.message}
            />

            <button>Click</button>

        </form>

        
    );
}


export {PageLogin};
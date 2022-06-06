import { api } from "./api.js";

export async function postUser(data){
    await api.post("/register/",{
        first_name: data.nome,
        last_name: data.sobrenome,
        email: data.email,
        password: data.senha,
    })
}


export async function postLogin(data){
    return api.post("/login/",{
        email: data.email,
        password: data.senha
    })
}
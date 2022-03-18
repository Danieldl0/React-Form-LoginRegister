import { api } from "./api.js";

export async function postUser(data){
    await api.post("/register/",{
        full_name: data.nome,
        email: data.email,
        password: data.senha,
    })
}


export async function postLogin(data){
    await api.post("/login/",{
        email: data.email,
        password: data.senha
    })
}
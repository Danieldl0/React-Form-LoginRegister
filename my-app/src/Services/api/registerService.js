import { api } from "./api.js";

export async function postUser(data){
    await api.post("/register/",{
        full_name: data.nome,
        email: data.email,
        password: data.senha,
    })
}
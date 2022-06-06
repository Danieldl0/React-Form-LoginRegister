import { api } from  "./api.js";

export async function getUser(){
    const resp = await api.get("/users/");
    return resp.data;
}
import { ButtonNav } from "../../Components/ButtonNav";

export function HomePage() {
    return (
        <>
            <h2>Home page</h2>
            <ButtonNav
                link="/login"
                link_name="Entrar"
                msg="Já possui conta?"
            />

            <ButtonNav
                link="/cadastro"
                link_name="+ Criar Conta"
                msg="Não possui uma conta?"
            />

        </>
    );
}
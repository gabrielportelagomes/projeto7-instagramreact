import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" ususario="catanacomics" nome="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}
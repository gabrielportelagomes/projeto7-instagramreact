function InformacoesUsuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} />
      <div class="texto">
        <strong>{props.ususario}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}

export default function Usuario() {
  return (
        <InformacoesUsuario imagem="assets/img/catanacomics.svg" ususario="catanacomics" nome="Catana"/>
    );
}
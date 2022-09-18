function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.fotoUsuario} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemLike} />
          <div class="texto">
            Curtido por <strong>{props.usuarioLike}</strong> e <strong>outras {props.curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {fotoUsuario: "assets/img/meowed.svg", usuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", imagemLike: "assets/img/respondeai.svg", usuarioLike: "respondeai", curtidas: "101.523"},
    {fotoUsuario: "assets/img/barked.svg", usuario: "barked", imagemPost: "assets/img/dog.svg", imagemLike: "assets/img/adorable_animals.svg", usuarioLike: "adorable_animals", curtidas: "99.159"}
  ]
  return (
    <div class="posts">
      {posts.map((p) => <Post fotoUsuario={p.fotoUsuario} usuario={p.usuario} imagemPost={p.imagemPost} imagemLike={p.imagemLike} usuarioLike={p.usuarioLike} curtidas={p.curtidas}/>)}
    </div>
  );
}
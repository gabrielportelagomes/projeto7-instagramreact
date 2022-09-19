import React from "react"

function Post(props) {
  const [salvar, setSalvar] = React.useState(false)
  const [curtir, setCurtir] = React.useState(false)
  let [curtidas, setCurtidas] = React.useState(Number(props.curtidas));
  function salvarPost() {
    if (salvar === false) {
      setSalvar(true)
    } else {
      setSalvar(false)
    }
  }
  function curtirIcone() {
    if (curtir === false) {
      setCurtir(true)
      curtidas++
    } else {
      setCurtir(false)
      curtidas--
    }
    setCurtidas(curtidas)
  }
  function curtirImagem() {
    if (curtir === false) {
      setCurtir(true)
      curtidas++
    }
    setCurtidas(curtidas)
  }
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
        <img src={props.imagemPost} onClick={curtirImagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={(curtir === false) ? "heart-outline" : "heart"} class={(curtir === false) ? "" : "curtido"} onClick={curtirIcone}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={(salvar === false) ? "bookmark-outline" : "bookmark"} onClick={salvarPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemLike} />
          <div class="texto">
            Curtido por <strong>{props.usuarioLike}</strong> e <strong>outras {curtidas.toLocaleString('pt-BR')} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    { fotoUsuario: "assets/img/meowed.svg", usuario: "meowed", imagemPost: "assets/img/gato-telefone.svg", imagemLike: "assets/img/respondeai.svg", usuarioLike: "respondeai", curtidas: "101523" },
    { fotoUsuario: "assets/img/barked.svg", usuario: "barked", imagemPost: "assets/img/dog.svg", imagemLike: "assets/img/adorable_animals.svg", usuarioLike: "adorable_animals", curtidas: "99159" }
  ]
  return (
    <div class="posts">
      {posts.map((p) => <Post fotoUsuario={p.fotoUsuario} usuario={p.usuario} imagemPost={p.imagemPost} imagemLike={p.imagemLike} usuarioLike={p.usuarioLike} curtidas={p.curtidas} />)}
    </div>
  );
}
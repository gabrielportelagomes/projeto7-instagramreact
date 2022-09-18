import React from "react"

function InformacoesUsuario(props) {
  const [nome, setNome] = React.useState("")
  const [imagem, setFoto] = React.useState("")
  function trocarNome() {
    const novoNome = prompt("Insira seu nome de usuário:")
    setNome(novoNome)
  }
  function trocarImagem() {
    const novaImagem = prompt("Insira o link da imagem de perfil:")
    setFoto(novaImagem)
  }
  return (
    <div class="usuario">
      <img src={(imagem === "" || imagem === null) ? `${props.imagem}` : imagem} onClick={trocarImagem}/>
      <div class="texto">
        <strong>{props.ususario}</strong>
        <span>
          {(nome === "" || nome === null) ? `${props.nome}` : nome}
          <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
        </span>
      </div>
    </div>
  )
}

export default function Usuario() {
  return (
    <InformacoesUsuario imagem="assets/img/catanacomics.svg" ususario="catanacomics" nome="Catana" />
  );
}
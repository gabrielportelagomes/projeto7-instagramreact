import React from "react"

export default function Usuario(props) {
  const [nome, setNome] = React.useState(props.nome)
  const [imagem, setFoto] = React.useState(props.imagem)
  function trocarNome() {
    const novoNome = prompt("Insira seu nome de usuário:")
    if (novoNome === null) {
      return nome
    } else if (novoNome === "" || novoNome === undefined) {
      alert("Insira um nome de usuário ou um nome válido!")
      return nome
    }
    setNome(novoNome)
  }
  function trocarImagem() {
    const novaImagem = prompt("Insira o link da imagem de perfil:")
    if (novaImagem === null) {
      return imagem
    } else if (novaImagem === "" || novaImagem === undefined) {
      alert("Insira um link de uma imagem!")
      return imagem
    }
    setFoto(novaImagem)
  }
  return (
    <div class="usuario">
      <img src={imagem} onClick={trocarImagem} />
      <div class="texto">
        <strong>{props.ususario}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={trocarNome}></ion-icon>
        </span>
      </div>
    </div>
  )
}
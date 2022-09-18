function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

export default function Sugestoes() {
  const sugestoes = [
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", status:"Segue você"},
    {imagem:"assets/img/chibirdart.svg", nome:"chibirdart", status:"Segue você"},
    {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", status:"Novo no Instagram"},
    {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals", status:"Segue você"},
    {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats", status:"Segue você"}
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} status={s.status}/>)}
    </div>
  );
}
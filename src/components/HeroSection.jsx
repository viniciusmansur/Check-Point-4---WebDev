const HeroSection = ({ titulo, subtitulo, textoBotao, imagemHero }) => {
  return (
    <section className="banner">
        <div className="banner-text">
          <h1>{titulo}</h1>
          <p>{subtitulo}</p>
          <button className="btn-primary">{textoBotao}</button>
        </div>
      </section>
  )
}

export default HeroSection

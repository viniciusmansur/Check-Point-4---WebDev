import { GiPlayButton } from "react-icons/gi";

const HeroSection = ({ titulo, subtitulo, textoBotao }) => {
  return (
    <section className="banner">
      <div className="banner-text">

        <span className="banner-tag">Série em destaque</span>

        <h1>{titulo}</h1>

        <p>{subtitulo}</p>

        <button className="btn-primary">
          <GiPlayButton /> {textoBotao}
        </button>

      </div>
    </section>
  )
}

export default HeroSection
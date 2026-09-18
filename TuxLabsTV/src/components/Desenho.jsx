import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Desenhos = ({ desenho1, desenho2, desenho3, desenho4 }) => {

    return (
        <section id="desenhos" className="desenhos">
            <h2>Desenhos animados em destaque</h2>

            <div className="desenhos-list">
                <div className="desenhos-card">
                    <img src={desenho1} alt="Gravity Falls" />
                    <h3>Gravity Falls</h3>
                    <p className="desenhos-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> (8.9)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="desenhos-card">
                    <img src={desenho2} alt="Ben 10" />
                    <h3>Ben 10</h3>
                    <p className="desenhos-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /> (7.6)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="desenhos-card">
                    <img src={desenho3} alt="Steven Universe" />
                    <h3>Steven Universe</h3>
                    <p className="desenhos-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /> (8.1)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="desenhos-card">
                    <img src={desenho4} alt="Apenas um Show" />
                    <h3>Apenas um Show</h3>
                    <p className="desenhos-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /> (8.6)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>
            </div>
        </section>
    )
}

export default Desenhos
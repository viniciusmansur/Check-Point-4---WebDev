const Filmes = ({ filme1, filme2, filme3, filme4 }) => {

    return (
        <section id="filmes" className="filmes">
            <h2>Filmes em destaque</h2>

            <div className="filmes-list">
                <div className="filmes-card">
                    <img src={filme1} alt="Parasita" />
                    <h3>Parasita</h3>
                    <p className="filmes-rating">⭐⭐⭐⭐☆ (8.5)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="filmes-card">
                    <img src={filme2} alt="Clube da Luta" />
                    <h3>Clube da Luta</h3>
                    <p className="filmes-rating">⭐⭐⭐⭐⭐ (8.8)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="filmes-card">
                    <img src={filme3} alt="O Poderoso Chefão" />
                    <h3>O Poderoso Chefão</h3>
                    <p className="filmes-rating">⭐⭐⭐⭐⭐ (9.2)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="filmes-card">
                    <img src={filme4} alt="Homem-Aranha: Um Novo Dia" />
                    <h3>Homem-Aranha: Um Novo Dia</h3>
                    <p className="filmes-rating">⭐⭐⭐⭐☆ (8.0)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>
            </div>
        </section>
    )
}

export default Filmes
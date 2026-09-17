const Products = ({ serie1, serie2, serie3, serie4 }) => {

    return (
        <section id="produtos" className="products">
            <h2>Séries em destaque</h2>

            <div className="product-list">
                <div className="product-card">
                    <img src={serie1} alt="TBBT"/>
                    <h3>The Big Bang Theory</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ (8.1)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="product-card">
                    <img src={serie2} alt="Sons of Anarchy" />
                    <h3>Sons of Anarchy</h3>
                    <p className="product-rating">⭐⭐⭐⭐⭐ (8.5)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="product-card">
                    <img src={serie3} alt="Suits" />
                    <h3>Suits</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ (8.4)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>

                <div className="product-card">
                    <img src={serie4} alt="Lucifer" />
                    <h3>Lucifer</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ (8.0)</p>
                    <button className="btn-secondary">Ver agora</button>
                </div>
            </div>
        </section>
    )
}

export default Products
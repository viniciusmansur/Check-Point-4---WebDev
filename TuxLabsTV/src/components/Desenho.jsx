import { useState, useEffect } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const Desenhos = () => {
  const [desenhos, setDesenhos] = useState([]);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=16&language=pt-BR&page=${randomPage}&vote_average.gte=6&vote_count.gte=100`;
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` 
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const randomDesenhos = data.results
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
          
        setDesenhos(randomDesenhos);
      });
  }, []);

  const adicionarALista = (item) => {
    const listaAtual = JSON.parse(localStorage.getItem('minhaLista')) || [];
    const jaExiste = listaAtual.find((elemento) => elemento.id === item.id);

    if (!jaExiste) {
      const novaLista = [...listaAtual, item];
      localStorage.setItem('minhaLista', JSON.stringify(novaLista));
      alert(`${item.title || item.name} adicionado à lista!`);
    } else {
      alert("Este título já está na lista.");
    }
  };

  const renderStars = (voteAverage) => {
    const rating = voteAverage / 2; 
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalf key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <section id="desenhos" className="desenhos">
      <h2>Desenhos em destaque</h2>

      <div className="desenhos-list">
        {desenhos.map((desenho) => (
          <div key={desenho.id} className="desenhos-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${desenho.poster_path}`} 
              alt={desenho.title} 
            />
            <h3>{desenho.title}</h3>
            
            <p className="desenhos-sinopse">
              {desenho.overview}
            </p>

            <p className="desenhos-rating">
              {renderStars(desenho.vote_average)} ({desenho.vote_average.toFixed(1)})
            </p>
             <div className='btns'>
                <button className="btn-secondary">Ver agora</button>
                <button className='btn-secondary' onClick={() => adicionarALista(desenho)}>Adicionar a lista</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Desenhos;
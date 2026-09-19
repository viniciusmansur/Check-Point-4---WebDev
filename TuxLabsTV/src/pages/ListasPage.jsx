import Header from '../components/Header'
import { useState, useEffect } from 'react';

const ListasPage = () => {
  const [minhaLista, setMinhaLista] = useState([]);

  useEffect(() => {
    const listaSalva = JSON.parse(localStorage.getItem('minhaLista')) || [];
    setMinhaLista(listaSalva);
  }, []);

  const removerDaLista = (id) => {
    const novaLista = minhaLista.filter((item) => item.id !== id);
    setMinhaLista(novaLista);
    localStorage.setItem('minhaLista', JSON.stringify(novaLista));
  };


  return (
    <>
    <Header />
  <section>

    {minhaLista.map((item) => (
        <div key={item.id} className="lista-card">

        <img
          className="lista-capa"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title || item.name}
          />

        <div className="lista-info">

          <h3>{item.title || item.name}</h3>

          <p>
            {item.overview}
          </p>

          <button
            className="btn-remover"
            onClick={() => removerDaLista(item.id)}
            >
            Remover da lista
          </button>

        </div>

      </div>
    ))}

  </section>
    </>
  )
}

export default ListasPage
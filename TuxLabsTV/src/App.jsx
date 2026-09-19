import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import Desenhos from './components/Desenho'
import Filmes from './components/Filmes'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Series from './components/Series'

const App = () => {

  return (
    <div className="app">
      <Header />
      <HeroSection 
        titulo ="Breaking Bad"
        subtitulo="Walter White é um professor de química que, após descobrir uma doença grave, entra no mundo do crime para garantir o futuro de sua família. Ao lado de Jesse Pinkman, ele começa uma jornada cheia de riscos e consequências."textoBotao = "Ver agora"
      />
      <Categories/>
      <Series />
      <Filmes />
      <Desenhos />
      <Footer />
    </div>
  )
}

export default App
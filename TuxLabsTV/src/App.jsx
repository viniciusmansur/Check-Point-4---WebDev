import { useState } from 'react'
import './App.css'
import hero from './assets/bb.png'
import serie1 from './assets/tbbt.png'
import serie2 from './assets/soa.png'
import serie3 from './assets/suits.png'
import serie4 from './assets/lucifer.png'
import filme1 from './assets/parasita.png'
import filme2 from './assets/cdl.png'
import filme3 from './assets/opc.png'
import filme4 from './assets/haund.png'
import desenho1 from './assets/gf.png'
import desenho2 from './assets/b10.png'
import desenho3 from './assets/su.png'
import desenho4 from './assets/aus.png'
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
        subtitulo= "Walter White é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler, sua esposa grávida, e Walt Junior, seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família após sua morte, Walter usa seu conhecimento de química para fazer e vender metanfetamina, uma droga sintética. Ele conta com a ajuda do ex-aluno e pequeno traficante Jesse e enfrenta vários desafios, incluindo o fato de seu concunhado ser um importante nome dentro da Agência Anti-Drogas da região."
        textoBotao = "Ver agora"
      />
      <Categories/>
      <Series 
        serie1={serie1}
        serie2={serie2}
        serie3={serie3}
        serie4={serie4}

      />
      <Filmes 
        filme1={filme1}
        filme2={filme2}
        filme3={filme3}
        filme4={filme4}

      />
      <Desenhos
        desenho1={desenho1}
        desenho2={desenho2}
        desenho3={desenho3}
        desenho4={desenho4}

      />
      <Footer />
    </div>
  )
}

export default App
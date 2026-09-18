Arquitetura — TuxLabsTV

Páginas
A aplicação possui três rotas principais e uma página de erro.

A página inicial reúne os principais componentes da aplicação:
Header
HeroSection
Categories
Products
Filmes
Desenhos
Footer

A página apresenta:
Hero;
Categorias de gêneros;
Séries em destaque;
Filmes em destaque;
Desenhos animados em destaque;
Rodapé com links úteis.

Página de listas
Local aonde os usuários poderão criar suas listas personalizadas

Página de contato
Representa a página destinada ao contato e informações relacionadas ao projeto.

Página 404
A página é utilizada pelo React Router quando ocorre um erro na rota principal.

Rotas
O roteamento é configurado em src/main.jsx utilizando createBrowserRouter.

Rota         Componente     Função            
/            App           Página inicial    
/listas    ProductsPage  Página de listas  
/contato     ContatoPage   Página de contato 
Erro         PageNotFound  Página 404        

A navegação é realizada pelo componente Link do React Router no Header.


Componentes:
Header
HeroSection
Categories
Series
Filmes
Desenhos
Footer
Props
Estado do React (O projeto utiliza o hook useState no componente App.)
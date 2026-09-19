const Footer = () => {
    return (
    <footer id="contato" className="footer">
        <div className="footer-column">
            <h3>TuxLabsTv</h3>
            <p>O melhor site para se manter atualizado em filmes, séries e desenhos animados.</p>
        </div>

        <div className="footer-column">
            <h3>Links úteis</h3>
            <ul>
                <li><a href="/listas">Listas</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="#lista">Sobre nós</a></li>
            </ul>
        </div>

        <div className="footer-column">
            <h3>Membros do projeto</h3>
            <ul>
                <li className="membro">Eduardo de Abreu Gouvêa - RM573414</li>
                <li className="membro">Paulo Henrique Moreira Angueira - RM573245</li>
                    <li className="membro">Vinícius Mansur Magalhães - RM571518</li>
            </ul>
        </div>

        <p className="copyright">© 2026 TuxLabsTv. Todos os direitos reservados.</p>
    </footer>
    )
}

export default Footer
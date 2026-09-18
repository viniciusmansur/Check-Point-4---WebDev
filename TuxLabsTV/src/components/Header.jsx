
import { Link } from "react-router"

const Header = () => {

    return (
        <header className="header">
            <div className="logo">TuxLabsTV</div>
        
            <ul className="nav">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/listas">Listas</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </header>
  )
}

export default Header
import Header from '../components/Header'
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContatoPage = () => {
    return (
        <>
            <Header />
            <section>
                <h1>Página de Contato</h1>
                <p>Para entrar em contato com a nossa equipe temos os seguintes canais:</p>
                <p><FaWhatsapp />Whatsapp: 00000-0000</p>
                <p><BsFillTelephoneFill />Telefone: 00000-0000 </p>
                <p><MdEmail />Email: TuxLabsTV@gmail.com </p>
            </section>
        </>
    )
}

export default ContatoPage
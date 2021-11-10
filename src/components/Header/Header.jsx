import './Header.css'
import logo_ATR from './logo_ATR.png'
import CartWidget from '../CartWidget/CartWidget';

const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light
                            bg-transparent">
                        <a className="navbar-brand" href="#"><img src={logo_ATR} alt="logo"
                                className="logoHeader" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/atr.html">ATR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/servicios.html">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/contacto.html">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <CartWidget/>
            </nav>
        </header>
    )
}
export default Header
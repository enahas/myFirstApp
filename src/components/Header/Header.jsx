import './Header.css'
import logo_ATR from '../Header/logo_ATR.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { services } from '../../arrayServices'

const Header = ({ title }) => {
    const categories = [
        { id: 'jjj', adress: '/', text: 'Todos los productos' },
        { id: 'kkk', adress: '/category/A', text: 'Categoría A' },
        { id: 'hhh', adress: '/category/B', text: 'Categoría B' }
    ]
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light
                            bg-transparent">
                <NavLink className="navbar-brand" to="/"><img src={logo_ATR} alt="logo"
                        className="logoHeader" /></NavLink>
                <div className="collapse navbar-collapse hola" id="navbarSupportedContent">
                        {categories.map((cat) => {
                            return (
                                <div className='links' key={cat.id}>
                                    <Link to={cat.adress}>{cat.text}</Link>
                                </div>
                            );
                        })
                        }
                </div>
                <button class="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle
                                navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <CartWidget />
            </nav>
        </header>
    )
}
export default Header
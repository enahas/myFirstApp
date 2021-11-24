import './Header.css'
import logo_ATR from '../Header/logo_ATR.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import { services } from '../../arrayServices'

const Header = ({title}) =>{
    const categories = [
        { id: 'jjj', adress: '/', text: 'Todos los productos' },
        { id: 'kkk',adress: '/category/A', text: 'Categoría A' },
        { id: 'hhh',adress: '/category/B', text: 'Categoría B' }
    ]
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light
                            bg-transparent">
                        <NavLink className="navbar-brand" to="/"><img src={logo_ATR} alt="logo"
                                className="logoHeader" /></NavLink>
                        <button class="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle
                                navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName='currentcategory' 
                                    to="/">Catálogo</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName='currentcategory' 
                                    to={`/item/${title}`}>Detalle de Producto</NavLink>
                                </li> */}
                            </ul>
                        </div>
                        <CartWidget/>
            </nav>
            <section>
                {categories.map((cat) =>{
                    return(
                        <div className='links' key={cat.id}>
                            <Link to={cat.adress}>{cat.text}</Link>
                        </div>
                    );
                })
                }
            </section>
        </header>
    )
}
export default Header
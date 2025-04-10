import "./styles.css"

function Menu() {
    return (
        <div className='menu-container'>
            <div className="menu-logo">Farmacia Cactus Jack</div>
            <nav className="menu-items">
                <button className="menu-buttons">
                    <a href="#inicio">Inicio</a>
                </button>
                <button className="menu-buttons">
                    <a href="#productos">Productos</a>
                </button>
                <button className="menu-buttons contact-button">
                    <a href="#contacto">Contacto</a>
                </button>
            </nav>
        </div>
    )
}

export default Menu;

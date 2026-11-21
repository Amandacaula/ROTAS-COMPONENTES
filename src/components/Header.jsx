import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <span className="logo">Rotas &amp; Componentes</span>
      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </nav>
    </header>
  )
}

export default Header

import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="page">
      <h1>Sobre</h1>
      <p>Este projeto demonstra rotas, componentes de layout, lazy loading e parâmetros de URL.</p>
      <nav className="page-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </section>
  )
}

export default About

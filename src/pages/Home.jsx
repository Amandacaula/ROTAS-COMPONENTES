import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page">
      <h1>Home</h1>
      <p>Bem-vindo ao site de exemplo construído com React Router.</p>
      <nav className="page-links">
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </section>
  )
}

export default Home

import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="page">
      <h1>Contato</h1>
      <p>Envie um e-mail para contato@exemplo.com ou ligue para (00) 0000-0000.</p>
      <nav className="page-links">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </section>
  )
}

export default Contact

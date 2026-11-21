import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page">
      <h1>404</h1>
      <p>A página que você procura não existe.</p>
      <nav className="page-links">
        <Link to="/">Voltar para Home</Link>
      </nav>
    </section>
  )
}

export default NotFound

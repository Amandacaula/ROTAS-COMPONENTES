import { Link, useParams } from 'react-router-dom'
import users from '../data/users'

function UserProfile() {
  const { id } = useParams()
  const user = users.find((item) => item.id === Number(id))

  if (!user) {
    return (
      <section className="page">
        <h1>Usuário não encontrado</h1>
        <p>Nenhum usuário corresponde ao ID {id}.</p>
        <nav className="page-links">
          <Link to="/">Voltar para Home</Link>
        </nav>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>{user.name}</h1>
      <ul className="profile">
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Cargo:</strong> {user.role}</li>
        <li><strong>E-mail:</strong> {user.email}</li>
        <li><strong>Cidade:</strong> {user.city}</li>
      </ul>
      <nav className="page-links">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </section>
  )
}

export default UserProfile

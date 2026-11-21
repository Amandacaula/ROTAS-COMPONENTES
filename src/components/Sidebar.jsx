import { NavLink } from 'react-router-dom'

const users = [
  { id: 1, name: 'Ana Souza' },
  { id: 2, name: 'Bruno Lima' },
  { id: 3, name: 'Carla Mendes' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

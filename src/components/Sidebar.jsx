import { NavLink } from 'react-router-dom'
import users from '../data/users'

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
